<!DOCTYPE html>
<html lang="en">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">


	<meta property="og:title" content="Joshua Zou">
	<meta property="og:locale" content="en_US">
	<meta name="description"
		content="Joshua Zou is a 13yr old dev (I feel so old) who's interested in crypto, offensive security, tensorflow, and other random things.">
	<meta property="og:description"
		content="Joshua Zou is a 13yr old dev (I feel so old) who's interested in crypto, offensive security, tensorflow, and other random things.">
	<meta property="og:site_name" content="Joshua Zou">

	<title>Joshua Zou</title>

	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Voltaire" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
	<script src="./main.js"></script>
	<link rel="stylesheet" href="./index.css">
	<link rel="stylesheet" href="./fonts/syntax.css">
	<script src="./javascript/rainbow.min.js"></script>

</head>

<body>
	<header>
		<div class="big-screen">
			<div class="logo" onclick="window.location.href='./index.html'">
				<button href="./index.html" class="logo-text"><span style="color: var(--medium-color);"
						class="normal-font large-font code-font">
						< </span><span class="flash" contenteditable="true">Joshua Zou</span><span
								style="color: var(--medium-color)"
								class="normal-font large-font code-font">/></span></button>
			</div>
			<div class="nav-items">
				<a href="./projects.html">Projects</a>
			</div>
		</div>
		<div class="mobile">
			<div class="top-bar">

			</div>
			<div class="pancake-thingy">
				<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" onclick="toggleMobileNavbar();">
					<g>
						<rect fill="rgba(0, 0, 0, 0)" id="canvas_background" height="34" width="34" y="-1" x="-1" />
					</g>
					<g>
						<path fill="var(--medium-color)" id="svg_1"
							d="m4,10l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2zm24,4l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2zm0,8l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2z" />
					</g>
				</svg>
				<div class="logo">
					<a href="./index.html" title="If my handwriting actually looked good"><span
							style="color: var(--medium-color)" class="normal-font large-font code-font">
							< </span><span class="flash">Joshua Zou</span><span style="color: var(--medium-color)"
									class="normal-font large-font code-font">/></span></a>
				</div>
			</div>
			<div class="right-navbar">
				<a href="./projects.html" class="light-font-color medium-font">• Projects</a>
			</div>
		</div>
	</header>
	<section id="introduction" style="display: block;">
		<div class="intro side-by-side">
			<div class="container">
				<span class="extra-large-font">Hi, I'm Joshua Zou, <div class="break big-break"></div></span>
				<span class="medium-font">&nbsp; &nbsp; a <div class="tooltip">13
						<pre class="tooltiptext" data-language="javascript">
	const birthday = 1203026556000; 
	let current = Date.now(); 
	let year = 31556952000; 
	console.log((current-birthday)/year)
	</pre>
					</div> yr old full stack dev from Washington <div class="flashing-cursor"></div></span>
				<div class="break big-break"></div>
				<img src="./images/waving-hand.png" class="waving-hand">
			</div>
		</div>
		<div class="social side-by-side">
			<div class="container">
asdfabw ef
			</div>
		</div>
	</section>
</body>

</html>
<script>

</script>
<style>
	body {
		max-width: 100vw;
	}

