

pipeline {
    agent {
        docker {
            image 'node:latest'
            args '-p 3000:3000 '

        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'node --version'
                sh 'npm install --cache="/tmp/.YourCustomCacheDirectoryName"'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm test' 
            }
        }
    }
}

