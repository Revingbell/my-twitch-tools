# My Twitch Commands Tool
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
Ouvrez le fichier `myCommandEditor.html` dans le navigateur web de votre choix (Testé sur Chrome et Firefox).  

#### Global Parameters (Paramètres globaux)
![image](https://user-images.githubusercontent.com/17751686/128506855-18990827-33b2-4125-b309-81b9c533c354.png)
- `Twitch Channel` : Nom de la chaîne. Ce programme ecoutera le chat de cette chaîne pour y repérer les commandes commençant par un `!`. Obligatoire pour le fonctionnement de ce programme.
- `Chat User` : Nom de l'utilisateur (peut être votre nom de compte, ou le nom d'un compte de bot créé spécifiquement à cet effet) qui écrira dans le chat. Ce paramètre n'est requis que pour l'utlisation des `Bot Commands`.
- `Oauth Password String` : Connectez vous au lien: [Obtenir votre clé d'authentification](https://twitchapps.com/tmi/) avec le compte spécifié comme `Chat User` pour récupérer sa clé d'authentification. Ne fournissez jamais cette clé à personne d'autre. En cas de doute, retourner sur le lien pour générer une nouvelle clé et invalider l'ancienne. Ce paramètre n'est requis que pour l'utlisation des `Bot Commands`.

#### Video Parameters (Paramètres Vidéo)
![image](https://user-images.githubusercontent.com/17751686/128507019-b0af7871-7d57-4e38-8648-6fd0b10119eb.png)
- `Pause Videos Command` : Chaîne de caractères de la commande pour mettre les vidéos en pause. Cette commande ne répondra qu'au propriétaire de la chaîne.
- `Resume Videos Command` : Chaîne de caractères de la commande pour redémarrer les vidéos. Cette commande ne répondra qu'au propriétaire de la chaîne.
- `Global Video Delay` : Délai minimum entre deux vidéos en secondes. Si une vidéo est d'une durée plus longue que ce délai, sa durée sera utilisée à la place de cette valeur.
- Videos:
  -  `Command` : Commande qui déclenche la vidéo.
  -  `File Name` : Nom du fichier associé dans le dossier `videos`.
  -  `Delay` : Délai minimum entre deux utilisation de cette commande, en secondes.
  -  `Volume` : Volume de la vidéo, valeur comprise entre 0 et 1. ( utilisez le `.` pour délimiter les décimales )

#### Sound Parameters (Paramètres Audio)
![image](https://user-images.githubusercontent.com/17751686/128507126-82b62ca4-201f-497b-a998-def265c19a38.png)
- `Pause Sounds Command` : Chaîne de caractères de la commande pour mettre les sons en pause. Cette commande ne répondra qu'au propriétaire de la chaîne.
- `Resume Sounds Command` : Chaîne de caractères de la commande pour redémarrer les sons. Cette commande ne répondra qu'au propriétaire de la chaîne.
- `Global Sound Delay` : Délai minimum entre deux sons en secondes. Si un son est d'une durée plus longue que ce délai, sa durée sera utilisée à la place de cette valeur.
- Videos:
  -  `Command` : Commande qui déclenche le son.
  -  `File Name` : Nom du fichier associé dans le dossier `sounds`.
  -  `Delay` : Délai minimum entre deux utilisation de cette commande, en secondes.
  -  `Volume` : Volume du son, valeur comprise entre 0 et 1. ( utilisez le `.` pour délimiter les décimales )

#### Bot Commands (Commandes du bot)
![image](https://user-images.githubusercontent.com/17751686/128507225-81f71500-2bd9-45a2-9354-13fde863f8f0.png)
- Bot Commands
  -  `Command` : Chaîne de caractères de la commande pour déclencher la réponse du bot.
  -  `Ouput` : Réponse du bot à cette commande dans le chat. L'utilisation de '{username}' comme variable à laquelle sera substitué le nom de l'utilisateur ayant lancé la commande est possible.

#### Export (Exporter)
Appuyez sur ce bouton une fois toutes vos modifications réalisées pour télécharger la nouvelle version de votre fichier `config.js`, et remplacez le dans le dossier`js`.

## Add to OBS (Ajouter à OBS)
Dernière étape, ajoutez le fichier `myCommandTool.html` comme source web dans OBS:

![image](https://user-images.githubusercontent.com/17751686/127782022-b564ccdc-45b1-4810-9643-6fcc72134265.png)
