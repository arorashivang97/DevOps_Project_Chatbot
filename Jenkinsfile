pipeline {
    agent any 
    tools {nodejs "node" }
    stages {
		stage('Build docker'){
			steps {
				sh 'docker build . -t arorashivang97/docker-test'
			}
		}
		stage('Push to hub'){
			steps {
				sh 'docker push arorashivang97/docker-test'
			}
		}
        stage('Build') { 
            steps {
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