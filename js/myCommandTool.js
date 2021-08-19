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
	function checkCorrespondance (channel, tags, message) {
		let basecommandString = message.substr(1).split(' ')[0];

		if ( tags.username === channelName && ( [pauseVideos,resumeVideos,pauseSounds,resumeSounds].includes(basecommandString) ) ) {
			if ( pauseVideos === basecommandString ) {
				videoQ.stop();
			}

			if ( resumeVideos === basecommandString ) {
				videoQ.resume();
			}

			if ( pauseSounds === basecommandString ) {
				soundQ.stop();
			}

			if ( resumeSounds === basecommandString ) {
				soundQ.resume();
			}
		}

		for ( var i = 0; i < videosJson.length; i++ ) {
			if ( videosJson[i].command === basecommandString ) {
				videoQ.push(videosJson[i]);
			}
		}

		for ( var i = 0; i < soundsJson.length; i++ ) {
			if ( soundsJson[i].command === basecommandString ) {
				soundQ.push(soundsJson[i]);
			}
		}

		if ( noBot === false ) {

			if ( basecommandString === displayAll ){
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
					if ( ( output.length + botCommandsJson[i].commandString.length + " | ".length ) >= 500 ) {
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
				if ( botCommandsJson[i].commandString.split(' ')[0] == basecommandString ) {
					manageBotCommands(channel, tags, message, botCommandsJson[i]);
				}
			}
		}
	}

	/*
		Manage Bot Commands
	*/
	function manageBotCommands(channel, tags, message, botCommandInfos) {
		let output = "";

		if ( botCommandInfos.commandString.split(' ').length === 1 ) { // Simple command
			output = botCommandInfos.commandOutput;

		} else { // Command with parts

			commandParts = botCommandInfos.commandString.split(' ');
			inputParts = message.substr(1).split(' ');
			output = botCommandInfos.commandOutput;

			for ( var i = 1; i < commandParts.length; i++ ) {
				reg = new RegExp(escapeRegExp(commandParts[i]),'g');
				output = output.replace(reg,inputParts[i]);
			}
		}

		// Always replace the special parameter username if found
		output = output.replace(/\{username\}/g,tags.username);

		client.say(channel, output);
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
			checkCorrespondance(channel, tags, message);
		}
	});
});