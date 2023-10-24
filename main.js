import "./styles.css"

import * as THREE from "three";

window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#backgroundCanvas"),
    antialias: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const geometry = new THREE.TorusGeometry(10, 3, 10, 50);
const material = new THREE.MeshBasicMaterial({color: 0xf1502f, wireframe: true});
const torous = new THREE.Mesh(geometry, material);
scene.add(torous);

torous.position.z = 55;

const initialColor = new THREE.Color(0x010409);
const targetColor = new THREE.Color(0x161b22);

scene.background = initialColor;

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    torous.rotation.z = t * -0.002;
    torous.rotation.y = t * -0.00285;
    torous.position.z = 55 - (t * -0.022);

    // if (t < -1500) {
    //     torous.position.y = (t + 1500) * -0.02;
    // }

    const progress = Math.min(t * -0.00015, 1);

    const color = new THREE.Color();
    color.lerpColors(initialColor, targetColor, progress);

    scene.background = color;
    renderer.setClearColor(color, 1);
}

document.body.onscroll = moveCamera;

function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

animate();