var channelName = "revingbell";
var user = "revingbell";
var pwd = "";

var pauseVideos = "pvid";
var resumeVideos = "rvid";
var globalVideoDelay = "5";
var videoDelayMessage = "There is still {videoDelay} seconde before the next possible use of the command !{videoCommand}.";

var pauseSounds = "psnd";
var resumeSounds = "rsnd";
var globalSoundDelay = "5";
var soundDelayMessage = "There is still {soundDelay} seconde before the next possible use of the command !{soundCommand}.";

var displayAllVideo = "vcmd";
var displayAllSound = "scmd";
var displayAllBotCommand = "bcmd";

var videosJson = JSON.parse(`
[
    {
        "command" : "eleo",
        "file" : "eleonore.mp4",
        "right": "3",
        "delay" : "10",
        "volume" : "0.5"
    },
    {
        "command" : "findumonde",
        "file" : "fin_du_monde.mp4",
        "right": "0",
        "delay" : "10",
        "volume" : "0.2"
    },
    {
        "command" : "societe",
        "file" : "societe.mp4",
        "right": "1",
        "delay" : "60",
        "volume" : "0.5"
    },
    {
        "command" : "statistique",
        "file" : "francois_billy_martingale.mp4",
        "right": "2",
        "delay" : "30",
        "volume" : "0.2"
    },
    {
        "command" : "triste",
        "file" : "tuestriste.mp4",
        "right": "0",
        "delay" : "10",
        "volume" : "0.5"
    }
]`);


var soundsJson = JSON.parse(`
[
    {
        "command" : "clap",
        "file" : "clap.wav",
        "right" : "3",
        "delay" : "30",
        "volume" : "0.5"
    },
    {
        "command" : "thereyouare",
        "file" : "there_you_are.wav",
        "right" : "3",
        "delay" : "30",
        "volume" : "0.2"
    }
]
`);

var botCommandsJson = JSON.parse(`
[
    {
        "commandString" : "so $1 $2 $3",
        "commandOutput" : "This person does $2 as their primary thing. But they also do $3. Don't hesitate to go and follow the channel of @$1 at this link https://www.twitch.tv/$1",
        "commandRight"  : "0"
    },
    {
        "commandString" : "test",
        "commandOutput" : "This is a test, very funny @{username} LUL",
        "commandRight"  : "3"
    },
    {
        "commandString" : "toto {a} {b}",
        "commandOutput" : "This is a test, {a} is {b} but mostly {a} Kreygasm",
        "commandRight"  : "3"
    }
]
`);