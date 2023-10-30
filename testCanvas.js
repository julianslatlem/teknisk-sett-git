import "./styles.css"

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
    canvas: document.querySelector("#testCanvas"),
    antialias: true,
    outputColorSpace: THREE.SRGBColorSpace,
    alpha: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const color = new THREE.Color(0xffffff);

renderer.setClearColor(color, 0);

let model;

loader.load("./models/morten.glb", (gltf) => {
    model = gltf.scene;
    
    model.scale.set(30, 30, 30);

    scene.add(model);
});

const ambientLight = new THREE.AmbientLight(0xaaaaff, 0.5); // soft white light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
scene.add(directionalLight);


function animate() {
    requestAnimationFrame(animate);

    model.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();