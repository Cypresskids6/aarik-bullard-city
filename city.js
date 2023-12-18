import*as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 12
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement); 
const loader = new GLTFLoader();

loader.load("./philips futer city.glb ", function(gltf){
    scene.add(gltf.scene);
} );

const light = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(light);

const sun = new THREE.PointLight(0xffffff, 1000000)
sun.position.set(0,500,0);
scene.add(sun)

const controls = new OrbitControls(camera,renderer.domElement);
camera.position.z = 5;
controls.update();

function animate (){
    requestAnimationFrame(  animate  )
controls.update();
    renderer.render(scene,camera);
}
animate(); 