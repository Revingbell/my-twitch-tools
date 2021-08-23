function setLanguage(lang) {
	if (lang === "en") {
		contentJson = enContentJson;
		$('#language').val('en');
	} else if (lang === "fr") {
		contentJson = frContentJson;
		$('#language').val('fr');
	}

	changeText(contentJson);
}

function changeText(json) {

	var elements= $('[lang-target]');

	elements.each(function(i,e){
		$(e).html(json[$(e).attr('lang-target')]);
	});
}

$(function(){
	setLanguage('en');
});