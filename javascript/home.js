

var allApps = ["#terminal-container", "#bing-container"];
window.openApps = {};
window.hotApps = {};
let camera, scene, renderer, parameters;
let mouseX = 0, mouseY = 0;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

const materials = [];

init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);

	camera.position.z = 1000;
	camera.rotateSpeed = 0.0001
	scene = new THREE.Scene();
	scene.fog = new THREE.FogExp2(0x000000, 0.0008);
	//scene.background = new THREE.Color(0x353D53);


	const geometry = new THREE.BufferGeometry();
	const vertices = [];

	const textureLoader = new THREE.TextureLoader();

	const sprite1 = textureLoader.load("https://raw.githubusercontent.com/Joshua-Zou/personal-website/main/images/homepagetriangle.png")
	for (let i = 0; i < 10000; i++) {

		const x = Math.random() * 2000 - 1000;
		const y = Math.random() * 2000 - 1000;
		const z = Math.random() * 2000 - 1000;

		vertices.push(x, y, z);

	}

	geometry.addAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

	parameters = [
		[[0.90, 0.05, 0.5], sprite1, 4],
	];


	for (let i = 0; i < parameters.length; i++) {

		const color = parameters[i][0];
		const sprite = parameters[i][1];
		const size = parameters[i][2];

		materials[i] = new THREE.PointsMaterial({ size: size, map: sprite, blending: THREE.AdditiveBlending, depthTest: false, transparent: true });
		materials[i].color.setHSL(color[0], color[1], color[2]);

		const particles = new THREE.Points(geometry, materials[i]);

		particles.rotation.x = Math.random() * 6;
		particles.rotation.y = Math.random() * 6;
		particles.rotation.z = Math.random() * 6;
		particles.rotation.set(100, 50, 0)
		scene.add(particles);

	}

	//

	renderer = new THREE.WebGLRenderer({ alpha: true });
	renderer.setClearColor(0x000000, 0); // the default
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.domElement.classList.add("background-canvas-thingy");
	document.getElementById("background-canvas").appendChild(renderer.domElement)
	$(renderer.domElement).bind('touchstart');
	$(document.body).bind("touchstart")
	//document.body.appendChild(renderer.domElement);
	//


	//


	const params = {
		texture: true
	};


	document.body.addEventListener('pointermove', onPointerMove);

	//

	window.addEventListener('resize', onWindowResize);

}

function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);

}

function onPointerMove(event) {

	if (event.isPrimary === false) return;

	mouseX = (event.clientX - windowHalfX) / 10;
	mouseY = (event.clientY - windowHalfY) / 10;

}

//

function animate() {

	requestAnimationFrame(animate);

	render();

}

function render() {

	const time = Date.now() * 0.00005;

	camera.position.x += (mouseX - camera.position.x) * 0.05;
	camera.position.y += (- mouseY - camera.position.y) * 0.05;

	camera.lookAt(scene.position);

	for (let i = 0; i < scene.children.length; i++) {

		const object = scene.children[i];

		if (object instanceof THREE.Points) {

			object.rotation.y = time * (i < 4 ? i + 1 : - (i + 1));
			object.rotation.x = time * (i < 4 ? i + 1 : - (i + 1));
			object.rotation.z = time * (i < 4 ? i + 1 : - (i + 1));
			object.rotateX(THREE.Math.degToRad(50));


			var timex = Date.now() * 0.0005;
			object.position.x = Math.cos(timex * 10) * 5;
			object.position.y = Math.cos(timex * 7) * 3;
			object.position.z = Math.cos(timex * 8) * 4;

			// Animating sphere 2
			object.rotation.y += 100;
		}

	}

	for (let i = 0; i < materials.length; i++) {

		const color = parameters[i][0];

		const h = (360 * (color[0] + time) % 360) / 360;
		materials[i].color.setHSL(h, color[1], color[2]);

	}

	renderer.render(scene, camera);

}
var current = "default";
var allKeys = {
	default: document.querySelectorAll("#languages .languages .container .default")[0],
	general: document.querySelectorAll("#languages .languages .container .general")[0],
	tools: document.querySelectorAll("#languages .languages .container .tools")[0]
}
if (localStorage) {
	if (!localStorage.getItem("whatIdoPage")) current = "default";
	else {
		changeLangNoAnimation(localStorage.getItem("whatIdoPage"))
	}
}
function changeLangNoAnimation(to) {
	let original = current;
	current = to;
	localStorage.setItem("whatIdoPage", to)
	allKeys[original].classList.toggle("invisible");
	allKeys[to].classList.toggle("invisible");
}

function popImageOut(imageUrl, caption) {
	// Get the modal
	var modal = document.getElementById("myModal");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById("myImg");
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");

	modal.style.display = "block";
	modalImg.src = imageUrl;
	modalImg.style.width = "90vw"
	captionText.innerText = caption;


	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function () {
		modal.style.display = "none";
	}
}
document.addEventListener("keydown", function (key) {
	if (key.keyCode === 27) {
		var modal = document.getElementById("myModal");
		modal.style.display = "none";

	}
})
// start of window apps things

