# my-twitch-video-and-sound-commands
[Download Latest Release](https://github.com/Revingbell/my-twitch-video-and-sound-commands/releases)  

*Read this in another language: [English](README.md), [Français](README.fr.md).*

## How to use:

### Update Config File From v1.1.0
Put your old `config.js` file inside the `js` folder, then open the file `updateConfigFile.html` in the web browser of your choice.  
You will be prompted to download the updated version of the file, save it inside the `js` folder. You can start using v1.2.0.

### Add video and sound files
Put all video files in the `videos` folder, and all sounds in the `sounds` folder.

### Parametrize the program
Open the file `myTwitchVideoAndSoundEditor.html` with your preferred web browser (Tested on Firefox).  

#### Global Parameters
![image](https://user-images.githubusercontent.com/17751686/128336117-d0a7a07d-1f85-469d-af53-374cd0847b49.png)
- `Chat User` : can be your stream account, or an account you created specifically for your bot. This parameter is required for Bot Commands.
- `Chat User Oauth Password String` : Follow the link to retrieve it. Connect either with your Twitch Account or your bot's Account. Is required to use Bot Commands.
- `Twitch Channel` : put in the channel name you want to connect the program to. (which channel's chat it will listen to)


#### Video Parameters
![image](https://user-images.githubusercontent.com/17751686/128336328-6d53f906-15c6-461f-ae5a-4f9194717ff9.png)
- `Pause Videos Command` : Command string to pause videos.
- `Resume Videos Command` : Command string to resume videos.
- `Global Video Delay` : Minimum delay between two videos in seconds.
- Videos:
  -  `Command` : Command that triggers the video.
  -  `File Name` : Name of the video file you've put in the `videos` folder.
  -  `Delay` : Minimum delay between two uses of this particular command, in seconds.
  -  `Volume` : Volume of the video, value between 0 and 1. ( decimals with a `.` )


#### Sound Parameters
![image](https://user-images.githubusercontent.com/17751686/128336399-e77b5d6d-79ba-4ccd-bd5f-5910a1410c3b.png)
- `Pause Sounds Command` : Command string to pause sounds.
- `Resume Sounds Command` : Command string to resume sounds.
- `Global Sound Delay` : Minimum delay between two sounds in seconds.
- Videos:
  -  `Command` : Command that triggers the sound.
  -  `File Name` : Name of the sound file you've put in the `sounds` folder.
  -  `Delay` : Minimum delay between two uses of this particular command, in seconds.
  -  `Volume` : Volume of the sound, value between 0 and 1. ( decimals with a `.` )


#### Bot Commands
![image](https://user-images.githubusercontent.com/17751686/128336451-b39d61c8-8271-49f7-97ff-da6ecd60abfd.png)
- Bot Commands
  -  `Command` : Command that triggers the bot message.
  -  `Ouput` : Output message that will be sent by the bot in the chat (using the `Chat User` parameter).

#### Export
Hit this button to download the new version of your `config.js` file, replace it inside your `js` folder.

## Add to OBS

Then as a last step, add the `myTwitchVideoAndSoundCommands.html` as an internet source in OBS:

![image](https://user-images.githubusercontent.com/17751686/127782022-b564ccdc-45b1-4810-9643-6fcc72134265.png)
