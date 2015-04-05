
	var sendDelay ,
		myVar;
	_('text-editor').contentDocument.designMode  = "on";

	function printDoc(documentPrint){
  		var oPrntWin = window.open("","_blank","width=544,height=784,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
  		oPrntWin.document.open();
  		oPrntWin.document.write("<!doctype html><html><head><title><\/title><\/head><body onload=\"print();\">" + _(documentPrint).contentWindow.document.body.innerHTML + "<\/body><\/html>");
  		oPrntWin.document.close();
	}

	// tools text-editor
	_('print').onclick = function(){
		printDoc('text-editor');
	};

	_('undo').onclick = function(){
		_('text-editor').contentDocument.execCommand('undo',false,'');
		sendDataTexteditor();
	};

	_('redo').onclick = function(){
		_('text-editor').contentDocument.execCommand('redo',false,'');
		sendDataTexteditor();
	};

	_('remove-format').onclick = function(){
		_('text-editor').contentDocument.execCommand('removeFormat',false,'');
		sendDataTexteditor();
	};

	_('fonts').onchange = function(){
		var fonts = _('fonts').value;

		_('text-editor').contentDocument.execCommand('FontName',false,fonts);
		sendDataTexteditor();
	};

	_('fontsize').onchange = function(){
		var size = _('fontsize').value;

		_('text-editor').contentDocument.execCommand('fontSize',false,size);
		sendDataTexteditor();
	};

	_('bold').onclick = function(){
		_('text-editor').contentDocument.execCommand('bold',false,'');
		sendDataTexteditor();
	};

	_('italic').onclick = function(){
		_('text-editor').contentDocument.execCommand('italic',false,'');
		sendDataTexteditor();
	};

	_('underline').onclick = function(){
		_('text-editor').contentDocument.execCommand('underline',false,'');
		sendDataTexteditor();
	};

	_('strikeThrough').onclick = function(){
		_('text-editor').contentDocument.execCommand('strikeThrough',false,'');
		sendDataTexteditor();
	};

	_('fore-color-header').onclick = function (){
		if (_('fore-color-select').style.visibility == "visible") {
			_('fore-color-select').style.visibility = "hidden";
		} else {
			_('fore-color-select').style.visibility = "visible";
		};
	};

	$('input:radio[name=script]').click(function(){
  		_('text-editor').contentDocument.execCommand($('input:radio[name=script]:checked').val(),false,'');
  		sendDataTexteditor();
	});

	$('input:radio[name=foreColor]').click(function(){
  		_("foreColorSelected").style.borderColor=$('input:radio[name=foreColor]:checked').val();
  		_('text-editor').contentDocument.execCommand("foreColor",false,$('input:radio[name=foreColor]:checked').val());
  		_('fore-color-select').style.visibility = "hidden";
  		sendDataTexteditor();
	});

	$('#morecolor').change(function(){
  		_('text-editor').contentDocument.execCommand("foreColor",false,$('#morecolor').val());
  		_("foreColorSelected").style.borderColor= $('#morecolor').val();
  		_('fore-color-select').style.visibility = "hidden";
  		sendDataTexteditor();
	});

	$('input:radio[name=margin]').click(function(){
  		_('text-editor').contentDocument.execCommand($('input:radio[name=margin]:checked').val(),false,'');
  		sendDataTexteditor();
		});

	$('input:radio[name=list]').click(function(){
  		_('text-editor').contentDocument.execCommand($('input:radio[name=list]:checked',false,'').val());
  		sendDataTexteditor();
	});

	$("#indent").click(function(){      
  		_('text-editor').contentDocument.execCommand("indent",false,'');
  		sendDataTexteditor();
	});

	$("#outdent").click(function(){     
  		_('text-editor').contentDocument.execCommand("outdent",false,'');
  		sendDataTexteditor();
	});

	//text editor
	_('text-editor').contentWindow.addEventListener('keyup',function(){
		clearTimeout(myVar);
		myVar = setTimeout(function(){
			sendDataTexteditor();
		}, 1000);
	});

	function sendDataTexteditor(){
		var content = _('text-editor').contentWindow.document.body.innerHTML;

		var data = JSON.stringify({"val":content, "type": 'TextEditor'});

		for (var i = 0; i < Object.keys(users).length; i++) {
            users[i].dataChannel.send(data);
        };
	}