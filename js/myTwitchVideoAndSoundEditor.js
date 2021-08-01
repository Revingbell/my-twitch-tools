$(function(){

    $('#twitch-user-tag').val(streamer);
    
    var videos = correspondanceJson.videos;
    var sounds = correspondanceJson.sounds;

    for ( var i = 0; i < videos.length; i++ ){
        $('#videos').append(`
            <div id="video-` + i + `" class="text-center form-group row">
                <div class="col-5">
                    <input id="video-command-`+i+`" class="form-control" type="text"value="` + videos[i].command + `"/>
                </div>
                <div class="col-5">
                    <input id="video-file-name-`+i+`" class="form-control" type="text" value="` + videos[i].file + `"/>
                </div>
                <div class="col-1">
                    <input id="video-delay-`+i+`" class="form-control" type="text" value="` + videos[i].delay + `"/>
                </div>
                <div class="col-1">
                    <input id="video-volume-`+i+`" class="form-control" type="text" value="` + videos[i].volume + `"/>
                </div>
            </div>`);
    }

    for ( var i = 0; i < sounds.length; i++ ) {
        $('#sounds').append(`
            <div id="sound-` + i + `" class="text-center form-group row">
                <div class="col-5">
                    <input id="sound-command-` + i + `" class="form-control" type="text" value="` + sounds[i].command + `" />
                </div>
                <div class="col-5">
                    <input id="sound-file-name-` + i + `" class="form-control" type="text" value="` + sounds[i].file + `" />
                </div>
                <div class="col-1">
                    <input id="sound-delay-` + i + `" class="form-control" type="text" value="` + sounds[i].delay + `" />
                </div>
                <div class="col-1">
                    <input id="sound-volume-` + i + `" class="form-control" type="text" value="` + sounds[i].volume + `" />
                </div>
            </div>`);
    }

});