function maximize(element) {
	document.querySelectorAll(element)[0].classList.add("smooth-transition");
	document.querySelectorAll(element)[0].classList.toggle("maximized");
	setTimeout(next, 500)
	function next() {
		document.querySelectorAll(element)[0].classList.remove("smooth-transition");
	}
}
function minimize(element) {
	if (document.querySelectorAll(element)[0].classList.contains("minimized")) {
		// un-minimize apps
		bringToTop(element);
		hotApps[element] = true;
	} else {
		// minimize apps
		delete hotApps[element]
	}
	manageTaskBar();
	document.querySelectorAll(element)[0].classList.add("transform-transition");
	document.querySelectorAll(element)[0].classList.toggle("minimized");
	setTimeout(next, 500)
	function next() {
		document.querySelectorAll(element)[0].classList.remove("transform-transition");
		if (document.querySelectorAll(element)[0].classList.contains("invisible")) { hide(element); minimize(element) }
	}
}
function bringToTop(element) {
	for (let i = 0; i < allApps.length; i++) {
		document.querySelectorAll(allApps[i])[0].style.zIndex = 5;
		document.querySelectorAll(".minimized-" + allApps[i].slice(1))[0].classList.remove("app-hot")
	}
	document.querySelectorAll(element)[0].style.zIndex = 6;
	document.querySelectorAll(".minimized-" + element.slice(1))[0].classList.add("app-hot")
}

function listenForClicks() {
	var monitor = setInterval(function () {
		var elem = document.activeElement;
		if (elem && elem.tagName == 'IFRAME' && elem.id === "bing") {
			bringToTop("#bing-container")
			clearInterval(monitor);
		}
	}, 100);
}

listenForClicks();
var lastClick = 0;
var clickedInToc = false;

function manageTaskBar(){
	for (let p = 0; p<allApps.length; p++){
		// looping through all elements
		if (openApps[allApps[p]]){
			document.querySelectorAll(".minimized-" + allApps[p].slice(1))[0].classList.add("app-open");
		}else{
			document.querySelectorAll(".minimized-" + allApps[p].slice(1))[0].classList.remove("app-open");
		}

		if (hotApps[allApps[p]]){
			document.querySelectorAll(".minimized-" + allApps[p].slice(1))[0].classList.add("app-hot");
		}else{
			document.querySelectorAll(".minimized-" + allApps[p].slice(1))[0].classList.remove("app-hot");
		}
	}
}

document.addEventListener("scroll", function(event){
	updateTBposition();
})
document.addEventListener("click", function(event){
	updateTBposition();
})
$(window).resize(function(){
	updateTBposition()
})
function updateTBposition(){
	if (window.screen.width < 501) return;
	if (checkVisible(document.querySelectorAll("#projects .project .medium-font")[0]) === true){
		document.querySelectorAll(".toc")[0].style = "position: absolute; top: auto; transform: translate(0px, -275px);"
	}else{
		document.querySelectorAll(".toc")[0].style = "position: fixed";
	}
}

function checkVisible(elm) {
	var rect = elm.getBoundingClientRect();
	var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	return !(rect.top - viewHeight >= 0);
  }

  let progressClickListeners = document.querySelectorAll("#projects .container .project-status .fa-chevron-down");
  for (let i = 0; i < progressClickListeners.length; i++) {
	  progressClickListeners[i].addEventListener("click", function (event) {
		  let good = event.toElement || event.target;
		  good.parentElement.parentElement.children[3].classList.toggle("invisible");
	  })
  }

  window.onload = function () {
	console.log("%c Hey. if mobile mode in dev tools looks kinda weird, try closing dev tools and re-opening it. It's a weird thing with chrome dev tools (it's not my fault :) )", "background: #0c0032; color: white; font-size: x-large");
	let social_elements = document.getElementsByClassName("social")[0].children[0].children;
	for (let i = 0; i < social_elements.length; i++) {
		social_elements[i].addEventListener("mouseenter", function (res) {
			let good = res.toElement || res.target;
			good.classList.add("paused");
		})
		social_elements[i].addEventListener("mouseleave", function (res) {
			console.log(res)
			let good = res.fromElement || res.target;
			good.classList.remove("paused");
		})
	}
}
function changeLang(to) {
	let original = current;
	current = to;
	if (!localStorage) var localStorage = {setItem: function(){}}
	localStorage.setItem("whatIdoPage", to)
	allKeys[original].classList.toggle("fadeOut");
	setTimeout(function() {
		allKeys[original].classList.toggle("invisible");

		allKeys[to].classList.toggle("invisible");
		allKeys[to].classList.toggle("fadeIn");
		setTimeout(function() {
			allKeys[original].classList.toggle("fadeOut");
			allKeys[to].classList.toggle("fadeIn");
		}, 600);
	}, 600);
}