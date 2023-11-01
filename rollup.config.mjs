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
		input: "./javascript/git-logo.js",
		output: [
			{
				format: 'cjs',
				file: "./bundles/git-logo-bundle.js"
			},
		],
		plugins: [
			resolve(),
		]
	}
];