


window.addEventListener('mousedown', async function (e) {
	if (window.screen.width < 501 && !e.target.classList.contains("pointer") && e.target.tagName !== "a" && e.target.onclick === null && e.target.tagName !== "g" && e.target.tagName !== "path" && e.target.tagName !== "rect" && !e.target.classList.contains("right-navbar")) {
		if (performance.now() - 1000 > lastClick) {
			document.querySelectorAll(".toc")[0].style.transform = "none";
			lastClick = performance.now();
			if (clickedInToc === false) {
				await sleep(2000);
				if (clickedInToc === false) {
					document.querySelectorAll(".toc")[0].style = "";
				}
			}
		}
		lastClick = performance.now();
	}
	if (document.querySelectorAll(".toc")[0].contains(e.target)) clickedInToc = true;
	else clickedInToc = false;
	if (document.querySelectorAll("#bing-container iframe")[0] && document.querySelectorAll("#bing-container iframe")[0].contains(e.target)) {
	} else {
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
			window.termNodeActive = false;
			$("#terminal").terminal().destroy()
		} else if (element === "#bing-container") {
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
			help: function () {
				if (window.termNodeActive === true) {
					this.echo("Uncaught ReferenceError: help is not defined");
					return;
				}
				this.echo("Nice! Here's some basic commands you can use to get to know me a bit better.\n	- education \n	- skills \n	- about");
				this.echo("If you would like to run some JS commands, type 'node'")
			},
			education: async function () {
				if (window.termNodeActive === true) {
					this.echo("Uncaught ReferenceError: education is not defined");
					return;
				}
				this.echo("querying info...");
				for (let i = 1; i < 8; i++) {
					await sleep(Math.floor(Math.random() * 2000));
					this.update(-1, "querying info (" + i + "/7)");
				}
				this.update(-1, "querying info (completed)");
				this.echo(`information: \n	Current Grade: 8th \n	Current School: Northshore Middle School \n	Current Math: 12th grade \n	Current Science: HiCap \n	Current English: HiCap \n	Current History: HiCap`);
			},
			skills: function () {
				if (window.termNodeActive === true) {
					this.echo("Uncaught ReferenceError: skills is not defined");
					return;
				}
				let element = $('<span>Skills: <br> Machine-Learning (tensorflow), JS, TS, Web dev, Violin/Piano, serverless stuff, computer vision. <br> Find out more about my skills <a href="#languages" onclick="changeLang(\'default\')">here</a></span>')
				this.echo(element);
			},
			about: function () {
				if (window.termNodeActive === true) {
					this.echo("Uncaught ReferenceError: about is not defined");
					return;
				} let element = $('<span>Me in general: <br> I actively participate in <a href="https://devpost.com/Joshua-Zou" target="_blank">hackathons</a> and have a passion for creating big web-apps that benifit society as a whole. <br> I play violin and piano as my main instruments, <br> and also am interested in electrical engineering <br> Find out more about me <a href="#languages" onclick="changeLang(\'general\')">here</a></span>')
				this.echo(element);
			},
			node: function () {
				if (window.termNodeActive === true) {
					this.echo("Uncaught ReferenceError: node is not defined");
					return;
				}
				window.termNodeActive = true;
				this.echo("Welcome to Node.js v14.16.1! \nType \".help\" for more information.\n");
				this.set_prompt("> ");
			}
		}, {
			greetings: '(c) Joshua Zou. All rights reserved.\nWelcome to the terminal! To get started, type "help" for help',
			name: 'terminal',
			height: 200,
			width: 450,
			prompt: ' C:\\Users\\Joshua> '
		});
	} else if (element === "#bing-container") {
		let newElem = document.createElement("iframe");
		newElem.title = "Bing";
		newElem.id = "bing";
		newElem.src = "https://www.bing.com";
		document.getElementById("bing-container").appendChild(newElem)
	}
}
if (localStorage.getItem("cachedNpmStats") === null || JSON.parse(localStorage.getItem("cachedNpmStats")).queryTime + 86400000 < Date.now()) getNpmStats();
else showCachedNpmStats();
//getNpmStats();
async function getNpmStats() {
	if (document.getElementById("npmDownloadsDetails")) document.getElementById("npmDownloadsDetails").parentNode.removeChild(document.getElementById("npmDownloadsDetails"))
	document.querySelector("#totalNpmDownloads").innerText = "Querying...";
	var total = 0;
	let element = document.createElement("div");
	element.id = "npmDownloadsDetails";
	element.classList.add("invisible")
	element.innerHTML = '<div class="loadingGif"><img src="./images/loading.gif"></div>'
	document.querySelector("#npmDownloads").appendChild(element);
	let result = await fetch("https://server2.joshuaz.dev/api/download-count");
	result = await result.json();
	let setItem = {
		queryTime: Date.now(),
		data: JSON.stringify(result)
	};
	setItem = JSON.stringify(setItem);

	localStorage.setItem("cachedNpmStats", setItem)
	document.querySelectorAll("#npmDownloads .loadingGif")[0].style.display = "none"
	Object.entries(result).forEach(
		([key, value]) => {
			let div = document.createElement("div");
			div.classList.add("npmPackage")
			let a = document.createElement("a");
			a.href = "https://www.npmjs.com/package/" + key;
			a.innerText = key;
			a.style.marginLeft = "10px"
			a.classList.add("link");
			a.target = "_blank";
			div.appendChild(a);
			let span = document.createElement("span");
			span.classList.add("downloadCount");

			let downloadCount = 0;

			Object.entries(value).forEach(([key, value]) => {
				downloadCount += value;
			})
			total += downloadCount;
			span.innerText = downloadCount;
			div.appendChild(span)
			element.appendChild(div)
		}
	);
	document.querySelector("#totalNpmDownloads").innerText = total;
}
function showCachedNpmStats() {
	var total = 0;
	let element = document.createElement("div");
	element.id = "npmDownloadsDetails";
	element.classList.add("invisible")
	element.innerHTML = '<div class="loadingGif"><img src="./images/loading.gif"></div>'
	document.querySelector("#npmDownloads").appendChild(element);
	let result = JSON.parse(JSON.parse(localStorage.getItem("cachedNpmStats")).data);
	document.querySelectorAll("#npmDownloads .loadingGif")[0].style.display = "none"
	Object.entries(result).forEach(
		([key, value]) => {
			let div = document.createElement("div");
			div.classList.add("npmPackage")
			let a = document.createElement("a");
			a.href = "https://www.npmjs.com/package/" + key;
			a.innerText = key;
			a.style.marginLeft = "10px"
			a.classList.add("link");
			a.target = "_blank";
			div.appendChild(a);
			let span = document.createElement("span");
			span.classList.add("downloadCount");

			let downloadCount = 0;

			Object.entries(value).forEach(([key, value]) => {
				downloadCount += value;
			})
			total += downloadCount;
			span.innerText = downloadCount;
			div.appendChild(span)
			element.appendChild(div)
		}
	);
	document.querySelector("#totalNpmDownloads").innerText = total;
}


