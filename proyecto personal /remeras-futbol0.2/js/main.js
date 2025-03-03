// Configuración del visor 3D con Three.js
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

const colorPicker = document.getElementById('colorPicker');
const uploadLogo = document.getElementById('uploadLogo');
const downloadBtn = document.getElementById('downloadBtn');

let shirtMaterial;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / 600, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('shirt-viewer') });

camera.position.z = 3;
renderer.setSize(window.innerWidth, 600);
scene.background = new THREE.Color(0xffffff);

// Crear un modelo básico de camiseta
const shirtGeometry = new THREE.BoxGeometry(2, 3, 0.5);
shirtMaterial = new THREE.MeshBasicMaterial({ color: '#ffffff' });
const shirtMesh = new THREE.Mesh(shirtGeometry, shirtMaterial);
scene.add(shirtMesh);

function animate() {
    requestAnimationFrame(animate);
    shirtMesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();

// Cambiar color de la camiseta
colorPicker.addEventListener('input', (e) => {
    shirtMaterial.color.set(e.target.value);
});

// Descargar vista en imagen
downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = renderer.domElement.toDataURL('image/png');
    link.download = 'remera_personalizada.png';
    link.click();
});
