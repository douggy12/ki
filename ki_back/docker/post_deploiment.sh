cp /tmp/docker/application-docker.properties /tmp/src/main/resources/application-local.properties
mvn clean package  -Dmaven.test.skip=true
rm -rf /usr/local/tomcat/webapps/kiback*
cp /tmp/target/kiback*.war /usr/local/tomcat/webapps/kiback.war