pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm --version'
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

