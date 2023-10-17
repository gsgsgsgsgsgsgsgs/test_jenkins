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
                githubPRStatusPublisher buildMessage: message(failureMsg: githubPRMessage('Can\'t set status; build failed.'), successMsg: githubPRMessage('Can\'t set status; build succeeded.')), statusMsg: githubPRMessage('${GITHUB_PR_COND_REF} run ended'), unstableAs: 'FAILURE'
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploy..."
            }
        }
    }
}

