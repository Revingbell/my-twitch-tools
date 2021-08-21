/*
	Search Command for Correspondance in Json
*/
function checkCorrespondance ( client, channel, tags, message ) {
	let baseCommandString = message.substr(1).split(' ')[0];

	if ( checkChannelOwnerCommands(tags, baseCommandString) ) {

		return;

	} else if ( checkVideoCommands(client, channel, baseCommandString) ) {

		return;

	} else if ( checkSoundCommands(client, channel, baseCommandString) ) {

		return;
	}

	if ( botActive ) {
		checkBotCommands(client, channel, tags, message);
	}

}

/*
	Check if command is a channel owner only command first
*/
function checkChannelOwnerCommands ( tags, command ) {

	if ( tags.username === channelName && ( [pauseVideos,resumeVideos,pauseSounds,resumeSounds].includes(command) ) ) {

		if ( pauseVideos === command ) {
			videoQ.stop();
		}

		if ( resumeVideos === command ) {
			videoQ.start();
		}

		if ( pauseSounds === command ) {
			soundQ.stop();
		}

		if ( resumeSounds === command ) {
			soundQ.start();
		}

		return true;
	}

	return false;
}

/*
	Check if command is for a Video
*/
function checkVideoCommands ( client, channel, command ) {

	for ( var i = 0; i < videosJson.length; i++ ) {

		if ( videosJson[i].command === command ) {

			if ( $('#'+videosJson[i].command).length === 0 ) { // video is cleared to be pushed into the queue

				videoQ.push(videosJson[i]);

			} else if ( botActive ) {

				let output = "This command has a delay of " + videosJson[i].delay + " seconds between two uses.";
				client.say(channel, output);
			}

			return true;
		}
	}

	return false;
}

/*
	Check if command is for a Sound
*/
function checkSoundCommands ( client, channel, command ) {

	for ( var i = 0; i < soundsJson.length; i++ ) {

		if ( soundsJson[i].command === command ) {

			if ( $('#'+soundsJson[i].command).length === 0 ) { // sound is cleared to be pushed into the queue

				soundQ.push(soundsJson[i]);

			} else if ( botActive ) {

				let output = "This command has a delay of " + soundsJson[i].delay + " seconds between two uses.";
				client.say(channel, output);
			}

			return true;
		}
	}

	return false;
}

/*
	Check if command is a Bot Command
*/
function checkBotCommands( client, channel, tags, message ) {
	let baseCommandString = message.substr(1).split(' ')[0];

	if ( baseCommandString === displayAll ){

		return manageDisplayAll(client, channel);

	} else {

		return manageBotCommands(client, channel, tags, message);
	}
}

/*
	Manage the "display all commands" command
*/
function manageDisplayAll( client, channel ) {
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

	return true;
}

/*
	Manage Bot Commands
*/
function manageBotCommands( client, channel, tags, message ) {
	let baseCommandString = message.substr(1).split(' ')[0];

	for ( var i = 0; i < botCommandsJson.length; i++ ) {

		if ( botCommandsJson[i].commandString.split(' ')[0] == baseCommandString ) {

			let output = "";

			if ( botCommandsJson[i].commandString.split(' ').length === 1 ) { // Simple command

				output = botCommandsJson[i].commandOutput;

			} else { // Command with parts

				commandParts = botCommandsJson[i].commandString.split(' ');
				inputParts = message.substr(1).split(' ');
				output = botCommandsJson[i].commandOutput;

				for ( var i = 1; i < commandParts.length; i++ ) {
					reg = new RegExp(escapeRegExp(commandParts[i]),'g');
					output = output.replace(reg,inputParts[i]);
				}
			}

			// Always replace the special parameter username if found
			output = output.replace(/\{username\}/g,tags.username);

			// Manage outputs longer than 500 characters
			while (output.length >= 500 ) {

				let lastIndex = output.substr(0,500).lastIndexOf(' ');

				client.say(channel, output.substr(0,lastIndex));

				output = output.substr(lastIndex);
			}

			client.say(channel, output);

			return true;
		}
	}

	return false;
}