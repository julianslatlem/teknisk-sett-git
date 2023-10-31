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
    canvas: document.getElementById("testCanvas"),
    antialias: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const geometry = new THREE.TorusGeometry(10, 3, 10, 50);
const material = new THREE.MeshBasicMaterial({color: 0xf1502f, wireframe: true});
// const torous = new THREE.Mesh(geometry, material);
// scene.add(torous);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.rotation.z += 1;
scene.add(directionalLight);

let torous;

loader.load("./models/git-logo.glb", (gltf) => {
    torous = gltf.scene;
    
    torous.scale.set(10, 10, 10);
    torous.position.x = -10;

    scene.add(torous);
});

let torous2;

loader.load("./models/github-logo.glb", (gltf) => {
    torous2 = gltf.scene;
    
    torous2.scale.set(10, 10, 10);
    torous2.position.x = 10;

    scene.add(torous2);
});


function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
}

const color = new THREE.Color();
renderer.setClearColor(color, 0);

document.body.onscroll = moveCamera;

function animate() {
    requestAnimationFrame(animate);

    torous.rotation.y += 0.01;
    torous2.rotation.y += -0.01;

    renderer.render(scene, camera);
}

animate();