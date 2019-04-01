pipeline {
    agent any 
    tools {nodejs "node" }
    stages {
		stage('Build docker'){
			steps {
				sh 'docker build . -t adiankush/devops-ml'
			}
		}
		stage('Push to hub'){
			steps {
				sh 'docker push adiankush/devops-ml'
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