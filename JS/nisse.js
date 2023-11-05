/* This file doesn't contain any comments as it is almost exactly the same as the other files. */

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
    canvas: document.getElementById("nisseCanvas"),
    antialias: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const directionalLight = new THREE.DirectionalLight(0xaaaaff, 0.5);
scene.add(directionalLight);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1.2);
scene.add(directionalLight2);

const lightTarget = new THREE.Object3D();
scene.add(lightTarget);

directionalLight.position.set(0, 0, 0);

lightTarget.position.set(0, 0, -1);

directionalLight.target = lightTarget;

let nisse;

loader.load("../models/nisse.glb", (gltf) => {
    nisse = gltf.scene;
    
    nisse.scale.set(3, 3, 3);
    nisse.position.x = -10;

    scene.add(nisse);
});

renderer.setClearAlpha(0);

function animate() {
    requestAnimationFrame(animate);

    nisse.rotation.y += 0.15;
    nisse.rotation.x += 0.02;

    renderer.render(scene, camera);
}

animate();