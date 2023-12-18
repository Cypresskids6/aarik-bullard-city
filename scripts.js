import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 12
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement); 

const geometry1 = new THREE.TorusGeometry(3,2,64,64)
const material1 = new THREE.MeshBasicMaterial({color: 0x212752});
const cube1 = new THREE.Mesh(geometry1,material1);
scene.add(cube1)
 cube1.position.x = -5
const geometry2 = new THREE.TorusGeometry(3,2,64,64)
const material2 = new THREE.MeshBasicMaterial({color: 0x212752});
const cube2 = new THREE.Mesh(geometry2,material2);
scene.add(cube2)
cube2.position.x = 5
function animate (){
    requestAnimationFrame(  animate  )
cube1.rotation.x += 1
cube1.rotation.y +=  1

cube2.rotation.x += 1
cube2.rotation.y +=  1
    renderer.render(scene,camera);
}
animate(); 