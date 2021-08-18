const AsyncFunction = Object.getPrototypeOf(async function () { }).constructor;

window.fs = {
	['C:']: {
		Users: {
			Joshua: {
				projects: {
					['CoinTunnel.txt']: "https://github.com/Joshua-Zou/coin-tunnel",
					['OpenSkin.txt']: "https://github.com/Joshua-Zou/Skin-Server",
					['ElonBot.txt']: "https://github.com/Joshua-Zou/elonbot",
					['Unity.txt']: "https://github.com/Joshua-Zou/DiscordNsfwImageDetector",
					['meme.txt']: "https://github.com/Joshua-Zou",
					['sendCrypto.txt']: "https://github.com/Joshua-Zou/send-crypto",
					['vanityBtc.txt']: "https://github.com/Joshua-Zou/vanity-btc/"
				},
				srcCode: {
					['elonBot.js']: "https://github.com/Joshua-Zou/ElonBot/blob/main/index.js"
				}
			}
		}
	}
}

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
		window.currentDir = "C:/Users/Joshua/"
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
			},
			cd: function (dir) {
				if (window.termNodeActive === true) {
					this.echo("Uncaught ReferenceError: about is not defined");
					return;
				}
				if (dir === "../") {
					let tempDir = window.currentDir;
					var count = (tempDir.match(/\//g) || []).length;
					for (let i = 0; i < count - 1; i++) {
						let index = tempDir.indexOf("/");
						tempDir = tempDir.slice(index + 1);
					};
					let newDir = window.currentDir.replaceAll(tempDir, "");

					if (newDir === "") {
						window.currentDir = "C:/";
						this.set_prompt(" " + window.currentDir + "> ")
					} else {
						window.currentDir = newDir;
						this.set_prompt(" " + newDir.slice(0, newDir.length - 1) + "> ");
					}
				} else {
					let arr = window.currentDir.split("/");
					arr.pop();
					var tempDir = window.fs;
					for (let i = 0; i < arr.length; i++) {
						let current = arr[i];
						tempDir = tempDir[current];
					}
					if (!tempDir[dir]) {
						this.echo("The system cannot find the path specified. \n")
					} else {
						if (dir.includes(".")) {
							this.echo("The directory name is invalid. (To open a file, use `nano {filename}`)\n ");
							return;
						}
						window.currentDir = window.currentDir + dir + "/";
						this.set_prompt(" " + window.currentDir.slice(0, window.currentDir.length - 1) + "> ");
					}
				}
			},
			dir: function () {
				if (window.termNodeActive === true) {
					this.echo("Uncaught ReferenceError: about is not defined");
					return;
				}
				let arr = window.currentDir.split("/");
				arr.pop();
				var tempDir = window.fs;
				for (let i = 0; i < arr.length; i++) {
					let current = arr[i];
					tempDir = tempDir[current];
				}
				let showArr = [];
				Object.entries(tempDir).forEach(([key, value]) => {
					showArr.push(key)
				})
				this.echo("Volume in drive C is OS\nVolume Serial Number is BL89-CP51\n\nDirectory of "+window.currentDir+"\n");
				for (let p = 0; p<showArr.length; p++){
					this.echo(showArr[p])
				}
				this.echo("\n")
			},
			ls: function () {
				if (window.termNodeActive === true) {
					this.echo("Uncaught ReferenceError: about is not defined");
					return;
				}
				let arr = window.currentDir.split("/");
				arr.pop();
				var tempDir = window.fs;
				for (let i = 0; i < arr.length; i++) {
					let current = arr[i];
					tempDir = tempDir[current];
				}
				let showArr = [];
				Object.entries(tempDir).forEach(([key, value]) => {
					showArr.push(key)
				})
				this.echo("Volume in drive C is OS\nVolume Serial Number is BL89-CP51\n\nDirectory of "+window.currentDir+"\n");
				for (let p = 0; p<showArr.length; p++){
					this.echo(showArr[p])
				}
				this.echo("\n")
			},
			nano: function (file){
				if (window.termNodeActive === true) {
					this.echo("Uncaught ReferenceError: about is not defined");
					return;
				}
				let arr = window.currentDir.split("/");
					arr.pop();
					var tempDir = window.fs;
					for (let i = 0; i < arr.length; i++) {
						let current = arr[i];
						tempDir = tempDir[current];
					}
					if (!tempDir[file]) {
						this.echo("The system cannot find the file specified. \n")
					} else {
						if (!file.includes(".")){
							this.echo("The system cannot find the file specified. \n");
							return;
						}
						this.echo(tempDir[file])
					}
			}
		}, {
			greetings: '(c) Joshua Zou. All rights reserved.\nWelcome to the terminal! To get started, type "help" for help',
			name: 'terminal',
			height: 200,
			width: 450,
			prompt: ' C:/Users/Joshua> '
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
	if (window.termNodeActive !== true) return;
	addTermLsnr();
	if (event.key === "Enter") {

	} else {
		let text = document.getElementsByClassName("cmd-wrapper")[0].innerText;
		text = text.slice(3);
		if (!text.startsWith("return") && !text.startsWith("for") && !text.startsWith("if") && !text.startsWith("while") && !text.startsWith("do") && !text.startsWith("function") && !text.startsWith("let") && !text.startsWith("var") && !text.startsWith("const")) text = "return " + text//.slice(2);
		await sleep(1)
		var x;
		try {
			var F = new AsyncFunction(text);
			x = F();
			document.querySelector(".terminal-scroll-marker").children[0].innerText = x;
		} catch (err) {
			document.querySelector(".terminal-scroll-marker").children[0].innerText = err.toString();
		}
	}
})
window.addTermLsnrVar = false;
var lastKeyPressed = "";
function addTermLsnr() {
	let newId = makeid(10);
	if (window.addTermLsnrVar === true) return;
	window.addTermLsnrVar = true;
	$("#terminal").terminal().keydown(async function (event) {
		if (lastKeyPressed === "Control" && event.originalEvent.key === "c") {
			window.addTermLsnrVar = false;
			window.termNodeActive = false;
			document.querySelector(".terminal-scroll-marker").children[0].innerText = "";
			$("#terminal").terminal().set_prompt(" C:\\Users\\Joshua> ");
			window.terminalRun = false;
		}
		lastKeyPressed = event.originalEvent.key; if (event.originalEvent.key === "Enter") {
			if (window.termNodeActive !== true) return;
			let text = document.getElementsByClassName("cmd-wrapper")[0].innerText;
			text = text.slice(3);
			if (!text.startsWith("return") && !text.startsWith("for") && !text.startsWith("if") && !text.startsWith("while") && !text.startsWith("do") && !text.startsWith("function") && !text.startsWith("let") && !text.startsWith("var") && !text.startsWith("const")) text = "return " + text//.slice(2);
			text = text.replaceAll("console.log", `log${newId}`);
			text = text.replaceAll("console.warn", `warn${newId}`);
			text = text.replaceAll("console.error", `error${newId}`);
			await sleep(1)

			let lastIndex = $("#terminal").terminal().last_index();
			//console.log(`[data-index='${lastIndex+2}']`)
			let elm = document.querySelectorAll(`[data-index='${lastIndex}']`)[0];
			document.querySelectorAll(`[data-index='${lastIndex}']`)[0].dataset.index = -100;
			elm.children[0].children[0].classList = "";
			elm.children[0].children[0].dataset.text = x;
			elm.children[0].children[0].children[0].style.color = "#aaa";
			elm.children[0].children[0].children[0].innerText = JSON.stringify(x);
			window.elm = elm;
			var x;
			try {
				//text = text.replace(/\s/g, '');
				text = text.replace(/\)\ \{/g, `){if (window.terminalRun === false) return error${newId}("process killed by user");`);
				text = text.replace(/\)\{/g, `){if (window.terminalRun === false) return error${newId}("process killed by user");`)
				console.log(text)
				var F = new AsyncFunction(`
				if (window.terminalRun === false) return console.warn("process killed by user");
				function log${newId}(text){
					console.log(text)
					let newElm = $.parseHTML(library.json.prettyPrint(JSON.parse(JSON.stringify(text))));
					newElm[0].style.display = "block"
					window.elm.appendChild(newElm[0])
				}
				function warn${newId}(text){
					console.warn(text)
					let newElm = $.parseHTML("<i class='fas fa-exclamation-triangle' style='background: rgb(255 255 0 / 30%)'> "+text+"</i>");
					newElm[0].style.display = "block"
					window.elm.appendChild(newElm[0])
				}
				function error${newId}(text){
					console.error(text)
					let newElm = $.parseHTML("<i class='fas fa-times-circle' style='background: #2A0003; color: #E17676 !important'> "+text+"</i>");
					newElm[0].style.display = "block"
					window.elm.appendChild(newElm[0])
				}
				`+ text);
				x = await F();
			} catch (err) {
				document.querySelector(".terminal-scroll-marker").children[0].innerText = "";
				$(elm).html(err)
			}
			document.querySelector(".terminal-scroll-marker").children[0].innerText = "";
			let newElm = $.parseHTML(library.json.prettyPrint(JSON.parse(JSON.stringify(x))));
			newElm[0].style.display = "block"
			elm.appendChild(newElm[0])
		}
	})
}


if (!library)
	var library = {};

library.json = {
	replacer: function (match, pIndent, pKey, pVal, pEnd) {
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
	prettyPrint: function (obj) {
		var jsonLine = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg;
		return JSON.stringify(obj, null, 3)
			.replace(/&/g, '&amp;').replace(/\\"/g, '&quot;')
			.replace(/</g, '&lt;').replace(/>/g, '&gt;')
			.replace(jsonLine, library.json.replacer);
	}
};

function makeid(length) {
	var result = [];
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result.push(characters.charAt(Math.floor(Math.random() *
			charactersLength)));
	}
	return result.join('');
}
String.prototype.replaceAll = function (find, replace) {
	find = escapeRegExp(find);
	replace = escapeRegExp(replace)
	var regex = new RegExp(find, 'g');
	return this.replace(regex, replace);

	function escapeRegExp(str) {
		return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
	}
}

