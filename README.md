My Twich Command Tool

[Download Latest Release](https://github.com/Revingbell/my-twitch-video-and-sound-commands/releases) (download the archive of your choice and unpack it where you want in your filesystem).

*Read this in another language: [English](README.md), [Français](README.fr.md).*

# Index
- [Index](#index)
- [Usage](#usage)
  - [Add Files](#add-video-and-sound-files)
  - [Parametrize the program](#parametrize-the-program)
    - [Global Parameters](#global-parameters)
    - [Video Parameters](#video-parameters)
    - [Sound Parameters](#sound-parameters)
    - [Bot Commands](#bot-commands)
    - [Language](#language)
    - [Export](#export)
- [Add to OBS](#add-to-obs)
    - [Command Tools](#command-tools)
    - [Chat Box](#chat-box)

# Usage

## Add video and sound files
Put all video files in the `videos` folder, and all sounds in the `sounds` folder.
> :warning: **Video files with `.mov` extension do not work**

## Parametrize the program
Open the file `myCommandEditor.html` with your preferred web browser (Tested on Firefox).  

### Global Parameters
![image](https://user-images.githubusercontent.com/17751686/130130392-c9b394d9-19b2-42ee-928a-669d251544c0.png)
- `Twitch Channel` : Name of the channel. The program will look for commands starting with a ! in this channel's chat.
Mandatory for this program to work.
- `Chat User` : Name of the user (you or a bot account created specifically) that will write in chat.
Required only for `Bot Commands` to work.
- `Oauth Password String` : Connect to the link: [Get your oauth password key](https://twitchapps.com/tmi/) with the account specified as 'Chat User' to get the authentication key. Never provide this key to anyone. In case of doubt, go back to the link to generate a new one and invalidate the old one. Required only for `Bot Commands` to work.

### Video Parameters
![image](https://user-images.githubusercontent.com/17751686/130762507-0787ec45-adef-40bc-9206-8b9c1f39462c.png)
- `Pause Videos Command` : Command string to pause videos. This command will only respond to the channel owner. 
- `Resume Videos Command` : Command string to resume videos. This command will only respond to the channel owner. 
- `Global Video Delay` : Minimum delay between two videos in seconds. If any video has a longer duration than this delay, its duration will be used instead of this value. 
- `Delay Message` : Delay message to be displayed when a command is used while in delay. Use {videoDelay} as a variable to be replaced by the number of seconds until next available use, and {videoCommand} as a variable for the command name.
- Videos:
  -  `Command` : Command that triggers the video.
  -  `File Name` : Name of the video file you've put in the `videos` folder.
  -  `Rights` : Who can use this command. (Streamer > Moderator + Streamer > VIP + all previous ones > Everyone)
  -  `Delay` : Minimum delay between two uses of this particular command, in seconds.
  -  `Volume` : Volume of the video, value between 0 and 1. ( decimals with a `.` )

### Sound Parameters
![image](https://user-images.githubusercontent.com/17751686/130762905-5eb10ae7-25e7-4c33-b35d-33c99968e720.png)
- `Pause Sounds Command` : Command string to pause sounds. This command will only respond to the channel owner. 
- `Resume Sounds Command` : Command string to resume sounds. This command will only respond to the channel owner. 
- `Global Sound Delay` : Minimum delay between two sounds in seconds. If any video has a longer duration than this delay, its duration will be used instead of this value.
- `Delay Message` : Delay message to be displayed when a command is used while in delay. Use {soundDelay} as a variable to be replaced by the number of seconds until next available use, and {soundCommand} as a variable for the command name.
- Videos:
  -  `Command` : Command that triggers the sound (preceded by a !).
  -  `File Name` : Name of the sound file you've put in the `sounds` folder.
  -  `Rights` : Who can use this command. (Streamer > Moderator + Streamer > VIP + all previous ones > Everyone)
  -  `Delay` : Minimum delay between two uses of this particular command, in seconds.
  -  `Volume` : Volume of the sound, value between 0 and 1. ( decimals with a `.` )


### Bot Commands
![image](https://user-images.githubusercontent.com/17751686/130763071-637a86f8-5ebb-4baf-a873-b6887c79c8ec.png)
- `Display All Video Commands` : This command will display all video commands available to the user in the chat.
- `Display All Sound Commands` : his command will display all sound commands available to the user in the chat.
- `Display All Bot Commands` : This command will display all bot commands available to the user in the chat.
- Bot Commands
  -  `Command` : Command that triggers the bot message.
  -  `Ouput` : Message the bot will send after the command is used. You can use '{username}' as a variable that will be substituted for the name of the user sending the command. If you want to make multipart commands, just use the same replaceable string inside the Command String and the Command Output. i.e. "$1" or "{a}" etc... ( see pre filled examples ).
  -  `Rights` : Who can use this command. (Streamer > Moderator + Streamer > VIP + all previous ones > Everyone)

### Language
Choose one of the available Languages
- English
- French

### Export
Hit this button to download the new version of your `config.js` file, replace it inside your `js` folder.

# Add to OBS

## Command Tools
Then as a last step, add a Browser source in OBS:

![image](https://user-images.githubusercontent.com/17751686/129710382-8d28db74-6533-483c-9a7f-4137b4b3692e.png)

Check the "Local File" box, then go to where you've unzipped the app and choose the `myCommandTool.html` file as a source.

![image](https://user-images.githubusercontent.com/17751686/129711175-ba27df2a-8463-4950-9f2c-0e532b062b95.png)

Don't forget to check the `Shutdown source when not visible` box or the app will still function when you change scenes and you'll get duplicate sounds/videos/bot commands.

![image](https://user-images.githubusercontent.com/17751686/129713475-62ec41e0-3e83-4bdd-bdce-08a2bbb6bb93.png)

## Chat Box
A light chat box is also available for use by adding the file `myChatBox.html` as a source the same way as the commands.
