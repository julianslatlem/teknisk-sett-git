import resolve from '@rollup/plugin-node-resolve';

export default [
	{
		input: "./JS/home.js",
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
		input: "./JS/logo.js",
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
		input: "./JS/nisse.js",
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