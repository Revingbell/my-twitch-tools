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
`var channelName = "` + $('#twitch-channel').val() + `";
var user = "` + $('#twitch-user').val() + `";
var pwd = "` + $('#twitch-pwd').val() + `";

var pauseVideos = "` + $('#pause-videos').val() + `";
var resumeVideos = "` + $('#resume-videos').val() + `";
var globalVideoDelay = "` + $('#global-video-delay').val() + `";
var videoDelayMessage = "` + $('#video-delay-message').val() + `";

var pauseSounds = "` + $('#pause-sounds').val() + `";
var resumeSounds = "` + $('#resume-sounds').val() + `";
var globalSoundDelay = "` + $('#global-sound-delay').val() + `";
var soundDelayMessage = "` + $('#sound-delay-message').val() + `";

var displayAllVideo = "` + $('#display-all-video').val() + `";
var displayAllSound = "` + $('#display-all-sound').val() + `";
var displayAllBotCommand = "` + $('#display-all-bot-command').val() + `";

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
            "right"     :   $(e).find('.video-right').val(),
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
        "right": "` + e.right + `",
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
            "right"     : $(e).find('.sound-right').val(),
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
        "right" : "` + e.right + `",
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
            "commandOutput" :   $(e).find('.bot-command-output').val().trim().replace(/\n/g," ").replace(/["]/g,"\\\\$&"),
            "commandRight"  :   $(e).find('.bot-command-right').val()
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
        "commandString" : "` + e.commandString + `",
        "commandOutput" : "` + e.commandOutput + `",
        "commandRight"  : "` + e.commandRight + `"
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
            <div class="col-3">
                <input class="form-control video-command" type="text"value="" />
            </div>
            <div class="col-3">
                <input class="form-control video-file-name" type="text" value="" />
            </div>
            <div class="col-3">
                <select class="form-control video-right">
                    <option lang-target="right-option-streamer" value="0">Streamer</option>
                    <option lang-target="right-option-moderator" value="1">Moderator</option>
                    <option lang-target="right-option-vip" value="2">VIP</option>
                    <option lang-target="right-option-everyone" value="3" selected>Everyone</option>
                </select>
            </div>
            <div class="col-1">
                <input class="form-control video-delay" type="text" value="60" />
            </div>
            <div class="col-1">
                <input class="form-control video-volume" type="text" value="0.5" />
            </div>
            <div class="col-1">
                <button class="btn btn-outline-danger" type="button" onclick="$(this).parent().parent().remove()">-</button>
            </div>
        </div>`);

    setLanguage($('#language').val());
}

function addSound() {
    $('#sounds').append(`
        <div class="text-center form-group row align-items-center sound">
            <div class="col-3">
                <input class="form-control sound-command" type="text" value="" />
            </div>
            <div class="col-3">
                <input class="form-control sound-file-name" type="text" value="" />
            </div>
            <div class="col-3">
                <select class="form-control sound-right">
                    <option lang-target="right-option-streamer" value="0"></option>
                    <option lang-target="right-option-moderator" value="1"></option>
                    <option lang-target="right-option-vip" value="2"></option>
                    <option lang-target="right-option-everyone" value="3" selected></option>
                </select>
            </div>
            <div class="col-1">
                <input class="form-control sound-delay" type="text" value="30" />
            </div>
            <div class="col-1">
                <input class="form-control sound-volume" type="text" value="0.5" />
            </div>
            <div class="col-1">
                <button class="btn btn-outline-danger" type="button" onclick="$(this).parent().parent().remove()">-</button>
            </div>
        </div>`);

    setLanguage($('#language').val());
}

