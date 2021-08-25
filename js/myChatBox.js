$(function(){

	function sanitizeString(string) {
		return string.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
		   return '&#'+i.charCodeAt(0)+';';
		});
	}

	function substituteEmotes(tags,message) {
		let newMessage = '';

		if (tags['emotes'] !== null) { // if emotes sent inside message text

			let startSubstr = 0;
			let lengthSubstr = 0;

			/*
				Transform the tags['emotes'] object to suit our needs
			*/
			Object.keys(tags['emotes'])
			.flatMap(
				x => tags['emotes'][x].map(
					y => ({
						s: +y.split('-')[0],
						e: +y.split('-')[1],
						id: x,
					})
				)
			)
			.sort((a,b) => a.s - b.s)
			.forEach(function(emoteObject){
				/*
					We rebuild the message by substituting emote text with <img> markup,
					and we sanitize everything else
				*/
				lengthSubstr = (emoteObject.s - startSubstr);

				/*
				 	Sanitize then append parts of the message that are NOT emotes to the string,
				 	or else the <img> markup would not be interpreted
				 */
				newMessage += sanitizeString(message.substr(startSubstr,lengthSubstr));

				/*
					Append emote to string
				*/
				newMessage += `<img class="emote" src="https://static-cdn.jtvnw.net/emoticons/v2/${emoteObject.id}/default/dark/1.0" srcset="https://static-cdn.jtvnw.net/emoticons/v2/${emoteObject.id}/default/dark/1.0 1x,https://static-cdn.jtvnw.net/emoticons/v2/${emoteObject.id}/default/dark/2.0 2x,https://static-cdn.jtvnw.net/emoticons/v2/${emoteObject.id}/default/dark/3.0 4x">`;

				startSubstr = emoteObject.e + 1;
			})

			newMessage += sanitizeString(message.substr(startSubstr));

			return newMessage;

		} else { // if no emotes inside the message
			return sanitizeString(message);
		}
	}

	// Build client connection
	const client = new tmi.Client({
		connection: {
			secure: true,
			reconnect: true
		},
		channels: [ channelName ]
	});

	client.connect();

	// For each message do:
	client.on('message', (channel, tags, message, self) => {

		if ( !/^!.*/.test(message) ) {
			let date = new Date(tags["tmi-sent-ts"] * 1);

			let messageTime = (date.getHours() < 10 ? "0" : "") + date.getHours() + ":" + (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();

			let color = (tags['color'] === null ? "#FF0000" : tags['color']);

			let printableMessage = substituteEmotes(tags,message);

			$('#my-chat').append(`
					<div class='message' id='${tags["tmi-sent-ts"]}'>
						<span class='messageTime'>
				 			${messageTime}
				 		</span>
						<span class='name' style='color: ${color} ;'>
							${tags['display-name']} :
					 	</span>
				 		${printableMessage}
					</div>`
			);

			setTimeout(function(){
				$('#'+tags["tmi-sent-ts"]).fadeOut(1000, function() {
					$('#' + tags["tmi-sent-ts"]).remove();
				});
			}, 60000);
		}
	});
});