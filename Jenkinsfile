pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                gitHubPRStatus githubPRMessage('${GITHUB_PR_COND_REF} run started')
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

