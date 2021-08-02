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
`var streamer = "` + $('#twitch-user-tag').val() + `";

var correspondanceJson = JSON.parse(\`
{
    "videos": [`;

    let videos = $('.video');
    videos.each(function(i,e){
        let command = $(e).find('.video-command').val();
        let file = $(e).find('.video-file-name').val();
        let delay = $(e).find('.video-delay').val();
        let volume = $(e).find('.video-volume').val();

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
    });

    text += `
    ],
    "sounds": [`;

    let sounds = $('.sound');
    sounds.each(function(i,e){
        let command = $(e).find('.sound-command').val();
        let file = $(e).find('.sound-file-name').val();
        let delay = $(e).find('.sound-delay').val();
        let volume = $(e).find('.sound-volume').val();

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
    });

    text += `
    ]
}
\`);`;

    download("correspondance.js",text);
}

function addVideo() {
    $('#videos').append(`
        <div class="text-center form-group row video">
            <div class="col-4">
                <input class="form-control video-command" type="text"value=""/>
            </div>
            <div class="col-5">
                <input class="form-control video-file-name" type="text" value=""/>
            </div>
            <div class="col-1">
                <input class="form-control video-delay" type="text" value=""/>
            </div>
            <div class="col-1">
                <input class="form-control video-volume" type="text" value=""/>
            </div>
            <div class="col-1">
                <button class="btn btn-outline-danger" type="button" onclick="$(this).parent().parent().remove()">-</button>
            </div>
        </div>`);
}

function addSound() {
    $('#sounds').append(`
        <div class="text-center form-group row sound">
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

$(function(){

    $('#twitch-user-tag').val(streamer);
    
    let videos = correspondanceJson.videos;
    let sounds = correspondanceJson.sounds;

    for ( let i = 0; i < videos.length; i++ ){
        $('#videos').append(`
            <div class="text-center form-group row video">
                <div class="col-4">
                    <input class="form-control video-command" type="text"value="` + videos[i].command + `"/>
                </div>
                <div class="col-5">
                    <input class="form-control video-file-name" type="text" value="` + videos[i].file + `"/>
                </div>
                <div class="col-1">
                    <input class="form-control video-delay" type="text" value="` + videos[i].delay + `"/>
                </div>
                <div class="col-1">
                    <input class="form-control video-volume" type="text" value="` + videos[i].volume + `"/>
                </div>
                <div class="col-1">
                    <button class="btn btn-outline-danger" type="button" onclick="$(this).parent().parent().remove()">-</button>
                </div>
            </div>`);
    }

    for ( let i = 0; i < sounds.length; i++ ) {
        $('#sounds').append(`
            <div class="text-center form-group row sound">
                <div class="col-4">
                    <input class="form-control sound-command" type="text" value="` + sounds[i].command + `" />
                </div>
                <div class="col-5">
                    <input class="form-control sound-file-name" type="text" value="` + sounds[i].file + `" />
                </div>
                <div class="col-1">
                    <input class="form-control sound-delay" type="text" value="` + sounds[i].delay + `" />
                </div>
                <div class="col-1">
                    <input class="form-control sound-volume" type="text" value="` + sounds[i].volume + `" />
                </div>
                <div class="col-1">
                    <button class="btn btn-outline-danger" type="button" onclick="$(this).parent().parent().remove()">-</button>
                </div>
            </div>`);
    }

});