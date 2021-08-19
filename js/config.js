var user = "revingbell";
var pwd = "";
var channelName = "revingbell";

var pauseVideos = "pvid";
var resumeVideos = "rvid";
var globalVideoDelay = "5";

var pauseSounds = "psnd";
var resumeSounds = "rsnd";
var globalSoundDelay = "5";

var displayAll = "commands";

var videosJson = JSON.parse(`
[
    {
        "command" : "eleo",
        "file" : "eleonore.mp4",
        "delay" : "10",
        "volume" : "0.5"
    },
    {
        "command" : "findumonde",
        "file" : "fin_du_monde.mp4",
        "delay" : "10",
        "volume" : "0.2"
    },
    {
        "command" : "societe",
        "file" : "societe.mp4",
        "delay" : "60",
        "volume" : "0.5"
    },
    {
        "command" : "statistique",
        "file" : "francois_billy_martingale.mp4",
        "delay" : "30",
        "volume" : "0.2"
    },
    {
        "command" : "triste",
        "file" : "tuestriste.mp4",
        "delay" : "10",
        "volume" : "0.5"
    }
]`);


var soundsJson = JSON.parse(`
[
    {
        "command" : "clap",
        "file" : "clap.wav",
        "delay" : "30",
        "volume" : "0.5"
    },
    {
        "command" : "thereyouare",
        "file" : "there_you_are.wav",
        "delay" : "30",
        "volume" : "0.2"
    }
]
`);

var botCommandsJson = JSON.parse(`
[
    {
        "commandString" : "so $1 $2 $3",
        "commandOutput" : "This person does $2 as their primary thing. But they also do $3. Don't hesitate to go and follow the channel of @$1 at this link https://www.twitch.tv/$1"
    },
    {
        "commandString" : "test",
        "commandOutput" : "This is a test, very funny @{username} LUL"
    },
    {
        "commandString" : "toto {a} {b}",
        "commandOutput" : "This is a test, {a} is {b} but mostly {a} Kreygasm"
    }
]
`);