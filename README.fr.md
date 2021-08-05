# my-twitch-video-and-sound-commands
[Télécharger la dernière version](https://github.com/Revingbell/my-twitch-video-and-sound-commands/releases) (téléchargez l'archive de votre choix et extrayez la à l'emplacement de votre choix).  

*Lire ceci dans un autre langage : [English](README.md), [Français](README.fr.md).*

## Utilisation:

### Mettre à jour votre fichier de config de la v1.1.0
Mettez votre ancien fichier `config.js` dans le dossier `js`, puis ouvrez le fichier `updateConfigFile.html` avec le navigateur web de votre choix (Testé sur Chrome et Firefox).  
Une fenêtre de téléchargement vous proposera alors de télécharger la nouvelle version du fichier, enregistrez le en remplaçant l'ancienne version dans le dossier `js`.  
Vous pouvez maintenant commencer à utiliser la v1.2.0.

### Ajouter des fichiers vidéo et audio
Mettez tous vos fichiers vidéo dans le dossier `videos`, et tous les fichiers audio dans le dossier `sounds`.

### Paramétrer le programme
Ouvrez le fichier `myTwitchVideoAndSoundEditor.html` dans le navigateur web de votre choix (Testé sur Chrome et Firefox).  

#### Global Parameters (Paramètres globaux)
![image](https://user-images.githubusercontent.com/17751686/128336117-d0a7a07d-1f85-469d-af53-374cd0847b49.png)
- `Chat User` : Peut être votre nom de compte, ou le nom d'un compte de bot créé spécifiquement pour gérer les commandes. Ce paramètre est nécéssaire pour l'utlisation des `Bot Commands`.
- `Chat User Oauth Password String` : Suivez le lien pour récupérer la clé d'authentification. Connectez vous soit avec votre compte soit avec celui du bot. Ce paramètre est nécéssaire pour l'utlisation des `Bot Commands`.
- `Twitch Channel` : Renseignez le nom de la chaîne auquel le programme va s'appliquer (le chat de la chaîne que le programme va écouter).


#### Video Parameters (Paramètres Vidéo)
![image](https://user-images.githubusercontent.com/17751686/128336328-6d53f906-15c6-461f-ae5a-4f9194717ff9.png)
- `Pause Videos Command` : Chaîne de caractères de la commande pour mettre les vidéos en pause.
- `Resume Videos Command` : Chaîne de caractères de la commande pour redémarrer les vidéos.
- `Global Video Delay` : Délai minimum entre deux vidéos en secondes.
- Videos:
  -  `Command` : Commande qui déclenche la vidéo.
  -  `File Name` : Nom du fichier associé dans le dossier `videos`.
  -  `Delay` : Délai minimum entre deux utilisation de cette commande, en secondes.
  -  `Volume` : Volume de la vidéo, valeur comprise entre 0 et 1. ( utilisez le `.` pour délimiter les décimales )


#### Sound Parameters (Paramètres Audio)
![image](https://user-images.githubusercontent.com/17751686/128336399-e77b5d6d-79ba-4ccd-bd5f-5910a1410c3b.png)
- `Pause Sounds Command` : Chaîne de caractères de la commande pour mettre les sons en pause.
- `Resume Sounds Command` : Chaîne de caractères de la commande pour redémarrer les sons.
- `Global Sound Delay` : Délai minimum entre deux sons en secondes.
- Videos:
  -  `Command` : Commande qui déclenche le son.
  -  `File Name` : Nom du fichier associé dans le dossier `sounds`.
  -  `Delay` : Délai minimum entre deux utilisation de cette commande, en secondes.
  -  `Volume` : Volume du son, valeur comprise entre 0 et 1. ( utilisez le `.` pour délimiter les décimales )


#### Bot Commands (Commandes du bot)
![image](https://user-images.githubusercontent.com/17751686/128336451-b39d61c8-8271-49f7-97ff-da6ecd60abfd.png)
- Bot Commands
  -  `Command` : Chaîne de caractères de la commande pour déclencher la réponse du bot.
  -  `Ouput` : Réponse du bot à cette commande dans le chat. ( utilise les paramètres globaux `Chat User`)

#### Export (Exporter)
Appuyez sur ce bouton une fois toutes vos modifications réalisées pour télécharger la nouvelle version de votre fichier `config.js`, et remplacez le dans le dossier`js`.

## Add to OBS (Ajouter à OBS)
Dernière étape, ajoutez le fichier `myTwitchVideoAndSoundCommands.html` comme source web dans OBS:

![image](https://user-images.githubusercontent.com/17751686/127782022-b564ccdc-45b1-4810-9643-6fcc72134265.png)