.social .container {
	background-color: var(--block-background-color);
	position: relative;
	z-index: -1;
}

	.intro {
		background-color: var(--pop-color);
		position: relative;
		height: fit-content !important;
		padding-bottom: 20px;
	}




	.intro:before,
	.intro:after {
		content: "";
		position: absolute;
		height: 100%;
		width: 20px;
		top: 0px;

		background-image: url("./images/plus.png"), url("./images/plus.png");
		background-size: 50px 40px;
		opacity: 100%;
		background-position: top center, bottom center;
		background-repeat: no-repeat;
	}

	.intro:before {
		top: -10%;
		left: -30px;
		padding-bottom: 50px;
	}
	.intro:after {
		top: -10%;
		right: -30px;
		padding-bottom: 50px;
		right: -30px;
	}


	/*
.intro:before, .intro:after, .intro *:first-child:before, .intro *:first-child:after {
		content: "";
		position: absolute;
		height: 100%;
		width: 20px;
		
		background-image: url("./images/plus.png"), url("./images/plus.png");
		background-size: 20px 20px;
		background-position: top center, bottom center;
		background-repeat: no-repeat;
}
.intro:after {
    right: 0;
    top: 0;
}
.intro *:first-child:before {
    left: 0;
    bottom: 0;
}
.intro *:first-child:after {
    bottom: 0;
    right: 0;
}

*/


	.intro .container {
		position: relative;
		top: 20px;
		left: 20px;
		padding-right: 50px;
	}

	@keyframes fade-in {
		0% {
			opacity: 0
		}

		100% {
			opacity: 1
		}
	}

	@keyframes fade {
		10% {
			transform: scale(1, 1)
		}

		35% {
			transform: scale(1, 1.7)
		}

		40% {
			transform: scale(1, 1.7)
		}

		50% {
			opacity: 1
		}

		60% {
			transform: scale(1, 1)
		}

		100% {
			transform: scale(1, 1);
			opacity: 0
		}
	}

	[data-language] code,
	[class^="lang"] code,
	pre [data-language],
	pre [class^="lang"] {
		opacity: 0;
		-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
		animation: fade-in 50ms ease-in-out 2s forwards
	}

	[data-language] code.rainbow,
	[class^="lang"] code.rainbow,
	pre [data-language].rainbow,
	pre [class^="lang"].rainbow {
		animation: none;
		transition: opacity 50ms ease-in-out
	}

	[data-language] code.loading,
	[class^="lang"] code.loading,
	pre [data-language].loading,
	pre [class^="lang"].loading {
		animation: none
	}

	[data-language] code.rainbow-show,
	[class^="lang"] code.rainbow-show,
	pre [data-language].rainbow-show,
	pre [class^="lang"].rainbow-show {
		opacity: 1
	}

	pre {
		position: relative
	}

	pre.loading .preloader div {
		animation-play-state: running
	}

	pre.loading .preloader div:nth-of-type(1) {
		background: #0081f5;
		animation: fade 1.5s 300ms linear infinite
	}

	pre.loading .preloader div:nth-of-type(2) {
		background: #5000f5;
		animation: fade 1.5s 438ms linear infinite
	}

	pre.loading .preloader div:nth-of-type(3) {
		background: #9000f5;
		animation: fade 1.5s 577ms linear infinite
	}

	pre.loading .preloader div:nth-of-type(4) {
		background: #f50419;
		animation: fade 1.5s 715ms linear infinite
	}

	pre.loading .preloader div:nth-of-type(5) {
		background: #f57900;
		animation: fade 1.5s 853ms linear infinite
	}

	pre.loading .preloader div:nth-of-type(6) {
		background: #f5e600;
		animation: fade 1.5s 992ms linear infinite
	}

	pre.loading .preloader div:nth-of-type(7) {
		background: #00f50c;
		animation: fade 1.5s 1130ms linear infinite
	}

	pre .preloader {
		position: absolute;
		top: 12px;
		left: 10px
	}

	pre .preloader div {
		width: 12px;
		height: 12px;
		border-radius: 4px;
		display: inline-block;
		margin-right: 4px;
		opacity: 0;
		animation-play-state: paused;
		animation-fill-mode: forwards
	}

	pre {
		background-color: #000;
		word-wrap: break-word;
		margin: 0px;
		padding: 10px;
		color: #fff;
		font-size: 14px;
		margin-bottom: 20px
	}

	pre,
	code {
		font-family: 'Monaco', 'Menlo', courier, monospace
	}

	pre {
		background: #22282A;
		color: #F1F2F3
	}

	pre .comment {
		color: #66747B
	}

	pre .constant {
		color: #EC7600
	}

	pre .storage {
		color: #EC7600
	}

	pre .string,
	pre .comment.docstring {
		color: #EC7600
	}

	pre .string.regexp,
	pre .support.tag.script,
	pre .support.tag.style {
		color: #fff
	}

	pre .keyword,
	pre .selector {
		color: #93C763
	}

	pre .inherited-class {
		font-style: italic
	}

	pre .entity {
		color: #93C763
	}

	pre .integer {
		color: #FFCD22
	}

	pre .variable.global,
	pre .variable.class,
	pre .variable.instance {
		color: #CCC
	}

	pre .preprocessor {
		color: #66747B
	}

	pre .support,
	*[data-language="csharp"] .function.call {
		color: #FACD22
	}






	.big-break {
		margin-top: 20px;
	}

	#introduction {
		color: whitesmoke;
	}

	@media (max-width: 500px) {
		#introduction {
			padding: 10px;
			margin-top: 100px;
		}

		.extra-large-font {
			font-size: xx-large;
		}

		.social {
			margin-top: 30px;
			padding-right: 50px;
		}

		.intro {
			height: 180px;
		}
	}

	@media (min-width: 500px) {
		#introduction {
			padding: 50px;
		}

		.extra-large-font {
			font-size: 50px;
		}

		.intro {
			height: 250px;
		}
	}

	.flashing-cursor {
		border-bottom: solid 3px rgba(177, 224, 243, 1);
		margin-top: 10px;
		padding-top: 10px;
		position: relative;
		display: inline-block;
		bottom: 5px;
		top: 10px;
		width: 20px;
		animation: animated-cursor 600ms steps(30, end) infinite;
	}

	@keyframes animated-cursor {
		from {
			border-bottom-color: rgba(177, 224, 243, 1);
		}

		to {
			border-bottom-color: transparent;
		}
	}

	.waving-hand {
		width: calc(5vw + 10px);
		height: calc(5vw + 10px);
		min-height: 30px;
		min-width: 30px;
		margin-left: 100px;
		animation: turning 1s infinite;
		transition: ease-in-out;
		transform-origin: bottom right;
	}

	@keyframes turning {
		0% {
			transform: rotate(0.0deg)
		}

		20% {
			transform: rotate(8.0deg)
		}

		40% {
			transform: rotate(-4.0deg)
		}

		60% {
			transform: rotate(10.0deg)
		}

		100% {
			transform: rotate(0.0deg)
		}
	}

	.tooltip {
		position: relative;
		display: inline-block;
	}

	.tooltip .tooltiptext {
		visibility: hidden;
		width: fit-content;
		background-color: #555;
		color: #fff;
		text-align: left;
		border-radius: 6px;
		padding: 5px 5px;
		position: absolute !important;
		z-index: 1;
		bottom: 125%;
		left: 50%;
		margin-left: -60px;
		opacity: 0;
		transition: opacity 0.3s;
		font-size: medium;
	}

	.tooltip .tooltiptext::after {
		content: "";
		position: absolute;
		top: 100%;
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: #555 transparent transparent transparent;
	}

	.tooltip:hover .tooltiptext {
		visibility: visible;
		opacity: 1;
	}
</style>