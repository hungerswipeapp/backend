pipeline {
  agent {
    node {
      label 'dockerbuild01'
    }

  }
  stages {
    stage('') {
      steps {
        sh 'echo "CICD Hello World"'
        echo 'First CICD'
      }
    }

  }
  environment {
    DOCKER_HOST = '10.88.88.78:4243'
  }
}