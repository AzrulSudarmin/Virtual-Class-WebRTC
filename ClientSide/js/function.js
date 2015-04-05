function _(id){
	return document.getElementById(id);
};

function getEBN(id, index){
	if (index != 'undefined') {
		return document.getElementsByName(id)[index];
	} else {
		return document.getElementsByName(id);
	}
}

function getRC(id){
	var elements = document.getElementsByName(id);

	for (var i=0; i < elements.length; i++) {
		if (elements[i].checked) {
        	return getEBN(id, i);
      	}
   	}
}