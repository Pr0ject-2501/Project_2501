const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

const controls = new THREE.OrbitControls(camera, renderer.domElement)
controls.rotateSpeed = 0.3;
controls.enableDamping = true;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.4;
camera.position.set( 1, 0, 0 );
controls.update();


const geometry = new THREE.SphereGeometry( 50, 32, 32 );
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('360_002.jpg');
const material = new THREE.MeshBasicMaterial( {
    map: texture,
    side: THREE.DoubleSide
} );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere )



function animate() {

	requestAnimationFrame( animate );
	

	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();

	renderer.render( scene, camera );

}

animate();


document.onmousemove = function(e) {
    document.body.style.setProperty('--x',(e.clientX)+'px');
    document.body.style.setProperty('--y',(e.clientY)+'px');
    
  }
