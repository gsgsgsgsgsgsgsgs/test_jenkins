pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm --version'
                sh 'rm -rf node_modules'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploy..."
            }
        }
    }
}

