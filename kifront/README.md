Prerequis
---------

-   Node.js

-   Angular Cli

-   Installer l'application iHNI en local

-   Installer l'application kiback en local

Installation
------------

-   Cloner le dépôt sur votre machine locale.

-   Installer les dépendances, depuis le répertoire du projet :

    -   `npm install`

Lancer l'application sur machine local
======================================

-   Lancer Ihni en local

-   Lancer Kiback en local

-   Se connecter à Ihni sur la machine locale :
    [http://localhost:8000/login/](http://localhost:8000/login)

-   Lancer l'application Ki avec le serveur embarqué depuis le répertoire du
    projet :

    -   `npm start` ou `ng serve`

-   Pour commencer la navigation <http://localhost:4200/>

Déployer sur serveur CentOS
===========================

-   Avant chaque déploiement penser à vérifier :

    -   Les paramètres du fichier de propriétés
        ['src/environments/environments.ts'](src/environments/environments.ts),
        et,

    -   En fonction du profil de déploiement :

        -   Avec profil dev :
            ['src/environments/environments.prod.ts'](src/environments/environments.prod.ts),
            et,

        -   Avec profil production :
            ['src/environments/environments.prod2.ts'](src/environments/environments.prod2.ts)

Méthode par SFTP
----------------

Le dossier 'dist' est générer avec CLI sur la machine locale. Avec un programme
permettant la copie sécurisée de fichiers entre un ordinateur local et le
serveur distant, il faut transférer le dossier ‘dist’.

### Générer le build local

-   Se placer dans le répertoire de Kifront.

-   Générer le build avec profil dev :

    -   `ng build --configuration=production --base-href=./
        --output-hashing=all`

-   Générer le build avec profil production :

    -   `ng build --configuration=prod2 --base-href=./ --output-hashing=all`

-   Générer le build avec profil local :

    -   `ng build  --base-href=./`

-   Alternativement en utilisant le Angular le cli local :

    -   `npx ng build --configuration=production --base-href=./
        --output-hashing=all`

    -   `npx ng build --configuration=prod2 --base-href=./ --output-hashing=all`

-   Le projet est généré dans le dossier '/dist'

#### Procédure de déploiement

-   Transférer le dossier 'dist' vers le home administrateur avec WinSCP.

-   Désactiver le serveur Tomcat :

    -   `sudo service tomcat stop`

-   Supprimer l'ancien dossier :

    -   `sudo rm -r /opt/tomcat/webapps/ki`

-   Copier le dossier présent dans le home administrateur vers
    /opt/tomcat/webapps :

    -   `sudo mv dist /opt/tomcat/webapps/ki`

-   Relancer Tomcat :

    -   `sudo service tomcat start`

Déployer directement depuis le serveur
--------------------------------------

### Récupérer la dernière version

-   Se placer dans le répertoire du projet

    -   `cd /mnt/resource/Cube_KI`

-   Récupérer la dernière version du projet

    -   Sur la version stable :

        -   `git pull origin master`

    -   Sur la version en developpement :

        -   `git pull origin develop`

### Déploiement PAS A PAS

#### Générer le build

-   Se placer dans le répertoire du projet front

    -   `cd /mnt/resource/Cube_KI/kifront`

-   Si de nouvelles dépendances sont nécessaires :

    -   `sudo npm install --unsafe-perm`

    -   `npm install`

-   Générer le build (dossier 'dist') :

    -   Générer le build avec profil dev :

        -   `ng build --configuration=production --base-href=./
            --output-hashing=all`

    -   Générer le build avec profil prod :

        -   `ng build --configuration=prod2 --base-href=./ --output-hashing=all`

#### Procédure de déploiement

-   Désactiver le serveur tomcat :

    -   `sudo service tomcat stop`

-   Supprimer l'ancien dossier :

    -   `sudo rm -r /opt/tomcat/webapps/ki`

-   Copier le dossier 'dist' géneré vers le dossier contenant les Apps Tomcat
    '/opt/tomcat/webapps' :

    -   `sudo mv dist /opt/tomcat/webapps/ki`

-   Relancer Tomcat :

    -   `sudo service tomcat start`

### Déploiement rapide

-   Commande All-In-One pour le dev :

    -   `cd /mnt/resource/Cube_KI/kifront && ng build --configuration=production
        --base-href=./ --output-hashing=all && sudo service tomcat stop ; sudo
        rm -r /opt/tomcat/webapps/ki ; sudo mv dist /opt/tomcat/webapps/ki &&
        sudo service tomcat start`

-   Commande All-In-One pour la prod :

    -   `cd /mnt/resource/Cube_KI/kifront && ng build --configuration=prod2
        --base-href=./ --output-hashing=all && sudo service tomcat stop && sudo
        rm -r /opt/tomcat/webapps/ki ; sudo mv dist /opt/tomcat/webapps/ki &&
        sudo service tomcat start`
