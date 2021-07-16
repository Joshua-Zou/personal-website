

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

async function changeLang(to) {
	let original = current;
	current = to;
	localStorage.setItem("whatIdoPage", to)
	allKeys[original].classList.toggle("fadeOut");
	await sleep(600)
	allKeys[original].classList.toggle("invisible");

	allKeys[to].classList.toggle("invisible");
	allKeys[to].classList.toggle("fadeIn");
	await sleep(600);
	allKeys[original].classList.toggle("fadeOut");
	allKeys[to].classList.toggle("fadeIn");
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
function hide(element) {
	document.querySelectorAll(element)[0].classList.toggle("invisible");
	if (document.querySelectorAll(element)[0].classList.contains("invisible")) {
		//closing apps	
		delete openApps[element];
		delete hotApps[element];
		manageTaskBar();
		if (element === "#terminal-container") {
			$("#terminal").terminal().destroy()
		}else if (element === "#bing-container"){
			document.querySelectorAll("#bing")[0].remove();
		}
		return;
	}
	// opening apps
	openApps[element] = true;
	hotApps[element] = true;
	manageTaskBar();
	if (element === "#terminal-container") {
		$('#terminal').terminal({
			add: function (a, b) {
				this.echo(a + b);
			},
			help: function () {
				this.echo("Nice! Here's some basic commands you can use to get to know me a bit better.\n	- education \n	- skills \n	- about");
			},
			education: async function () {
				this.echo("querying info...");
				for (let i = 1; i < 8; i++) {
					await sleep(Math.floor(Math.random() * 2000));
					this.update(-1, "querying info (" + i + "/7)");
				}
				this.update(-1, "querying info (completed)");
				this.echo(`information: \n	Current Grade: 8th \n	Current School: Northshore Middle School \n	Current Math: 12th grade \n	Current Science: HiCap \n	Current English: HiCap \n	Current History: HiCap`);
			},
			skills: async function () {
				let element = $('<span>Skills: <br> Machine-Learning (tensorflow), JS, TS, Web dev, Violin/Piano, serverless stuff, computer vision. <br> Find out more about my skills <a href="#languages" onclick="changeLang(\'default\')">here</a></span>')
				this.echo(element);
			},
			about: async function () {
				let element = $('<span>Me in general: <br> I actively participate in <a href="https://devpost.com/Joshua-Zou" target="_blank">hackathons</a> and have a passion for creating big web-apps that benifit society as a whole. <br> I play violin and piano as my main instruments, <br> and also am interested in electrical engineering <br> Find out more about me <a href="#languages" onclick="changeLang(\'general\')">here</a></span>')
				this.echo(element);
			},
		}, {
			greetings: '(c) Joshua Zou. All rights reserved.\nWelcome to the terminal! To get started, type "help" for help',
			name: 'terminal',
			height: 200,
			width: 450,
			prompt: ' > '
		});
	}else if (element === "#bing-container"){
		let newElem = document.createElement("iframe");
		newElem.title="Bing";
		newElem.id="bing";
		newElem.src="https://www.bing.com";
		document.getElementById("bing-container").appendChild(newElem)
	}
}
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
window.addEventListener('mousedown', async function(e){   
	if (window.screen.width < 501 && !e.target.classList.contains("pointer") && e.target.tagName !== "a" && e.target.onclick === null && e.target.tagName !== "g" && e.target.tagName !== "path" && e.target.tagName !== "rect" && !e.target.classList.contains("right-navbar")){
		if (performance.now() - 1000 > lastClick){
			document.querySelectorAll(".toc")[0].style.transform = "none";
			lastClick = performance.now();
			if (clickedInToc === false){
				await sleep(2000);
				if (clickedInToc === false){
					document.querySelectorAll(".toc")[0].style = "";
				}
			}
		}
		lastClick = performance.now();
	}
	if (document.querySelectorAll(".toc")[0].contains(e.target)) clickedInToc = true;
	else clickedInToc = false;
	if (document.querySelectorAll("#bing-container iframe")[0] && document.querySelectorAll("#bing-container iframe")[0].contains(e.target)){
	} else{
	listenForClicks();
	}
  });
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
	if (window.screen.width < 501) return;
	if (checkVisible(document.querySelectorAll("#projects .project .medium-font")[0]) === true){
		document.querySelectorAll(".toc")[0].style = "position: absolute; top: auto; transform: translate(0px, -250px);"
	}else{
		document.querySelectorAll(".toc")[0].style = "position: fixed";
	}
})
function checkVisible(elm) {
	var rect = elm.getBoundingClientRect();
	var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }