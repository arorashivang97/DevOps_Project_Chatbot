node{

    
    stage ('Clone repository'){
        git 'https://github.com/arorashivang97/DevOps_Project_Chatbot.git'
    }
    
    stage ('Build image'){

        sh 'docker build -t arorashivang97/spe-project:app .'
        sh 'docker build -t arorashivang97/spe-project:app_mongo -f ./mongo/Dockerfile .'

        // app = docker.build("arorashivang97/spe-project")
        // app_mongo = docker.build("arorashivang97/spe-project")
    }
    
    stage ('Test image'){
        // app.inside{
        //     // sh 'npm test'
        // }
    }
    
    stage ('Push image'){
        withDockerRegistry([ credentialsId: "dockerhub", url: "https://registry.hub.docker.com" ]) 
        {
            sh 'docker push arorashivang97/spe-project:app'
            sh 'docker push arorashivang97/spe-project:app_mongo'
        }


        // docker.withRegistry('https://registry.hub.docker.com','dockerhub'){
        //     app.push()
        // }
        // docker.withRegistry('https://registry.hub.docker.com','dockerhub'){
        //     app_mongo.push()
        // }
    }
    /*post{
	success{
		curl -D - -X "POST" -H "Accept: application/json" \
		    -H "Content-Type: application/json" \
		    -H "X-Rundeck-Auth-Token: <TOKEN>" \
		    -d '{"argString":"-arg1 val1 -arg2 val2"}' \
		http://localhost:4440/api/16/job/17039cdf-5e0c-4f55-87c2-37a03fa15fdc/executions
	}
    }*/
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
