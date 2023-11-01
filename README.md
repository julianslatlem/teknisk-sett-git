# Teknisk Sett Git
This project utilizes utilities such as: **Node.js**, **Three.js** and **Rollup**,<br>
and as such requires some knowledge and setting up before you begin making changes.

## How to install prerequisites
First of all, you need **Node.js**,<br>
you can install this by going to https://nodejs.org/en/download and downloading the latest LTS version for your platform.<br>
You can check if **Node.js** was installed correctly by typing <code>npm</code> in the console.

Next, you need **Rollup**,<br>
you can install this by typing <code>npm install rollup --global</code> in the console. <br>
If this doesn't work, please double check that you have installed **Node.js** correctly, <br>
and for a more comprehensive guide on how to both install and use **Rollup** please refer to https://rollupjs.org/tutorial/.

## How to use prerequisites
Whenever you make changes to files utilizing imports, you should add the edited file to **rollup.config.mjs** if not already added; <br>
you can do this by specifying an **input file** and an **output file**, this will effectively generate a new file containing both the code from the input file, as well as the code from the import, this will ensure that all the javascript code gets added correctly.

You will then have to run **Rollup** to actually execute this config and generate the bundled files; you can do this with the command <code>npx rollup -c</code>.<br>
This will generate the bundle files, you should use these bundle files in place of the "normal" files.<br>
You can also optionally use the command <code>npx rollup -c -w</code> to automatically update the bundle files whenever changes are made.

You should now be able to launch the website like any other with all the 3D graphics working.
