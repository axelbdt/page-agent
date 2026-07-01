// @ts-check
/**
 * Bundles a single self-contained `page-agent.d.ts` for the release build.
 *
 * rollup-plugin-dts runs its own TypeScript program, so the `@page-agent/*`
 * workspace imports are resolved to their source via tsconfig `paths` and inlined
 * — the emitted declaration has no dependency on the workspace packages.
 */
import { createRequire } from 'module'
import { dirname, resolve } from 'path'
import { dts } from 'rollup-plugin-dts'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)

const workspacePackages = ['core', 'ui', 'page-controller', 'llms']

const paths = Object.fromEntries(
	workspacePackages.map((pkg) => {
		const pkgDir = resolve(__dirname, '..', pkg)
		const { name, main } = require(`${pkgDir}/package.json`)
		return [name, [resolve(pkgDir, main)]]
	})
)

export default {
	input: resolve(__dirname, 'src/PageAgent.ts'),
	output: { file: resolve(__dirname, 'dist/lib/page-agent.d.ts'), format: 'es' },
	plugins: [
		dts({
			respectExternal: true,
			compilerOptions: {
				baseUrl: __dirname,
				paths,
				composite: false,
				declaration: true,
				emitDeclarationOnly: true,
				noEmit: false,
			},
		}),
	],
}
