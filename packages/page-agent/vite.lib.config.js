// @ts-check
/**
 * Self-contained ESM library build for git-install consumption (release branch).
 *
 * Unlike vite.config.js (which externalizes the `@page-agent/*` workspace
 * packages), this build aliases them to their source and bundles everything in —
 * including chalk / zod / ai-motion — so the emitted package has ZERO runtime
 * dependencies and resolves standalone when installed straight from git.
 *
 * Types are produced separately by rollup.dts.config.js (rollup-plugin-dts),
 * which reliably inlines the workspace declarations via tsconfig `paths`.
 */
import { createRequire } from 'module'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)

const workspacePackages = ['core', 'ui', 'page-controller', 'llms']

/** Alias each `@page-agent/*` package to its source entry so it is bundled in. */
const aliases = workspacePackages.map((pkg) => {
	const pkgDir = resolve(__dirname, '..', pkg)
	const { name, main } = require(`${pkgDir}/package.json`)
	return { find: name, replacement: resolve(pkgDir, main) }
})

export default defineConfig({
	clearScreen: false,
	resolve: { alias: aliases },
	plugins: [cssInjectedByJsPlugin({ relativeCSSInjection: true })],
	publicDir: false,
	build: {
		lib: {
			entry: resolve(__dirname, 'src/PageAgent.ts'),
			name: 'PageAgent',
			fileName: 'page-agent',
			formats: ['es'],
		},
		outDir: resolve(__dirname, 'dist', 'lib'),
		rollupOptions: { external: [] },
		minify: false,
		sourcemap: true,
		cssCodeSplit: true,
	},
	define: {
		'process.env.NODE_ENV': '"production"',
	},
})
