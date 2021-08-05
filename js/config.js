var user = "revingbell";
var pwd = "";
var channelName = "revingbell";

var pauseVideos = "pvid";
var resumeVideos = "rvid";
var globalVideoDelay = "5";

var pauseSounds = "psnd";
var resumeSounds = "rsnd";
var globalSoundDelay = "5";

var videosJson = JSON.parse(`
[
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
        "command" : "findumonde",
        "file" : "fin_du_monde.mp4",
        "delay" : "10",
        "volume" : "0.2"
    }
]`);

var soundsJson = JSON.parse(`
[
    {
        "command" : "thereyouare",
        "file" : "there_you_are.wav",
        "delay" : "30",
        "volume" : "0.2"
    },
    {
        "command" : "clap",
        "file" : "clap.wav",
        "delay" : "30",
        "volume" : "0.5"
    }
]
`);

var botCommandsJson = JSON.parse(`
[
    {
        "commandString" : "test",
        "commandOutput" : "This is a test, very funny LUL"
    }
]
`);