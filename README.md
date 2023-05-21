# Getting Started with Create React App

Site de naturopathie de Cindy  
Hébergé sur AWS par Webflow (18$/mois)  
Migration sur Firebase (0$)  
[site hébergé de Cindy](https://cindy-naturopathe.com/)  

## Formulaire

Pour le formulaire de contact, utilisation de l'API `emailjs`  
Connexion sur `https://dashboard.emailjs.com`  
nom utilisateur : `contact@cindy-naturopathe.com`  
mot de passe : saisie automatique chrome (compte davysebbah@gmail.com)  
<br />
Le principe est de s'envoyer un mail à soi-même.  
Les champs formulaires sont récupérés par le plugin `emailjs` puis envoyés depuis l'adresse mail `contact@cindy-naturopathe.com` vers la même adresse.  
L'API demande 3 clés :  
*La clé publique qu'on trouve dans les paramètres du compte emailjs  
*La clé du template qu'on a créé sur la plateforme API  
*La clé de service qui est la clé du service utilisé pour l'envoi du mail  
<br />
Dans notre cas, OVH étant le gestionnaire de notre adresse mail, il faut se tourner vers le service SMTP et trouver les valeurs `host` ainsi que `port`. Les paramètres du serveur SMTP, recours au site https://www.getmailbird.com/setup/fr/access-ovh-net-via-imap-smtp  
Serveur SMTP de Ovh.net : `ssl0.ovh.net`  
Port SMTP : `465`  
Sécurité SMTP : `SSL`  
Nom d'utilisateur SMTP : adresse mail de connexion à OVH  
Mot de passe SMTP : celui de connexion à OVH   

## Hébergement  

Firebase   
[site hébergé de Cindy](https://cindy-naturopathe.com/)  
<br/>
Dans .firebaserc :   
"default": "naturopathie-preprod", avec la commande 
`firebase deploy `    
"prod":"cindy-naturopathie" avec la commande `firebase deploy --project cindy-naturopathie ` 