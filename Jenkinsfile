pipeline {
  agent {
    node {
      label 'dockerbuild01'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh '''echo "CICD Hello World"

apt update 
apt install curl -y

curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

ls -lha 

cat Dockerfile 

docker build . -t hs-backendapi:$BUILD_NUMBER

docker run -itd -p 3000:3000 hs-backendapi:$BUILD_NUMBER

'''
        echo 'First CICD'
      }
    }

  }
  environment {
    DOCKER_HOST = '34.71.41.214:4242'
  }
}