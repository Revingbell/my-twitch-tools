// Bot flag
var botActive = false;

/*
	Init Runners
*/
var videoQ = new videoQueue(globalVideoDelay);
var soundQ = new soundQueue(globalSoundDelay);

function videoQueueRunner() {
	videoQ.resolve();
}

function soundQueueRunner() {
	soundQ.resolve();
}

setInterval(videoQueueRunner,100);
setInterval(soundQueueRunner,100);

/*
	Channel Reader
*/
$(function(){

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

		botActive = true;
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
		if ( /^!.*/.test(message) ) {
			checkCorrespondance(client, channel, tags, message);
		}
	});
});