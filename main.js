import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202020);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });  // Red color

// First cube
const cubeMesh = new THREE.Mesh(geometry, material);
scene.add(cubeMesh);
cubeMesh.position.set(0.7, -0.6, 1);
cubeMesh.scale.set(2, 0.25, 0.5);
cubeMesh.rotation.x = Math.PI * 0.25;
cubeMesh.rotation.y = Math.PI * 0.25;

// Second cube
const cubeMesh2 = new THREE.Mesh(geometry, material);
scene.add(cubeMesh2);
cubeMesh2.position.set(-2, 0, 0);
cubeMesh2.scale.set(1, 1, 1);
cubeMesh2.rotation.x = 0;
cubeMesh2.rotation.y = 0;

// Third cube
const cubeMesh3 = new THREE.Mesh(geometry, material);
scene.add(cubeMesh3);
cubeMesh3.position.set(2, 1, -1);
cubeMesh3.scale.set(1.5, 1.5, 1.5);
cubeMesh3.rotation.x = Math.PI / 4;
cubeMesh3.rotation.y = Math.PI / 4;

console.log("Distance of cube from camera:", cubeMesh.position.distanceTo(camera.position));

// Axes Helper
const axes = new THREE.AxesHelper(4);
scene.add(axes);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
