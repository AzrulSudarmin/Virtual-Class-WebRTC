var context = document.getElementById('whiteboard').getContext("2d") ,
	clickX = new Array() ,
	clickY = new Array() ,
	clickDrag = new Array() ,
	clickSize = new Array() ,
	clickColor = new Array() ,
	paint ,
	curSize = $('input:radio[name=lineSize]:checked').val()
	curColor = "#000";


function sendCanvas(x, y, dragging, size, color){
  	var data = JSON.stringify({"clickX": x, "clickY": y, "clickDrag": dragging, "clickSize": size, "curColor": color,"type": 'whiteboard'});
  	
  	for (var i = 0; i < Object.keys(users).length; i++) {
    	users[i].dataChannel.send(data);
	};
}

function addClick(x, y, dragging){
	sendCanvas(x,y,dragging,curSize, curColor);
	clickX.push(x);
	clickY.push(y);
	clickSize.push(curSize);
	clickDrag.push(dragging);
	clickColor.push(curColor);
}

function redraw(){
	context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
  
	context.strokeStyle = "#df4b26";
	context.lineJoin = "round";
			
	for(var i=0; i < clickX.length; i++) {	
		switch (clickSize[i]) {
			case '1':
				radius = 2;
				break;
			case '2':
				radius = 5;
				break;
			case '3':
				radius = 10;
				break;
			case '4':
				radius = 20;
				break;
			default:
				radius = 2;
				break;
		}
		
		context.beginPath();

		if(clickDrag[i] && i){
			context.moveTo(clickX[i-1], clickY[i-1]);
		} else {
			context.moveTo(clickX[i]-1, clickY[i]);
		}

		context.lineTo(clickX[i], clickY[i]);
		context.closePath();
		context.strokeStyle = clickColor[i];
		context.lineWidth = radius;
		context.stroke();
	}
}

//click
$('#whiteboard').mousedown(function(e){
	var rect = this.getBoundingClientRect();
	var mouseX = e.clientX - rect.left;
	var mouseY = e.clientY - rect.top;
		
	paint = true;
	addClick(mouseX, mouseY);
	redraw();
});


$('#whiteboard').mousemove(function(e){
	if(paint){
		var rect = this.getBoundingClientRect();
		var mouseX = e.clientX - rect.left;
		var mouseY = e.clientY - rect.top;

		addClick(mouseX, mouseY, true);
		redraw();
	}
});

$('#whiteboard').mouseup(function(e){
	paint = false;
});

$('#whiteboard').mouseleave(function(e){
	paint = false;
});

//touch
_('whiteboard').addEventListener("touchstart", function(e){
	var rect = this.getBoundingClientRect();
	var mouseX = e.clientX - rect.left;
	var mouseY = e.clientY - rect.top;
		
	paint = true;
	addClick(mouseX, mouseY);
	redraw();
}, false);

_('whiteboard').addEventListener("touchmove", function(e){
	if(paint){
		var rect = this.getBoundingClientRect();
		var mouseX = e.clientX - rect.left;
		var mouseY = e.clientY - rect.top;

		addClick(mouseX, mouseY, true);
		redraw();
	}
}, false);

_('whiteboard').addEventListener("touchend", function(e){
	paint = false;
}, false);

_('whiteboard').addEventListener("touchleave", function(e){
	paint = false;
}, false);
  
//tools whiteboard
$('#lineSize').click(function(e){
	if (_('lineSizeUl').style.display == 'inline') {
		_('lineSizeUl').style.display = 'none';
	} else {
		_('lineSizeUl').style.display = 'inline';
	}
	e.stopPropagation();
});

$('input:radio[name=lineSize]').click(function(){
  curSize = $('input:radio[name=lineSize]:checked').val();
  _('lineSizeUl').style.display = 'none';
});

$('input:radio[name=toolType]').click(function(){
  curColor = $('input:radio[name=toolType]:checked').val();
  console.log("tes");
});