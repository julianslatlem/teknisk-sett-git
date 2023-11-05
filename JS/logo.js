/*  More detailed comments explaining more of how javascript and the libraries used work in detail are in the home.js file
 *  and will not be explained in the same detail here, as the two files are mostly the same in that sense;
 *  although, this file will still include comments that are more specific to this file.
 */

import * as THREE from "three";

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("logoCanvas"), // Note how this gets the canvas with an id of "logoCanvas" from the home html file, as opposed to the "backgroundCanvas in home.js".
    antialias: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
scene.add(directionalLight);

let gitLogo;
let githubLogo;

/* This loads the git-logo model */
loader.load("../models/git-logo.glb", (gltf) => {
    gitLogo = gltf.scene;
    
    gitLogo.scale.set(10, 10, 10);
    gitLogo.position.x = -10;

    scene.add(gitLogo);
});

/* This loads the github-logo model */
loader.load("../models/github-logo.glb", (gltf) => {
    githubLogo = gltf.scene;
    
    githubLogo.scale.set(10, 10, 10);
    githubLogo.position.x = 10;

    scene.add(githubLogo);
});

renderer.setClearAlpha(0); // This essentially just makes the background of the canvas transparent, and by doing this lets only the logos themselves render on top of other html elements.

/* This function gets executed every frame, and is responsible for rotating the two models consistently. */
function animate() {
    requestAnimationFrame(animate);

    gitLogo.rotation.y += 0.01;
    githubLogo.rotation.y += -0.01;

    renderer.render(scene, camera);
}

animate();