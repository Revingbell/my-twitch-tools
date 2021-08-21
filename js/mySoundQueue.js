class soundQueue {

	constructor( delay ) {
		this.q = [];
		this.delay = delay;
		this.paused = false;
		this.stopped = false;
	}

	push( sound )  { if ( this.stopped === false ) { this.q.push( sound ); } }

	add( sound ) {
		$('#my-sounds').append(`
					<audio autoplay src="sounds/` + sound.file + `" class='hidden' id="` + sound.command + `">
					</audio>`);
		$('#' + sound.command)[0].volume = sound.volume;
	}

	/*
		Remove Sound Element after delay to enable another use
	*/
	remove( sound ) {
		setTimeout(function(){
			let soundDuration = ($('#' + sound.command)[0].duration*1000) - 500;

			setTimeout(this.resume.bind(this),Math.max(this.delay*1000, soundDuration));

			setTimeout(function(){
				$('#' + sound.command)[0].remove();
			}, sound.delay * 1000 - soundDuration );
		}.bind(this),500);
	}

	stop() {
		this.paused = true;
		this.stopped = true;
		this.flush();
	}

	start() {
		this.paused = false;
		this.stopped = false;
	}

	pause() { this.paused = true; }

	resume() {
		this.paused = false;
	}

	flush() { this.q = []; }

	resolve() {
		if ( !this.paused && this.q.length !== 0 ) {
			let sound = this.q.shift();
			if ( $('#'+sound.command).length === 0 ) {
				this.add(sound);
				this.pause();
				this.remove(sound);
			}
		}
	}
}