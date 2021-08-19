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
> :warning: **Les fichiers vidéo avec une extension en `.mov` ne fonctionnent pas**

### Paramétrer le programme
Ouvrez le fichier `myCommandEditor.html` dans le navigateur web de votre choix (Testé sur Chrome et Firefox).  

#### Paramètres Globaux
![image](https://user-images.githubusercontent.com/17751686/130131488-1fc2e569-1fd7-470e-b5de-280b9478e79e.png)
- `Chaîne Twitch` : Nom de la chaîne. Ce programme ecoutera le chat de cette chaîne pour y repérer les commandes commençant par un `!`. Obligatoire pour le fonctionnement de ce programme.
- `Utilisateur du Chat` : Nom de l'utilisateur (peut être votre nom de compte, ou le nom d'un compte de bot créé spécifiquement à cet effet) qui écrira dans le chat. Ce paramètre n'est requis que pour l'utlisation des `Bot Commands`.
- `Clé d'authentification Oauth` : Connectez vous au lien: [Obtenir votre clé d'authentification](https://twitchapps.com/tmi/) avec le compte spécifié comme `Chat User` pour récupérer sa clé d'authentification. Ne fournissez jamais cette clé à personne d'autre. En cas de doute, retourner sur le lien pour générer une nouvelle clé et invalider l'ancienne. Ce paramètre n'est requis que pour l'utlisation des `Bot Commands`.

#### Paramètres Vidéo
![image](https://user-images.githubusercontent.com/17751686/130131528-2a0e98ac-c0ae-4847-ad03-76e6787bff4c.png)
- `Commande de mise en Pause des Vidéos` : Chaîne de caractères de la commande pour mettre les vidéos en pause. Cette commande ne répondra qu'au propriétaire de la chaîne.
- `Commande de Reprise des Vidéos` : Chaîne de caractères de la commande pour redémarrer les vidéos. Cette commande ne répondra qu'au propriétaire de la chaîne.
- `Délai Global des Vidéos` : Délai minimum entre deux vidéos en secondes. Si une vidéo est d'une durée plus longue que ce délai, sa durée sera utilisée à la place de cette valeur.
- Videos:
  -  `Commande` : Commande lue après un ! qui déclenche la vidéo.
  -  `Nom du fichier` : Nom du fichier associé dans le dossier `videos`.
  -  `Délai` : Délai minimum entre deux utilisation de cette commande, en secondes.
  -  `Volume` : Volume de la vidéo, valeur comprise entre 0 et 1. ( utilisez le `.` pour délimiter les décimales )

#### Paramètres Son
![image](https://user-images.githubusercontent.com/17751686/130131567-a3ef2e5d-b990-49d3-ae2c-0fafa61d746e.png)
- `Commande de mise en Pause des Sons` : Chaîne de caractères de la commande pour mettre les sons en pause. Cette commande ne répondra qu'au propriétaire de la chaîne.
- `Commande de Reprise des Sons` : Chaîne de caractères de la commande pour redémarrer les sons. Cette commande ne répondra qu'au propriétaire de la chaîne.
- `Délai Global des Sons` : Délai minimum entre deux sons en secondes. Si un son est d'une durée plus longue que ce délai, sa durée sera utilisée à la place de cette valeur.
- Sons:
  -  `Commande` : Commande lue après un ! qui déclenche le son.
  -  `Nom du fichier` : Nom du fichier associé dans le dossier `sounds`.
  -  `Délai` : Délai minimum entre deux utilisation de cette commande, en secondes.
  -  `Volume` : Volume du son, valeur comprise entre 0 et 1. ( utilisez le `.` pour délimiter les décimales )

#### Commandes du bot
![image](https://user-images.githubusercontent.com/17751686/130131609-13c9b762-db61-4fd0-8123-71fe59e6ec9e.png)
- `Afficher toutes les Commandes` : Cette commande demandera au bot d'écrire la liste des commandes disponibles dans le chat en (au moins) 3 messages distincts ( videos / sons / commandes du bot).
- Bot Commands
  -  `Commande` : Chaîne de caractères de la commande pour déclencher la réponse du bot.
  -  `Sortie Chat` : Réponse du bot à cette commande dans le chat. L'utilisation de '{username}' comme variable à laquelle sera substitué le nom de l'utilisateur ayant lancé la commande est possible. Si vous souhaitez des commandes multi parties, il vous suffit d'utiliser la même chaîne de caractère remplaçable dans la chaîne de la commande et dans le message du bot. i.e. "$1" ou "{a}" etc... ( voir les exemples pré-remplis )

#### Langage
Choisissez l'un des langages disponibles pour l'interface:
- Anglais
- Français

#### Exporter
Appuyez sur ce bouton une fois toutes vos modifications réalisées pour télécharger la nouvelle version de votre fichier `config.js`, et remplacez le dans le dossier`js`.

## Ajouter à OBS
Dernière étape, ajouter une source web dans OBS:

![image](https://user-images.githubusercontent.com/17751686/129710382-8d28db74-6533-483c-9a7f-4137b4b3692e.png)

Cochez la case `Fichier local`, puis cliquez sur Parcourir et rendez vous là où vous avez dézippé l'application et choisissez le fichier `myCommandTool.html` comme source.

![image](https://user-images.githubusercontent.com/17751686/129711175-ba27df2a-8463-4950-9f2c-0e532b062b95.png)

N'oubliez pas de cocher la case `Désactiver la source quand elle n'est pas visible` ou l'application continuera de tourner quand vous changez de scène ce qui pourrait causer des déclenchements simultanés de plusieurs instances des commandes (sons / videos / commandes du bot).

![image](https://user-images.githubusercontent.com/17751686/129713447-1808933f-a8fa-4579-b7dc-da84cd497e3f.png)