document.addEventListener("keypress", async function (event) {
	console.log = function (text) {
		document.querySelector(".terminal-scroll-marker").children[0].innerText = text;
	}

	if (window.termNodeActive !== true) return;
	addTermLsnr();
	if (event.key === "Enter") {

	} else {
		let text = document.getElementsByClassName("cmd-cursor-line")[0].innerText;
		if (!text.startsWith("return")) text = "return "+text;
		var x;
		try {
			var F = new Function(text);
			x = F();
		} catch (err) {
			console.log(err)
		}
		document.querySelector(".terminal-scroll-marker").children[0].innerText = x;
	}
})
window.addTermLsnrVar = false;
var lastKeyPressed = "";
function addTermLsnr() {
	if (window.addTermLsnrVar === true) return;
	window.addTermLsnrVar = true;
	$("#terminal").terminal().keydown(async function (event) {
		if (lastKeyPressed === "Control" && event.originalEvent.key === "c"){
			console.warn("control c pressed!")
			window.addTermLsnrVar = false;
			window.termNodeActive = false;
			document.querySelector(".terminal-scroll-marker").children[0].innerText = "";
			$("#terminal").terminal().set_prompt(" C:\\Users\\Joshua> ");
		}
		lastKeyPressed = event.originalEvent.key;
		//console.warn(event.originalEvent.key)
		if (event.originalEvent.key === "Enter") {
			if (window.termNodeActive !== true) return;
			let text = document.getElementsByClassName("cmd-cursor-line")[0].innerText;
			if (!text.startsWith("return")) text = "return "+text;
			await sleep(1)
			var x;
			try {
				var F = new Function(text);
				x = F();
			} catch (err) {
				document.querySelector(".terminal-scroll-marker").children[0].innerText = "";
				$("#terminal").terminal().update(-1, err)
			}
			document.querySelector(".terminal-scroll-marker").children[0].innerText = "";
			let lastIndex = $("#terminal").terminal().last_index();
			//console.log(`[data-index='${lastIndex+2}']`)
			document.querySelectorAll(`[data-index='${lastIndex}']`)[0].children[0].children[0].classList = "";
			document.querySelectorAll(`[data-index='${lastIndex}']`)[0].children[0].children[0].dataset.text = x;
			document.querySelectorAll(`[data-index='${lastIndex}']`)[0].children[0].children[0].children[0].style.color = "#aaa";
			document.querySelectorAll(`[data-index='${lastIndex}']`)[0].children[0].children[0].children[0].innerText = JSON.stringify(x);

			$(`[data-index='${lastIndex}']`).html(library.json.prettyPrint(JSON.parse(JSON.stringify(x))));

			document.querySelectorAll(`[data-index='${lastIndex}']`)[0].dataset.index = -100
		}
	})
}


if (!library)
   var library = {};

library.json = {
   replacer: function(match, pIndent, pKey, pVal, pEnd) {
      var key = '<span class=json-key>';
      var val = '<span class=json-value>';
      var str = '<span class=json-string>';
      var r = pIndent || '';
      if (pKey)
         r = r + key + pKey.replace(/[": ]/g, '') + '</span>: ';
      if (pVal)
         r = r + (pVal[0] == '"' ? str : val) + pVal + '</span>';
      return r + (pEnd || '');
      },
   prettyPrint: function(obj) {
      var jsonLine = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg;
      return JSON.stringify(obj, null, 3)
         .replace(/&/g, '&amp;').replace(/\\"/g, '&quot;')
         .replace(/</g, '&lt;').replace(/>/g, '&gt;')
         .replace(jsonLine, library.json.replacer);
      }
   };
