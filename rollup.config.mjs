import resolve from '@rollup/plugin-node-resolve';

export default [
	{
		input: "./javascript/home.js",
		output: [
			{
				format: 'cjs',
				file: "./bundles/home-bundle.js"
			},
		],
		plugins: [
			resolve(),
		]
	},
	{
		input: "./javascript/logo.js",
		output: [
			{
				format: 'cjs',
				file: "./bundles/logo-bundle.js"
			},
		],
		plugins: [
			resolve(),
		]
	},
	{
		input: "./javascript/nisse.js",
		output: [
			{
				format: 'cjs',
				file: "./bundles/nisse-bundle.js"
			},
		],
		plugins: [
			resolve(),
		]
	}
];