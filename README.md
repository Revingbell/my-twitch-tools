# my-twitch-video-and-sound-commands

## How to use:
### Change streamer
In the file `correspondance.js`, modify this line:
```js
var streamer = 'revingbell';
```
Put in your streamer id inside the quotes.
You will only have to do this once.

### Add video and sound files
Put all video files in the `videos` folder, and all sounds in the `sounds` folder.

### Reference commands
Open the file `myTwitchVideoAndSoundEditor.html` with your preferred web browser (Tested on Firefox).

![image](https://user-images.githubusercontent.com/17751686/127928742-892aff44-5967-40ff-9ab8-b1baf9de480d.png)

Manage your videos and sounds the hit the export button, save the `correspondance.js` file inside the `js` folder (replace your previous version by this new one).

## Add to OBS

Then as a last step, add the `myTwitchVideoAndSoundCommands.html` as an internet source in OBS:

![image](https://user-images.githubusercontent.com/17751686/127782022-b564ccdc-45b1-4810-9643-6fcc72134265.png)
