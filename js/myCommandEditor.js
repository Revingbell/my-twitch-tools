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
`var user = "` + $('#twitch-user').val() + `";
var pwd = "` + $('#twitch-pwd').val() + `";
var channelName = "` + $('#twitch-channel').val() + `";

var pauseVideos = "` + $('#pause-videos').val() + `";
var resumeVideos = "` + $('#resume-videos').val() + `";
var globalVideoDelay = "` + $('#global-video-delay').val() + `";

var pauseSounds = "` + $('#pause-sounds').val() + `";
var resumeSounds = "` + $('#resume-sounds').val() + `";
var globalSoundDelay = "` + $('#global-sound-delay').val() + `";

var displayAll = "` + $('#display-all').val() + `";

var videosJson = JSON.parse(\`
[`;

    /*
        Append Videos
    */
    let videos = $('.video');
    let videosArray = [];

    videos.each(function(i,e){
        let videoObject = {
            "command"   :   $(e).find('.video-command').val().trim(),
            "file"      :   $(e).find('.video-file-name').val().trim(),
            "delay"     :   $(e).find('.video-delay').val(),
            "volume"    :   $(e).find('.video-volume').val()
        };

        videosArray.push(videoObject);
    });

    // Sort videos alphabetically by command then file name
    videosArray.sort((a,b) => (a.command > b.command) ? 1 : (a.command === b.command) ? ((a.file > b.file) ? 1 : -1) : -1)

    videosArray.forEach(function(e,i){
        if ( e.command === "" || e.file === "" || e.delay === "" || e.volume === "" ) {
            return true;
        }

        text += `
    {
        "command" : "` + e.command + `",
        "file" : "` + e.file + `",
        "delay" : "` + e.delay + `",
        "volume" : "` + e.volume + `"
    }`;

        if ( i !== videosArray.length - 1 ) {
            text += `,`;
        }
    });

    text += `
]\`);


var soundsJson = JSON.parse(\`
[`;

    /*
        Append Sounds
    */
    let sounds = $('.sound');
    let soundsArray = [];

    sounds.each(function(i,e){
        let soundObject = {
            "command"   : $(e).find('.sound-command').val().trim(),
            "file"      : $(e).find('.sound-file-name').val().trim(),
            "delay"     : $(e).find('.sound-delay').val(),
            "volume"    : $(e).find('.sound-volume').val()
        };

        soundsArray.push(soundObject);
    });

    // Sort sounds alphabetically by command then file name
    soundsArray.sort((a,b) => (a.command > b.command) ? 1 : (a.command === b.command) ? ((a.file > b.file) ? 1 : -1) : -1)

    soundsArray.forEach(function(e,i){
        if ( e.command === "" || e.file === "" || e.delay === "" || e.volume === "" ) {
            return true;
        }

        text += `
    {
        "command" : "` + e.command + `",
        "file" : "` + e.file + `",
        "delay" : "` + e.delay + `",
        "volume" : "` + e.volume + `"
    }`;

        if ( i !== soundsArray.length - 1 ) {
            text += `,`;
        }
    });

    text += `
]
\`);

var botCommandsJson = JSON.parse(\`
[`;

    let botCommands = $('.bot-command');
    let botCommandsArray = [];

    botCommands.each(function(i,e){
        let botCommandObject = {
            "commandString" :   $(e).find('.bot-command-string').val().trim(),
            "commandOutput" :   $(e).find('.bot-command-output').val().trim()
        }

        botCommandsArray.push(botCommandObject);
    });

    botCommandsArray.sort((a,b) => (a.commandString > b.commandString) ? 1 : (a.commandString === b.commandString) ? ((a.commandOutput > b.commandOutput) ? 1 : -1) : -1);

    botCommandsArray.forEach(function(e,i){
        if ( e.commandString === "" || e.commandOutput === "") {
            return true;
        }

        text += `
    {
        "commandString" : "` + commandString + `",
        "commandOutput" : "` + commandOutput + `"
    }`;

        if ( i !== botCommandsArray.length - 1 ) {
            text += `,`;
        }
    });

    text += `
]
\`);`;

    download("config.js",text);
}

function addVideo() {
    $('#videos').append(`
        <div class="text-center form-group row align-items-center video">
            <div class="col-4">
                <input class="form-control video-command" type="text"value="" />
            </div>
            <div class="col-5">
                <input class="form-control video-file-name" type="text" value="" />
            </div>
            <div class="col-1">
                <input class="form-control video-delay" type="text" value="" />
            </div>
            <div class="col-1">
                <input class="form-control video-volume" type="text" value="" />
            </div>
            <div class="col-1">
                <button class="btn btn-outline-danger" type="button" onclick="$(this).parent().parent().remove()">-</button>
            </div>
        </div>`);
}

