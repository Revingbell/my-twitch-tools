class videoQueue {

	constructor( delay ) {
		this.q = [];
		this.delay = delay;
		this.paused = false;
	}

	push( video )  { this.q.push( video ); }

	/*
		Hide Video Element after its duration, then after delay remove it for another use
	*/
	remove( video ) {
		setTimeout(function(){
			let videoDuration = ($('#' + video.command)[0].duration*1000) - 500;

			setTimeout(this.resume.bind(this),Math.max(this.delay*1000, videoDuration));

			setTimeout(function() {
				$($('#' + video.command)[0]).addClass('hidden');

				setTimeout(function(){
					$('#' + video.command)[0].remove();
				}, video.delay * 1000 - videoDuration );
			}, videoDuration);
		}.bind(this),500);
	}

	stop() {
		this.paused = true;
		this.flush();
	}

	pause() { this.paused = true; }

	resume() { this.paused = false;	}

	flush() { this.q = []; }

	resolve() {
		if ( !this.paused && this.q.length !== 0 ) {
			let video = this.q.shift()
			if ( $('#'+video.command).length === 0 ) {
				$('#my-videos').append(`
				<video autoplay width="800" height="600" src="videos/` + video.file + `" id="` + video.command + `">
				</video>`);
				$('#' + video.command)[0].volume = video.volume;
				this.pause();
				this.remove(video);
			}
		}
		return true;
	}
}