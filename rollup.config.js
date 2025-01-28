const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('rollup-plugin-typescript2');
const postcss = require('rollup-plugin-postcss');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const { defineConfig } = require('rollup');

// TailwindCSS Configuration
const postcssConfig = {
	plugins: [require('tailwindcss')],
};

module.exports = defineConfig({
	input: 'src/index.ts',
	output: [
		{
			file: 'dist/index.cjs.js',
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: 'dist/index.esm.js',
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		peerDepsExternal(),
		resolve(),
		commonjs(),
		typescript({
			useTsconfigDeclarationDir: true,
			tsconfig: './tsconfig.json',
		}),
		postcss({
			extract: true,
			minimize: true,
			sourceMap: true,
			config: {
				path: './postcss.config.mjs',
			},
			...postcssConfig,
		}),
	],
	external: ['react', 'react-dom'],
});
