pipeline {
    agent {
        docker {
            image 'node:latest'
            args '-p 3000:3000'
        }
    }

    environment {
        npm_config_cache = 'npm-cache'
        CI = true
    }

    stages {
        stage('Build') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                script{
                    sh './jenkins/scripts/test.sh'
                }
            }
            post {
                always {
                    step([$class: 'CoberturaPublisher', coberturaReportFile: 'output/coverage/jest/cobertura-coverage.xml'])
                }
            }
        }

        stage('Deliver') {
            when {
                expression {
                    currentBuild.result === null || currentBuild.result === 'SUCCESS'
                }
            }
            steps {
                script {
                    def server = Artifactory.server 'My_Artifactory'
                    uploadArtifact(server)
                    sh './jenkins/scripts/deliver.sh'
                    input message: 'Finished using the website? (Click "Proceed" to continue'
                    sh './jenkins/scripts/kill.sh'
                }
            }
        }
    }
}

def uploadArtifact(server) {
    def uploadSpec = """{
        "files": [
            {
                "pattern": "Travail*.tgz",
                "target": "npm-stable/"
            }
        ]
    }"""
    server.upload(uploadSpec)

    def buildInfo = Artifactory.newBuildInfo()
    server.upload spec: uploadSpec, buildInfo: buildInfo
    server.publishBuildInfo buildInfo
}