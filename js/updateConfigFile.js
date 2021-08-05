function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/javascript;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function exportFile() {
    let text;

    text =
`var user = "";
var pwd = "";
var channelName = "` + streamer + `";

var pauseVideos = "";
var resumeVideos = "";
var globalVideoDelay = "";

var pauseSounds = "";
var resumeSounds = "";
var globalSoundDelay = "";

var videosJson = JSON.parse(\`
[`;

    let videos = correspondanceJson.videos;
    for ( let i = 0; i < videos.length; i++ ){
        let command = videos[i].command;
        let file = videos[i].file;
        let delay = videos[i].delay;
        let volume = videos[i].volume;

        if ( command === "" || file === "" || delay === "" || volume === "" ) {
            return true;
        }

        text += `
    {
        "command" : "` + command + `",
        "file" : "` + file + `",
        "delay" : "` + delay + `",
        "volume" : "` + volume + `"
    }`;

        if ( i !== videos.length - 1 ) {
            text += `,`;
        }
    };

    text += `
]\`);

var soundsJson = JSON.parse(\`
[`;

    let sounds = correspondanceJson.sounds;
    for ( let i = 0; i < sounds.length; i++ ){
        let command = sounds[i].command;
        let file = sounds[i].file;
        let delay = sounds[i].delay;
        let volume = sounds[i].volume;

        if ( command === "" || file === "" || delay === "" || volume === "" ) {
            return true;
        }

        text += `
    {
        "command" : "` + command + `",
        "file" : "` + file + `",
        "delay" : "` + delay + `",
        "volume" : "` + volume + `"
    }`;

        if ( i !== sounds.length - 1 ) {
            text += `,`;
        }
    };

    text += `
]
\`);

var botCommandsJson = JSON.parse(\`
[
]
\`);`;

    download("config.js",text);
}

$(function(){exportFile();});