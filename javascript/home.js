


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
		renderer.setClearColor( 0x000000, 0 ); // the default
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

		mouseX = event.clientX - windowHalfX;
		mouseY = event.clientY - windowHalfY;

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
		console.log(key)
		if (key.keyCode === 27) {
			var modal = document.getElementById("myModal");
			modal.style.display = "none";

		}
	})