function addSound() {
    $('#sounds').append(`
        <div class="text-center form-group row align-items-center sound">
            <div class="col-4">
                <input class="form-control sound-command" type="text" value="" />
            </div>
            <div class="col-5">
                <input class="form-control sound-file-name" type="text" value="" />
            </div>
            <div class="col-1">
                <input class="form-control sound-delay" type="text" value="" />
            </div>
            <div class="col-1">
                <input class="form-control sound-volume" type="text" value="" />
            </div>
            <div class="col-1">
                <button class="btn btn-outline-danger" type="button" onclick="$(this).parent().parent().remove()">-</button>
            </div>
        </div>`);
}

function addBotCommand() {
    $('#bot-commands').append(`
        <div class="text-center form-group row align-items-center bot-command">
            <div class="col-4">
                <input class="form-control bot-command-string" type="text" value="" />
            </div>
            <div class="col-7">
                <textarea class="form-control bot-command-output" value="" >`
                +`</textarea>
            </div>
            <div class="col-1">
                <button class="btn btn-outline-danger" type="button" onclick="$(this).parent().parent().remove()">-</button>
            </div>
        </div>`);
}

function switchMenu(selectedMenu) {
    let selectedId = selectedMenu.attr('display-target');
    let menus = $('.nav-bar a').not('#export');

    /* Reset Menus */
    menus.removeClass('active');
    selectedMenu.addClass('active');

    /* Reset Content Parts display*/
    $('.content-part').removeClass('d-none')
    $('.content-part').not('#' + selectedId).addClass('d-none');

}

$(function(){

    /*
        Global Parameters
    */
    $('#twitch-user').val(user);
    $('#twitch-pwd').val(pwd);
    $('#twitch-channel').val(channelName);


    /*
        Video Parameters
    */
    $('#pause-videos').val(pauseVideos);
    $('#resume-videos').val(resumeVideos);
    $('#global-video-delay').val(globalVideoDelay);

    for ( let i = 0; i < videosJson.length; i++ ){
        $('#videos').append(`
            <div class="text-center form-group row align-items-center video">
                <div class="col-4">
                    <input class="form-control video-command" type="text" value="` + videosJson[i].command + `" />
                </div>
                <div class="col-5">
                    <input class="form-control video-file-name" type="text" value="` + videosJson[i].file + `" />
                </div>
                <div class="col-1">
                    <input class="form-control video-delay" type="text" value="` + videosJson[i].delay + `" />
                </div>
                <div class="col-1">
                    <input class="form-control video-volume" type="text" value="` + videosJson[i].volume + `" />
                </div>
                <div class="col-1">
                    <button class="btn btn-outline-danger" type="button" onclick="$(this).parent().parent().remove()">-</button>
                </div>
            </div>`);
    }

    /*
        Sound Parameters
    */
    $('#pause-sounds').val(pauseSounds);
    $('#resume-sounds').val(resumeSounds);
    $('#global-sound-delay').val(globalSoundDelay);

    for ( let i = 0; i < soundsJson.length; i++ ) {
        $('#sounds').append(`
            <div class="text-center form-group row align-items-center sound">
                <div class="col-4">
                    <input class="form-control sound-command" type="text" value="` + soundsJson[i].command + `" />
                </div>
                <div class="col-5">
                    <input class="form-control sound-file-name" type="text" value="` + soundsJson[i].file + `" />
                </div>
                <div class="col-1">
                    <input class="form-control sound-delay" type="text" value="` + soundsJson[i].delay + `" />
                </div>
                <div class="col-1">
                    <input class="form-control sound-volume" type="text" value="` + soundsJson[i].volume + `" />
                </div>
                <div class="col-1">
                    <button class="btn btn-outline-danger" type="button" onclick="$(this).parent().parent().remove()">-</button>
                </div>
            </div>`);
    }

    /*
        Bot Commands
    */
    $('#display-all').val(displayAll);

    for ( let i = 0; i < botCommandsJson.length; i++ ) {
        $('#bot-commands').append(`
            <div class="text-center form-group row align-items-center bot-command">
                <div class="col-4">
                    <input class="form-control bot-command-string" type="text" value="` + botCommandsJson[i].commandString + `" />
                </div>
                <div class="col-7">
                    <textarea class="form-control bot-command-output" >`
                         + botCommandsJson[i].commandOutput
                    +`</textarea>
                </div>
                <div class="col-1">
                    <button class="btn btn-outline-danger" type="button" onclick="$(this).parent().parent().remove()">-</button>
                </div>
            </div>`);
    }

});