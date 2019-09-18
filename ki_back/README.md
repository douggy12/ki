Prérequis
=========

-   Java - 1.8.x

-   Mysql - 5.x.x

-   Maven 3.x.x

Installation
============

-   Cloner le projet depuis le repo git

-   Créer une base de données en local avec /dump.sql

-   Modifier les paramètres suivant du fichier de propriété en local:
    [src/main/resources/application-local.properties](src/main/resources/application-local.properties)

    -   spring.datasource.url=jdbc:mysql://localhost/

    -   spring.datasource.username= xxx

    -   spring.datasource.password= xxx

Lancer l'application sur machine local
======================================

-   La solution la plus simple est d'utiliser le plugin Maven pour lancer
    l'application sur un Tomcat de manière embarquée.

-   Se placer dans le dossier source :

    -   `cd ki_kack`
 
-   utiliser cette commande (Profil dev par
    défaut) :

    -   `mvn spring-boot:run`

-   Pour choisir un autre profil :

    -   Lancer avec le profil production :

        -   `mvn spring-boot:run
            -Drun.jvmArguments="-Dspring.profiles.active=prod"`

    -   Lancer avec le profil dev :

        -   `mvn spring-boot:run
            -Drun.jvmArguments="-Dspring.profiles.active=dev"`

    -   Lancer avec le profil local :

        -   `mvn spring-boot:run
            -Drun.jvmArguments="-Dspring.profiles.active=local"`

-   Alternativement vous pouvez lancer l'application en debug

    -   `mvn spring-boot:run -Xdebug
        -Xrunjdwp:transport=dt_socket,server=y,suspend=y,address=5005`

-   Le server va démarrer sur <http://localhost:8080>

Déployer sur serveur CentOS
===========================

Avant de déployer
-----------------

-   Avant chaque déploiement penser à vérifier :

    -   Les paramètres du fichiers de propriétés
        ['application.properties'](src/main/resources/application.properties),
        et,

    -   En fonction du profil de déploiement :

        -   Avec profil local :
            ['application-local.properties'](src/main/resources/application-local.properties),
            et,

        -   Avec profil dev :
            ['application-dev.properties'](src/main/resources/application-dev.properties),
            et,

        -   Avec profil production :
            ['application-prod.properties'](src/main/resources/application-prod.properties)

-   Penser à consulter les Logs après chaque déploiement :

    -   `cat /opt/tomcat/logs/catalina.out`

    -   `tail -f -n 300 /opt/tomcat/logs/catalina.out`

Connection serveur
------------------

-   Login : administrateur

-   Le client PuTTY est utilisé pour se connecter en SSH

-   Le client SFTP/SCP WinSCP permet de se connecter aux serveurs SSH pour
    transférer des fichiers.

Méthode par SFTP
----------------

Le WAR kiback.war est générer avec Maven sur la machine local. Avec un programme
permettant la copie sécurisée de fichiers entre un ordinateur local et un
ordinateur distant, il faut transférer le war

### Générer le WAR

-   Se placer dans le dossier source :

    -   `cd ki_kack`




-   Générer le WAR en fonction du profil :

    -   Générer le fichier WAR avec profil local :

        -   `mvn -Plocal package -Dmaven.test.skip=true`

    -   Générer le fichier WAR avec profil production :

        -   `mvn -Pprod package -Dmaven.test.skip=true`

    -   Générer le fichier WAR avec profil dev :

        -   `mvn -Pdev package -Dmaven.test.skip=true`
        
-   Dans le dossier '/target' il y a deux fichiers générés

    -   kiback.war

    -   kiback.war.original 

-   kiback.war embarque un Tomcat donc il vaut mieux utiliser le
    kiback.war.original

### Procédure de déploiement

-   Transférer le fichier kiback.war vers le home administrateur avec WinSCP.

-   Désactiver le serveur Tomcat :

    -   `sudo service tomcat stop`

-   Supprimer l'ancien dossier de l'API :

    -   `sudo rm -r /opt/tomcat/webapps/kiback`

-   Supprimer l'ancien dossier de l'API :

    -   `sudo rm /opt/tomcat/webapps/kiback.war`

-   Copier le fichier WAR présent dans le home administrateur vers
    /opt/tomcat/webapps :

    -   `sudo mv kiback.war.original /opt/tomcat/webapps/kiback.war`

-   Relancer Tomcat :

    -   `sudo service tomcat start`

-   All-In-One :

    -   `sudo service tomcat stop && sudo rm -r /opt/tomcat/webapps/kiback &&
        sudo rm /opt/tomcat/webapps/kiback.war && mv kiback.war.original
        /opt/tomcat/webapps/kiback.war && sudo service tomcat start`

Déployer directement depuis le serveur
--------------------------------------

### Récupérer la dernière version

-   Se placer dans le répertoire du projet

    -   `cd /mnt/resource/Cube_KI`

-   Récupérer la dernière version du projet

    -   Sur la version stable :

        -   `git pull origin/master`

    -   Sur la version en developpement :

        -   `git pull origin/develop`

### Déploiement rapide

-   Commande All-In-One pour le dev :

    -   `cd /mnt/resource/Cube_KI/ki_back &&  mvn -Pdev package
        -Dmaven.test.skip=true && sudo service tomcat stop && sudo rm -r
        /opt/tomcat/webapps/kiback && sudo rm /opt/tomcat/webapps/kiback.war &&
        mv target/kiback.war.original /opt/tomcat/webapps/kiback.war && sudo
        service tomcat start`

-   Commande All-In-One pour la prod :

    -   `cd /mnt/resource/Cube_KI/ki_back && mvn -Pprod package
        -Dmaven.test.skip=true && sudo service tomcat stop && sudo rm -r
        /opt/tomcat/webapps/kiback && sudo rm /opt/tomcat/webapps/kiback.war &&
        mv target/kiback.war.original /opt/tomcat/webapps/kiback.war && sudo
        service tomcat start`

### Déploiement PAS A PAS

#### Générer le WAR

-   Se placer dans le répertoire du projet

    -   `cd /mnt/resource/Cube_KI/ki_back`

-   Générer le WAR en fonction du profil :

    -   Générer le fichier WAR avec profil production :

        -   `mvn -Pprod package -Dmaven.test.skip=true`

    -   Générer le fichier WAR avec profil dev :

        -   `mvn -Pdev package -Dmaven.test.skip=true`

#### Procédure de déploiement

-   Désactiver le serveur Tomcat :

    -   `sudo service tomcat stop`

-   Suprimer l'ancien dossier de l'API :

    -   `sudo rm -r /opt/tomcat/webapps/kiback`

-   Supprimer l'ancien dossier de l'API :

    -   `sudo rm /opt/tomcat/webapps/kiback.war`

-   Copier le fichier WAR présent dans le dossier target vers
    /opt/tomcat/webapps :

    -   `sudo mv target/kiback.war.original /opt/tomcat/webapps/kiback.war`

-   Relancer Tomcat :

    -   `sudo service tomcat start`

SonarCube
=========

-   Installez préalablement le certificat sonar à l'aide de la commande suivante
    :

    -   `keytool -importcert -file c:\cube.cer -keystore "C:\Program
        Files\Java\jdk1.8.0_112\jre\lib\security\cacerts"`

-   Lancer sonar avec la commande suivante :

    -   `mvn  clean install sonar:sonar`