function addBotCommand() {
    $('#bot-commands').append(`
        <div class="text-center form-group row align-items-center bot-command">
            <div class="col-3">
                <input class="form-control bot-command-string" type="text" value="" />
            </div>
            <div class="col-5">
                <textarea class="form-control bot-command-output" value="" >`
                +`</textarea>
            </div>
            <div class="col-3">
                <select class="form-control bot-command-right">
                    <option lang-target="right-option-streamer" value="0">Streamer</option>
                    <option lang-target="right-option-moderator" value="1">Moderator</option>
                    <option lang-target="right-option-vip" value="2">VIP</option>
                    <option lang-target="right-option-everyone" value="3" selected>Everyone</option>
                </select>
            </div>
            <div class="col-1">
                <button class="btn btn-outline-danger" type="button" onclick="$(this).parent().parent().remove()">-</button>
            </div>
        </div>`);

    setLanguage($('#language').val());
}

function switchMenu(selectedMenu) {
    let selectedId = selectedMenu.attr('display-target');
    let menus = $('nav a').not('#export');

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
    typeof(user) !== 'undefined' ? $('#twitch-user').val(user) : "";
    typeof(pwd) !== 'undefined' ? $('#twitch-pwd').val(pwd) : "";
    typeof(channelName) !== 'undefined' ? $('#twitch-channel').val(channelName) : "";

    /*
        Video Parameters
    */
    typeof(pauseVideos) !== 'undefined' ? $('#pause-videos').val(pauseVideos) : "";
    typeof(resumeVideos) !== 'undefined' ? $('#resume-videos').val(resumeVideos) : "";
    typeof(globalVideoDelay) !== 'undefined' ? $('#global-video-delay').val(globalVideoDelay) : "";
    typeof(videoDelayMessage) !== 'undefined' ? $('#video-delay-message').val(videoDelayMessage) : "";

    for ( let i = 0; i < videosJson.length; i++ ){
        let command = typeof(videosJson[i].command) !== 'undefined' ? videosJson[i].command : "";
        let file = typeof(videosJson[i].file) !== 'undefined' ? videosJson[i].file : "";
        let right = typeof(videosJson[i].right) !== 'undefined' ? videosJson[i].right : "3";
        let delay = typeof(videosJson[i].delay) !== 'undefined' ? videosJson[i].delay : "60";
        let volume = typeof(videosJson[i].volume) !== 'undefined' ? videosJson[i].volume : "0.5";

        $('#videos').append(`
            <div class="text-center form-group row align-items-center video">
                <div class="col-3">
                    <input class="form-control video-command" type="text" value="` + command + `" />
                </div>
                <div class="col-3">
                    <input class="form-control video-file-name" type="text" value="` + file + `" />
                </div>
                <div class="col-3">
                    <select class="form-control video-right">
                        <option lang-target="right-option-streamer" value="0" ` + (right === "0" ? `selected` : ``) + `>Streamer</option>
                        <option lang-target="right-option-moderator" value="1" ` + (right === "1" ? `selected` : ``) + `>Moderator</option>
                        <option lang-target="right-option-vip" value="2" ` + (right === "2" ? `selected` : ``) + `>VIP</option>
                        <option lang-target="right-option-everyone" value="3" ` + (right === "3" ? `selected` : ``) + `>Everyone</option>
                    </select>
                </div>
                <div class="col-1">
                    <input class="form-control video-delay" type="text" value="` + delay + `" />
                </div>
                <div class="col-1">
                    <input class="form-control video-volume" type="text" value="` + volume + `" />
                </div>
                <div class="col-1">
                    <button class="btn btn-outline-danger" type="button" onclick="$(this).parent().parent().remove()">-</button>
                </div>
            </div>`);
    }

    /*
        Sound Parameters
    */
    typeof(pauseSounds) !== 'undefined' ? $('#pause-sounds').val(pauseSounds) : "";
    typeof(resumeSounds) !== 'undefined' ? $('#resume-sounds').val(resumeSounds) : "";
    typeof(globalSoundDelay) !== 'undefined' ? $('#global-sound-delay').val(globalSoundDelay) : "";
    typeof(soundDelayMessage) !== 'undefined' ? $('#sound-delay-message').val(soundDelayMessage) : "";

    for ( let i = 0; i < soundsJson.length; i++ ) {
        let command = typeof(soundsJson[i].command) !== 'undefined' ? soundsJson[i].command : "";
        let file = typeof(soundsJson[i].file) !== 'undefined' ? soundsJson[i].file : "";
        let right = typeof(soundsJson[i].right) !== 'undefined' ? soundsJson[i].right : "3";
        let delay = typeof(soundsJson[i].delay) !== 'undefined' ? soundsJson[i].delay : "30";
        let volume = typeof(soundsJson[i].volume) !== 'undefined' ? soundsJson[i].volume : "0.5";

        $('#sounds').append(`
            <div class="text-center form-group row align-items-center sound">
                <div class="col-3">
                    <input class="form-control sound-command" type="text" value="` + command + `" />
                </div>
                <div class="col-3">
                    <input class="form-control sound-file-name" type="text" value="` + file + `" />
                </div>
                <div class="col-3">
                    <select class="form-control sound-right">
                        <option lang-target="right-option-streamer" value="0" ` + (right === "0" ? `selected` : ``) + `>Streamer</option>
                        <option lang-target="right-option-moderator" value="1" ` + (right === "1" ? `selected` : ``) + `>Moderator</option>
                        <option lang-target="right-option-vip" value="2" ` + (right === "2" ? `selected` : ``) + `>VIP</option>
                        <option lang-target="right-option-everyone" value="3" ` + (right === "3" ? `selected` : ``) + `>Everyone</option>
                    </select>
                </div>
                <div class="col-1">
                    <input class="form-control sound-delay" type="text" value="` + delay + `" />
                </div>
                <div class="col-1">
                    <input class="form-control sound-volume" type="text" value="` + volume + `" />
                </div>
                <div class="col-1">
                    <button class="btn btn-outline-danger" type="button" onclick="$(this).parent().parent().remove()">-</button>
                </div>
            </div>`);
    }

    /*
        Bot Commands
    */
    typeof(displayAllVideo) !== 'undefined' ? $('#display-all-video').val(displayAllVideo) : "";
    typeof(displayAllSound) !== 'undefined' ? $('#display-all-sound').val(displayAllSound) : "";
    typeof(displayAllBotCommand) !== 'undefined' ? $('#display-all-bot-command').val(displayAllBotCommand) : "";

    for ( let i = 0; i < botCommandsJson.length; i++ ) {
        let commandString = typeof(botCommandsJson[i].commandString) !== 'undefined' ? botCommandsJson[i].commandString : "";
        let commandOutput = typeof(botCommandsJson[i].commandOutput) !== 'undefined' ? botCommandsJson[i].commandOutput : "";
        let commandRight = typeof(botCommandsJson[i].commandRight) !== 'undefined' ? botCommandsJson[i].commandRight : "3";

        $('#bot-commands').append(`
            <div class="text-center form-group row align-items-center bot-command">
                <div class="col-3">
                    <input class="form-control bot-command-string" type="text" value="` + commandString + `" />
                </div>
                <div class="col-5">
                    <textarea class="form-control bot-command-output" >`
                         + commandOutput
                    +`</textarea>
                </div>
                <div class="col-3">
                    <select class="form-control bot-command-right">
                        <option lang-target="right-option-streamer" value="0" ` + (commandRight === "0" ? `selected` : ``) + `>Streamer</option>
                        <option lang-target="right-option-moderator" value="1" ` + (commandRight === "1" ? `selected` : ``) + `>Moderator</option>
                        <option lang-target="right-option-vip" value="2" ` + (commandRight === "2" ? `selected` : ``) + `>VIP</option>
                        <option lang-target="right-option-everyone" value="3" ` + (commandRight === "3" ? `selected` : ``) + `>Everyone</option>
                    </select>
                </div>
                <div class="col-1">
                    <button class="btn btn-outline-danger" type="button" onclick="$(this).parent().parent().remove()">-</button>
                </div>
            </div>`);
    }

});