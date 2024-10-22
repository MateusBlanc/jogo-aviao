let scene, camera, renderer;

document.getElementById('startGameBtn').addEventListener('click', startGame);

function startGame() {
  // Esconder o menu e exibir o canvas do jogo
  document.getElementById('menu').style.display = 'none';
  document.getElementById('gameCanvas').style.display = 'block';
  
  // Inicializar o Three.js
  init();
  animate();
}

function init() {
  const canvas = document.getElementById('gameCanvas');
  
  // Criar cena, câmera e renderizador
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Adicionar um cubo simples para teste
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;
}

function animate() {
  requestAnimationFrame(animate);
  
  // Renderizar a cena
  renderer.render(scene, camera);
}