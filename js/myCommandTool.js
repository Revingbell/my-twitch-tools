var videoQ = new videoQueue(globalVideoDelay);
var soundQ = new soundQueue(globalSoundDelay);

function videoQueueRunner() {
	videoQ.resolve();
}

function soundQueueRunner() {
	soundQ.resolve();
}

setInterval(videoQueueRunner,1000);
setInterval(soundQueueRunner,100);

$(function(){

	/*
		Search Command for Correspondance in Json
	*/
	function findCorrespondance (channel, tags, commandString) {

		if ( tags.username === channelName && ( [pauseVideos,resumeVideos,pauseSounds,resumeSounds].includes(commandString) ) ) {
			if ( pauseVideos === commandString ) {
				videoQ.stop();
			}

			if ( resumeVideos === commandString ) {
				videoQ.resume();
			}

			if ( pauseSounds === commandString ) {
				soundQ.stop();
			}

			if ( resumeSounds === commandString ) {
				soundQ.resume();
			}
		}

		for ( var i = 0; i < videosJson.length; i++ ) {
			if ( videosJson[i].command === commandString ) {
				videoQ.push(videosJson[i]);
			}
		}

		for ( var i = 0; i < soundsJson.length; i++ ) {
			if ( soundsJson[i].command === commandString ) {
				soundQ.push(soundsJson[i]);
			}
		}

		for ( var i = 0; i < botCommandsJson.length; i++ ) {
			if ( botCommandsJson[i].commandString == commandString ) {
				client.say(channel, botCommandsJson[i].commandOutput.replace(/\{username\}/g,tags.username));
			}
		}
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
	let clientOptions;
	if ( user === "" || pwd === "" ) {
		clientOptions = {
			connection: {
				secure: true,
				reconnect: true
			},
			channels: [ channelName ]
		};
	} else {
		clientOptions = {
			connection: {
				secure: true,
				reconnect: true
			},
			identity: {
				username: user,
				password: pwd
			},
			channels: [ channelName ]
		};
	}

	const client = new tmi.client(clientOptions);

	// Connect
	client.connect();

	/*
		For each message do:
	*/
	client.on('message', (channel, tags, message, self) => {
		/*
			Find out if this is a command (starting with !), if not do nothing
		*/
		// console.log(tags);
		// console.log(self);
		if ( /^!.*/.test(message) ) {
			// This is a command, retrieve it and check for correspondance
			let command = message.substr(1).split(' ')[0];
			findCorrespondance(channel, tags, command);
		}
	});
});