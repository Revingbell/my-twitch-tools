enContentJson = JSON.parse(`
{
	"global-menu" 						: "Global Parameters",
	"videos-menu" 						: "Video Parameters",
	"sounds-menu" 						: "Sound Parameters",
	"bot-commands-menu" 				: "Bot Commands",
	"export-menu" 						: "Export",
	"language-menu"						: "Language",
	"english-menu"						: "English",
	"french-menu"						: "Français",
	"add-button"						: "Add",
	"legend-title"						: "Legend",
	"global-title"						: "Global Parameters",
	"channel-label"						: "Twitch Channel",
	"channel-legend"					: "Name of the channel. The program will look for commands starting with a ! in this channel's chat.<br><b>Mandatory for this program to work.</b>",
	"chat-user-label"					: "Chat User",
	"chat-user-legend"					: "Name of the user (you or a bot account created specifically) that will write in chat.<br><b>Required only for Bot Commands to work</b>",
	"chat-oauth-label"					: "Oauth Password String",
	"chat-oauth-legend"					: "Connect to this link: <a href=\\"https://twitchapps.com/tmi/\\" target=\\"_blank\\">[Get your oauth password key]</a> with the account specified as 'Chat User' to get the authentication key.<br><b>Never provide this key to anyone.</b><br>In case of doubt, go back to the link to generate a new one.<br><b>Required only for Bot Commands to work.</b>",
	"pause-videos-label"				: "Pause Videos Command",
	"pause-videos-legend"				: "Command string to pause videos. This command will only respond to the channel owner.",
	"resume-videos-label"				: "Resume Videos Command",
	"resume-videos-legend"				: "Command string to resume videos. This command will only respond to the channel owner.",
	"delay-videos-label"				: "Global Video Delay",
	"delay-videos-legend"				: "Minimum delay between two videos in seconds. If any video has a longer duration than this delay, its duration will be used instead of this value.",
	"videos-title"						: "Videos",
	"video-command-title"				: "Command",
	"video-command-label"				: "Command",
	"video-command-legend"				: "Command read after a ! that triggers the video.",
	"video-file-title"					: "File Name",
	"video-file-label"					: "File Name",
	"video-file-legend"					: "Name of the video file you've put in the 'videos' folder.",
	"video-right-title"					: "Rights",
	"video-right-label"					: "Rights",
	"video-right-legend"				: "Who can use this command (Streamer > Moderator + Streamer > VIP + all previous ones > Everyone)",
	"video-delay-title"					: "Delay",
	"video-delay-label"					: "Delay",
	"video-delay-legend"				: "Minimum delay between two uses of this particular command, in seconds.",
	"video-volume-title"				: "Volume",
	"video-volume-label"				: "Volume",
	"video-volume-legend"				: "Volume of the video, value between 0 and 1. ( decimals with a '.' )",
	"pause-sounds-label"				: "Pause Sounds Command",
	"pause-sounds-legend"				: "Command string to pause sounds. This command will only respond to the channel owner.",
	"resume-sounds-label"				: "Resume Sounds Command",
	"resume-sounds-legend"				: "Command string to resume sounds. This command will only respond to the channel owner.",
	"delay-sounds-label"				: "Global Sound Delay",
	"delay-sounds-legend"				: "Minimum delay between two sounds in seconds. If any video has a longer duration than this delay, its duration will be used instead of this value.",
	"sounds-title"						: "Sounds",
	"sound-command-title"				: "Command",
	"sound-command-label"				: "Command",
	"sound-command-legend"				: "Command read after a ! that triggers the sound.",
	"sound-file-title"					: "File Name",
	"sound-file-label"					: "File Name",
	"sound-file-legend"					: "Name of the sound file you've put in the 'sounds' folder.",
	"sound-right-title"					: "Rights",
	"sound-right-label"					: "Rights",
	"sound-right-legend"				: "Who can use this command (Streamer > Moderator + Streamer > VIP + all previous ones > Everyone)",
	"sound-delay-title"					: "Delay",
	"sound-delay-label"					: "Delay",
	"sound-delay-legend"				: "Minimum delay between two uses of this particular command, in seconds.",
	"sound-volume-title"				: "Volume",
	"sound-volume-label"				: "Volume",
	"sound-volume-legend"				: "Volume of the sound, value between 0 and 1. ( decimals with a '.' )",
	"display-all-video-label" 			: "Display All Video Commands",
	"display-all-video-legend"			: "This command will display all video commands available to the user in the chat.",
	"display-all-sound-label" 			: "Display All Sound Commands",
	"display-all-sound-legend"			: "This command will display all sound commands available to the user in the chat.",
	"display-all-bot-command-label" 	: "Display All Bot Commands",
	"display-all-bot-command-legend"	: "This command will display all bot commands available to the user in the chat.",
	"bot-commands-title"				: "Bot Commands",
	"bot-command-string-title"			: "Command",
	"bot-command-string-label"			: "Command",
	"bot-command-string-legend"			: "Command read after a ! that triggers the bot message.",
	"bot-command-output-title"			: "Output",
	"bot-command-output-label"			: "Output",
	"bot-command-output-legend"			: "Message the bot will send after the command is used. You can use '{username}' as a variable that will be substituted for the name of the user sending the command.<br>If you want to make multipart commands, just use the same replaceable string inside the Command String and the Command Output. i.e. '$1' or '{a}' etc... ( see pre filled examples ).",
	"bot-command-right-title"			: "Rights",
	"bot-command-right-label"			: "Rights",
	"bot-command-right-legend"			: "Who can use this command (Streamer > Moderator + Streamer > VIP + all previous ones > Everyone)",
	"right-option-streamer"				: "Streamer",
	"right-option-moderator"			: "Moderator",
	"right-option-vip"					: "VIP",
	"right-option-everyone"				: "Everyone"
}
`);