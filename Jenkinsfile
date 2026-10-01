pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Building Student Registration Project...'
                sh 'ls -l'
            }
        }

        stage('Test') {
            steps {
                echo 'Running HTML/CSS/JS tests...'
                sh 'chmod +x test.sh'
                sh './test.sh'
            }
        }
    }

    post {
        success {
            echo '✅ Build and tests passed successfully!'
        }

        failure {
            echo '❌ Build or tests failed!'
        }
    }
}