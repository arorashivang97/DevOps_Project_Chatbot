pipeline {
    agent any 
    stages {
		stage('Build docker'){
			steps {
				sh 'sudo docker build . -t arorashivang97/docker-test1'
			}
		}
		stage('Push to hub'){
			steps {
				sh 'docker push arorashivang97/docker-test1'
			}
		}
    }
}