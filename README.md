# React application deployment test
Simple application in *Java* (*Spring Boot*) and *React* (*Vite*).

<a href="https://github.com/dbelob/react-application-deployment/actions"><img alt="GitHub Actions status" src="https://github.com/dbelob/react-application-deployment/workflows/Build/badge.svg"></a>
[![codecov](https://codecov.io/gh/dbelob/react-application-deployment/branch/main/graph/badge.svg)](https://codecov.io/gh/dbelob/react-application-deployment)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=dbelob_react-application-deployment&metric=alert_status)](https://sonarcloud.io/dashboard?id=dbelob_react-application-deployment)

## Requirements

* [JDK 21+](https://www.oracle.com/java/technologies/downloads/)
* [Apache Maven 3.9.0+](https://maven.apache.org/download.cgi)
* [Node.js 22.12.0+](https://nodejs.org) (optional)

## Running

### Method 1

1. From the command line with *Maven* (in the root directory):

    `mvn clean install -Dmaven.test.skip=true`

1. Change directory:

    `cd react-application-deployment-server`

1. From the command line with *Maven*:

    `mvn spring-boot:run`

1. Access the deployed web application at:

    http://localhost:8080

### Method 2

1. Install *Node.js*

1. Run to ensure that *npm* is working:

    `npm -v`

1. Change directory:

    `cd react-application-deployment-server`

1. From the command line with *Maven*:

    `mvn spring-boot:run`

1. Change directory:

    `cd react-application-deployment-web`

1. From the command line with *npm*:

    `npm start`

1. Access the deployed web application at:

    http://localhost:5173

### Method 3

1. From the command line with *Maven* (in the root directory):

    `mvn clean package -DskipTests`

1. Change directory:

    `cd react-application-deployment-distrib/target`

1. Find distribution file:

    `react-application-deployment-<version>.zip`

1. Extract files from ZIP, for example:

    `unzip react-application-deployment-<version>.zip`

1. Change directory:

    `cd react-application-deployment-<version>`

1. Run:

    `runme.bat` (*Windows*)  
    `runme.sh` (*macOS* or *Linux*)

1. Access the running web application at:

    http://localhost:8080
