function setLanguage(lang) {
	if (lang === "en") {
		contentJson = enContentJson;
	} else if (lang === "fr") {
		contentJson = frContentJson;
	}

	changeText(contentJson);
}

function changeText(json) {

	var elements= $('.content-text');

	elements.each(function(i,e){
		$(e).html(json[$(e).attr('lang-target')]);
	});
}

$(function(){
	setLanguage('en');
});