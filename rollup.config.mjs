import resolve from '@rollup/plugin-node-resolve';

export default {
	input: "./home.js",
	output: [
		{
			format: 'cjs',
			file: "./home-bundle.js"
		},
	],
	plugins: [
		resolve(),
	  ]
};