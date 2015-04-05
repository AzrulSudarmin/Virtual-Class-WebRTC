<html>
	<head>
		<title>Virtual Class Hasanuddin University</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
    	<link rel="stylesheet" type="text/css" href="css/style.css">
    	<link rel="stylesheet" type="text/css" href="css/text-editor.css">
    	<link rel="stylesheet" type="text/css" href="css/whiteboard.css">
    	<link rel="stylesheet" type="text/css" href="css/web-editor.css">
    	<script src="js/jquery-2.1.3.min.js"></script>
    	<script src='js/function.js'></script>
	</head>
	<body>
		<div id="side-menu">
			
			<div class="title-side">
				Virtual Class
			</div>

			<div class="form-room">
				<form onsubmit="joinRoom(); return false;" method="POST">
					<input type="text" name="room" placeholder='Enter Room Name Here..'>
					<input type="submit" value="Call" class="join" id="call">
				</form>

				<input type="submit" value="Hangup" class="join" id="hangUp" onclick="hangUp(); return false;" style="display:none">
			</div>
			
			<div id="all-video">
				<div class="video-cont">
					<video id='local-video' autoplay></video>
					<label for="local-video">Local Video</label>
				</div>
			</div>

		</div>
		<div id="center-part">

			<div class="tab"> 
				<input type="radio" id="button-text-editor" class="hidden" name="radio-editor" checked="true">
				<label for="button-text-editor">Text Editor</label>
				<div class="editor">
					<div class="tools">
						<?php include "tools_text_editor.php"; ?>
					</div>
					<iframe class="text-editor" id="text-editor"></iframe>
				</div>
			</div>

			<div class="tab">
				<input type="radio" id="button-text-whiteboard" class="hidden" name="radio-editor">
				<label for="button-text-whiteboard">Whiteboard</label>
				<div class="editor">
					<div class="tools">
						<?php include "tools_whiteboard.php"; ?>
					</div>
					<canvas id='whiteboard' class="canvas-editor" width="1027" height="268"></canvas>
				</div>
			</div>

			<div class="tab">
				<input type="radio" id="button-web-programming" class="hidden" name="radio-editor">
				<label for="button-web-programming"> Web Programming </label>
				<div class="editor">
					<div class="tools">
						<ul>
							<li>
								<button id="web-result">See Result</button>
							</li>
						</ul>
					</div>
					<iframe id="html-editor" class="web-editor"></iframe>
					<iframe id="css-editor" class="web-editor"></iframe>
					<iframe id="javascript-editor" class="web-editor"></iframe>
					<iframe id="web-programming-result" class="web-editor" sandbox="allow-scripts allow-same-origin"  src="about:blank"></iframe>
				</div>
			</div>

		</div>
	</body>

	<script src='https://still-crag-2857.herokuapp.com/socket.io/socket.io.js'></script>
	<script src='js/page-module.js'></script>
	<script src='js/text-editor.js'></script>
	<script src='js/whiteboard.js'></script>
	<script src='js/web-editor.js'></script>
</html>