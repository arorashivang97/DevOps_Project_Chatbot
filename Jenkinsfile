pipeline {
    agent any 
    tools {nodejs "node" }
    stages {
		stage('Build docker'){
			steps {
				sh 'sudo docker build . -t arorashivang97/docker-test'
			}
		}
		stage('Push to hub'){
			steps {
				sh 'sudo docker push arorashivang97/docker-test'
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