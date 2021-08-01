$(function(){

	/*
		Search Command for Correspondance in Json
	*/
	function findCorrespondance (commandString) {
		for ( var i = 0; i < correspondanceJson.videos.length; i++ ) {
			if ( correspondanceJson.videos[i].command === commandString ) {
				appendVideo(correspondanceJson.videos[i]);
			}
		}

		for ( var i = 0; i < correspondanceJson.sounds.length; i++ ) {
			if ( correspondanceJson.sounds[i].command === commandString ) {
				appendSound(correspondanceJson.sounds[i]);
			}
		}

	}

	/*
		Append Video Element
	*/
	function appendVideo(video) {
		if ( $('#'+video.command).length === 0 ) {
			$('#my-videos').append(`
				<video autoplay width="800" height="600" src="videos/` + video.file + `" id="` + video.command + `">
				</video>`);
			$('#' + video.command)[0].volume = video.volume;			
			removeVideo(video);
		}
	}

	/*
		Append Sound Element
	*/
	function appendSound(sound) {
		if ( $('#'+sound.command).length === 0 ) {
			$('#my-sounds').append(`
				<audio autoplay src="sounds/` + sound.file + `" class='hidden' id="` + sound.command + `">
				</audio>`);
			$('#' + sound.command)[0].volume = sound.volume;
			removeSound(sound);
		}
	}

	/*
		Hide Video Element after its duration, then after delay remove it for another use
	*/
	function removeVideo(video) {
		setTimeout(function(){
			let videoDuration = ($('#' + video.command)[0].duration*1000) - 500;
			
			setTimeout(function() {
				$($('#' + video.command)[0]).addClass('hidden');

				setTimeout(function(){
					$('#' + video.command)[0].remove();
				}, video.delay * 1000 - videoDuration );
			}, videoDuration);
		},500);
	}

	/*
		Remove Sound Element after delay to enable another use
	*/
	function removeSound(sound) {
		setTimeout(function(){
			let soundDuration = ($('#' + sound.command)[0].duration*1000) - 500;
			setTimeout(function(){
				$('#' + sound.command)[0].remove();
			}, sound.delay * 1000 - soundDuration );
		},500);
	}

	/*
		Build client connection
	*/
	const client = new tmi.Client({
		connection: {
			secure: true,
			reconnect: true
		},
		channels: [ streamer ]
	});

	// Connect
	client.connect();

	/*
		For each message do:
	*/
	client.on('message', (channel, tags, message, self) => {
		/* 
			Find out if this is a command (starting with !), if not do nothing
		*/
		if ( /^!.*/.test(message) ) {
			// This is a command, retrieve it and check for correspondance
			let command = message.substr(1).split(' ')[0];
			findCorrespondance(command);
		}		
	});
});