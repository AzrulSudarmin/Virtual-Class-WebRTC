_('html-editor').contentDocument.designMode  = "on";
_('css-editor').contentDocument.designMode  = "on";
_('javascript-editor').contentDocument.designMode = "on";

_('web-result').onclick = function () {
	var htmlContent = _('html-editor').contentWindow.document.body.innerHTML ,
		cssContent = _('css-editor').contentWindow.document.body.innerHTML ,
		jsContent = _('javascript-editor').contentWindow.document.body.innerHTML ,
		scriptTag = "<script type=\"text/javascript\"> "+$("<div/>").html(jsContent).text()+" <\/script>" , 
		all;

	all =  "<style>" + $("<div/>").html(cssContent).text() + "<\/style>" + $("<div/>").html(htmlContent).text();

	_('web-programming-result').contentWindow.location.reload();

	_("web-programming-result").onload = function (e){
		var doc = _('web-programming-result').contentWindow.document;
		doc.open();
		doc.write('<html><head><title></title>'+scriptTag+'</head><body>'+all+'</body></html>');
		doc.close();
	}
};