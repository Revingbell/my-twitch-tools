var videoQ = new videoQueue(globalVideoDelay);
var soundQ = new soundQueue(globalSoundDelay);
var noBot = false;

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

		if ( noBot === false ) {

			if ( commandString === displayAll ){
				let output = "";

				// Video Message
				output += "Videos: ";

				for ( var i = 0; i < videosJson.length; i++ ) {
					if ( ( output.length + videosJson[i].command.length + " | ".length ) >= 500 ) {
						output = output.slice(0,-3);
						client.say(channel,output);
						output = "Videos: ";
					}
					output += videosJson[i].command + " | ";
				}

				output = output.slice(0,-3);

				client.say(channel,output);

				// Sound Message
				output = "Sounds: ";

				for ( var i = 0; i < soundsJson.length; i++ ) {
					if ( ( output.length + soundsJson[i].command.length + " | ".length ) >= 500 ) {
						output = output.slice(0,-3);
						client.say(channel,output);
						output = "Sounds: ";
					}
					output += soundsJson[i].command + " | ";
				}

				output = output.slice(0,-3);

				client.say(channel,output);

				// Bot Commands Message
				output = "Bot Commands: " + displayAll + " | ";

				for ( var i = 0; i < botCommandsJson.length; i++ ) {
					if ( ( output.length + botCommandsJson[i].command.length + " | ".length ) >= 500 ) {
						output = output.slice(0,-3);
						client.say(channel,output);
						output = "Bot Commands: ";
					}
					output += botCommandsJson[i].commandString + " | ";
				}

				output = output.slice(0,-3);

				client.say(channel,output);

			}

			for ( var i = 0; i < botCommandsJson.length; i++ ) {
				if ( botCommandsJson[i].commandString == commandString ) {
					client.say(channel, botCommandsJson[i].commandOutput.replace(/\{username\}/g,tags.username));
				}
			}
		}
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

		noBot = true;
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