
Prerequis
------------

-   Java - 1.8.x

-   Mysql - 5.x.x

-   Maven 3.x.x

Installation
------------
-   Cloner le projet

-   Créer une base de donnees en local avec /dump.sql

-   Modifier les parametres suivant du fichier de propriete en local: [src/main/resources/application-local.properties](src/main/resources/application-local.properties)

    -   spring.datasource.url=jdbc:mysql://localhost/<nom de la base de donnée>
    
    -   spring.datasource.username=<root>
    
    -   spring.datasource.password=<>

- Lancer l'application avec Maven ( Profil local par défault)

-   `mvn spring-boot:run`

-   Pour choisir un autre profil :

    -   `mvn spring-boot:run -Drun.jvmArguments="-Dspring.profiles.active=azr01"`
    
    -   `mvn spring-boot:run -Drun.jvmArguments="-Dspring.profiles.active=azr02"`
    
    -   `mvn spring-boot:run -Drun.jvmArguments="-Dspring.profiles.active=local"`


-   Alternativement vous pouvez lancer l'application en debug

    -   `mvn spring-boot:run -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=y,address=5005`

-   Le server va demarer sur  [http://localhost:8080](http://localhost:8080)


Générer le WAR
------------
-   Avant de génerer un WAR vérifier les parametres du fichier de propriété **application.xx.properties**

    -   Générer le fichier WAR avec profil production  : 
    
        -   `mvn package -Drun.jvmArguments="-Dspring.profiles.active=azr02"  -Dmaven.test.skip=true`
    
    - Générer le fichier WAR avec profil local :
    
        -   `mvn package -Drun.jvmArguments="-Dspring.profiles.active=azr01"  -Dmaven.test.skip=true`
    
    - Générer le fichier WAR avec profil dev :
    
        -   `mvn package -Drun.jvmArguments="-Dspring.profiles.active=local"  -Dmaven.test.skip=true`