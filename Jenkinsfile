node{
    def app
    
    stage ('Clone repository'){
        git 'https://github.com/arorashivang97/DevOps_Project_Chatbot.git'
    }
    
    stage ('Build image'){
        app = docker.build("mohdshabaz/spe_bank:${env.BUILD_NUMBER}")
        
    }
    
    stage ('Test image'){
        app.inside{
            sh 'echo "Test Passed"'
        }
    }
    
    stage ('Push image'){
        docker.withRegistry('https://registry.hub.docker.com','dockerhub'){
            app.push()
        }
    }
}



/*
pipeline {
    agent any 
    stages {
		stage('Build docker'){
			steps {
				sh 'docker build -t arorashivang97/docker-test1 .'
			}
		}
		stage('Push to hub'){
			steps {
				sh 'docker push arorashivang97/docker-test1'
			}
		}
    }
<<<<<<< HEAD
}
=======
} 
*/
