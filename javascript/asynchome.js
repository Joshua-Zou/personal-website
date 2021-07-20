


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
			skills: function () {
				let element = $('<span>Skills: <br> Machine-Learning (tensorflow), JS, TS, Web dev, Violin/Piano, serverless stuff, computer vision. <br> Find out more about my skills <a href="#languages" onclick="changeLang(\'default\')">here</a></span>')
				this.echo(element);
			},
			about: function () {
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