

pipeline {
    agent {
        docker {
            image 'node:latest'
            args '-p 3000:3000 -u root:root'

        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'node --version'
                sh 'npm install'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm test' 
            }
        }
    }
}

