# My Twitch Commands Tool
[Télécharger la dernière version](https://github.com/Revingbell/my-twitch-video-and-sound-commands/releases) (téléchargez l'archive de votre choix et extrayez la à l'emplacement de votre choix).  

*Lire ceci dans un autre langage : [English](README.md), [Français](README.fr.md).*

# Index
- [Index](#index)
- [Utilisation](#utilisation)
  - [Ajouter des fichiers](#ajouter-des-fichiers-vidéo-et-audio)
  - [Paramétrer le programme](#paramétrer-le-programme)
- [Ajouter à OBS](#ajouter-à-obs)
    - [Command Tools](#command-tools)
    - [Chat Box](#chat-box)
# Utilisation

## Ajouter des fichiers vidéo et audio
Mettez tous vos fichiers vidéo dans le dossier `videos`, et tous les fichiers audio dans le dossier `sounds`.
> :warning: **Les fichiers vidéo avec une extension en `.mov` ne fonctionnent pas**

## Paramétrer le programme
Ouvrez le fichier `myCommandEditor.html` dans le navigateur web de votre choix (Testé sur Chrome et Firefox).  

### Paramètres Globaux
![image](https://user-images.githubusercontent.com/17751686/130131488-1fc2e569-1fd7-470e-b5de-280b9478e79e.png)
- `Chaîne Twitch` : Nom de la chaîne. Ce programme ecoutera le chat de cette chaîne pour y repérer les commandes commençant par un `!`. Obligatoire pour le fonctionnement de ce programme.
- `Utilisateur du Chat` : Nom de l'utilisateur (peut être votre nom de compte, ou le nom d'un compte de bot créé spécifiquement à cet effet) qui écrira dans le chat. Ce paramètre n'est requis que pour l'utlisation des `Bot Commands`.
- `Clé d'authentification Oauth` : Connectez vous au lien: [Obtenir votre clé d'authentification](https://twitchapps.com/tmi/) avec le compte spécifié comme `Chat User` pour récupérer sa clé d'authentification. Ne fournissez jamais cette clé à personne d'autre. En cas de doute, retourner sur le lien pour générer une nouvelle clé et invalider l'ancienne. Ce paramètre n'est requis que pour l'utlisation des `Bot Commands`.

### Paramètres Vidéo
![image](https://user-images.githubusercontent.com/17751686/130762594-8b424941-ceb8-4b11-b947-5f693bb85705.png)
- `Commande de mise en Pause des Vidéos` : Chaîne de caractères de la commande pour mettre les vidéos en pause. Cette commande ne répondra qu'au propriétaire de la chaîne.
- `Commande de Reprise des Vidéos` : Chaîne de caractères de la commande pour redémarrer les vidéos. Cette commande ne répondra qu'au propriétaire de la chaîne.
- `Délai Global des Vidéos` : Délai minimum entre deux vidéos en secondes. Si une vidéo est d'une durée plus longue que ce délai, sa durée sera utilisée à la place de cette valeur.
- `Message du délai` : Message qui s'affichera lorsqu'une commande est utilisée alors que son délai n'est pas encore écoulé. Utilisez {videoDelay} comme variable qui sera remplacée par les secondes restantes jusqu'à la prochaine utilisation, et {videoCommand} omme variable pour le nom de la commande. 
- Videos:
  -  `Commande` : Commande lue après un ! qui déclenche la vidéo.
  -  `Nom du fichier` : Nom du fichier associé dans le dossier `videos`.
  -  `Droits` : Qui peut utiliser cette commande. (Streamer·euse > Modérateur·ice + Streamer·euse > VIP + précédents > Tout le monde) 
  -  `Délai` : Délai minimum entre deux utilisation de cette commande, en secondes.
  -  `Volume` : Volume de la vidéo, valeur comprise entre 0 et 1. ( utilisez le `.` pour délimiter les décimales )

### Paramètres Son
![image](https://user-images.githubusercontent.com/17751686/130762780-d58294f7-4793-444a-b8c9-5b3669564afd.png)
- `Commande de mise en Pause des Sons` : Chaîne de caractères de la commande pour mettre les sons en pause. Cette commande ne répondra qu'au propriétaire de la chaîne.
- `Commande de Reprise des Sons` : Chaîne de caractères de la commande pour redémarrer les sons. Cette commande ne répondra qu'au propriétaire de la chaîne.
- `Délai Global des Sons` : Délai minimum entre deux sons en secondes. Si un son est d'une durée plus longue que ce délai, sa durée sera utilisée à la place de cette valeur.
- `Message du délai` : Message qui s'affichera lorsqu'une commande est utilisée alors que son délai n'est pas encore écoulé. Utilisez {soundDelay} comme variable qui sera remplacée par les secondes restantes jusqu'à la prochaine utilisation, et {soundCommand} omme variable pour le nom de la commande.
- Sons:
  -  `Commande` : Commande lue après un ! qui déclenche le son.
  -  `Nom du fichier` : Nom du fichier associé dans le dossier `sounds`.
  -  `Droits` : Qui peut utiliser cette commande. (Streamer·euse > Modérateur·ice + Streamer·euse > VIP + précédents > Tout le monde) 
  -  `Délai` : Délai minimum entre deux utilisation de cette commande, en secondes.
  -  `Volume` : Volume du son, valeur comprise entre 0 et 1. ( utilisez le `.` pour délimiter les décimales )

### Commandes du bot
![image](https://user-images.githubusercontent.com/17751686/130763148-aa6ad67f-968b-4d21-a1f5-15074c4df6d5.png)
- `Commande récapitulatrice des vidéos` : Cette commande fera écrire au bot la liste des commandes de vidéos disponibles à l'utilisateur.
- `Commande récapitulatrice des sons` : Cette commande fera écrire au bot la liste des commandes de sons disponibles à l'utilisateur.
- `Commande récapitulatrice des commandes du bot` : Cette commande fera écrire au bot la liste des commandes de bot disponibles à l'utilisateur.
- Bot Commands
  -  `Commande` : Chaîne de caractères de la commande pour déclencher la réponse du bot.
  -  `Sortie Chat` : Réponse du bot à cette commande dans le chat. L'utilisation de '{username}' comme variable à laquelle sera substitué le nom de l'utilisateur ayant lancé la commande est possible. Si vous souhaitez des commandes multi parties, il vous suffit d'utiliser la même chaîne de caractère remplaçable dans la chaîne de la commande et dans le message du bot. i.e. "$1" ou "{a}" etc... ( voir les exemples pré-remplis )
  -  `Droits` : Qui peut utiliser cette commande. (Streamer·euse > Modérateur·ice + Streamer·euse > VIP + précédents > Tout le monde) 

### Langage
Choisissez l'un des langages disponibles pour l'interface:
- Anglais
- Français

### Exporter
Appuyez sur ce bouton une fois toutes vos modifications réalisées pour télécharger la nouvelle version de votre fichier `config.js`, et remplacez le dans le dossier`js`.

# Ajouter à OBS

## Command Tools
Dernière étape, ajouter une source web dans OBS:

![image](https://user-images.githubusercontent.com/17751686/129710382-8d28db74-6533-483c-9a7f-4137b4b3692e.png)

Cochez la case `Fichier local`, puis cliquez sur Parcourir et rendez vous là où vous avez dézippé l'application et choisissez le fichier `myCommandTool.html` comme source.

![image](https://user-images.githubusercontent.com/17751686/129711175-ba27df2a-8463-4950-9f2c-0e532b062b95.png)

N'oubliez pas de cocher la case `Désactiver la source quand elle n'est pas visible` ou l'application continuera de tourner quand vous changez de scène ce qui pourrait causer des déclenchements simultanés de plusieurs instances des commandes (sons / videos / commandes du bot).

![image](https://user-images.githubusercontent.com/17751686/129713447-1808933f-a8fa-4579-b7dc-da84cd497e3f.png)

## Chat Box
Une Chat box light est aussi disponible pour utilisation en ajoutant en source le fichier `myChatBox.html` de la même manière que pour ajouter la source pour les commandes.
