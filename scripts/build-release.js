#!/usr/bin/env node
/**
 * Assembles the git-installable `release` branch for the `page-agent` package.
 *
 * Consumers install it with:
 *   npm i github:axelbdt/page-agent#release
 *
 * The branch is a FLAT single-package repo: its root package.json IS the
 * `page-agent` package (so npm installs it directly, unlike the private monorepo
 * root on `main`), pointing at a self-contained, zero-dependency build.
 *
 * Pipeline:
 *   1. Build the self-contained ESM bundle (vite.lib.config.js).
 *   2. Bundle a self-contained page-agent.d.ts (rollup.dts.config.js).
 *   3. Stage the built files + a flat package.json into a temporary git worktree
 *      checked out on `release`, commit, and clean up.
 *
 * The commit is NOT pushed — the script prints the push command so publishing
 * stays an explicit, manual step.
 */
import chalk from 'chalk'
import { execSync } from 'child_process'
import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'fs'
import { tmpdir } from 'os'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')
const pkgDir = join(rootDir, 'packages', 'page-agent')
const libDir = join(pkgDir, 'dist', 'lib')

const run = (command, cwd = rootDir) => execSync(command, { cwd, stdio: 'inherit' })
const capture = (command, cwd = rootDir) => execSync(command, { cwd }).toString().trim()

const { version } = JSON.parse(readFileSync(join(pkgDir, 'package.json'), 'utf-8'))
const sourceSha = capture('git rev-parse --short HEAD')

console.log(chalk.bgBlue.white.bold(` ▸ build self-contained bundle (v${version}) `))
rmSync(join(pkgDir, 'dist', 'lib'), { recursive: true, force: true })
run('npx vite build --config vite.lib.config.js', pkgDir)

console.log(chalk.bgBlue.white.bold(' ▸ bundle declaration file '))
run('npx rollup -c rollup.dts.config.js', pkgDir)

console.log(chalk.bgBlue.white.bold(' ▸ assemble release branch '))
const releasePkg = {
	name: 'page-agent',
	version,
	description: 'GUI agent for web applications (self-contained release build)',
	license: 'MIT',
	type: 'module',
	main: './page-agent.js',
	module: './page-agent.js',
	types: './page-agent.d.ts',
	exports: {
		'.': {
			types: './page-agent.d.ts',
			import: './page-agent.js',
			default: './page-agent.js',
		},
	},
	files: ['*.js', '*.d.ts', '*.map'],
	repository: { type: 'git', url: 'https://github.com/axelbdt/page-agent.git' },
}

const worktree = mkdtempSync(join(tmpdir(), 'page-agent-release-'))
try {
	run(`git worktree add --force -B release "${worktree}" HEAD`)
	run('git rm -rf --quiet . || true', worktree)
	cpSync(libDir, worktree, { recursive: true })
	writeFileSync(join(worktree, 'package.json'), JSON.stringify(releasePkg, null, 2) + '\n')
	run('git add -A', worktree)
	run(
		`git -c commit.gpgsign=false commit -m "release: page-agent v${version} (built from ${sourceSha})"`,
		worktree
	)
	console.log(chalk.green.bold('\n✓ release branch built.'))
	console.log('  Review it, then publish with:')
	console.log(chalk.cyan('    git push -f origin release\n'))
} finally {
	run(`git worktree remove --force "${worktree}"`)
}
