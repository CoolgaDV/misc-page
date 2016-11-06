#!/usr/bin/env bash

ssh -i ${deploy.key.path} ${deploy.user}@${deploy.host} << ssh_script
    sudo service nginx stop
    rm -rf ${deploy.remote.directory}/backend
    exit
ssh_script

sftp -i ${deploy.key.path} ${deploy.user}@${deploy.host} << sftp_script
    put ${deploy.basedir}/../frontend/target/frontend.zip ${deploy.remote.directory}/frontend.zip
    put -r ${deploy.basedir}/target/deploy/config/backend ${deploy.remote.directory}/backend
    put ${deploy.basedir}/target/deploy/config/nginx.conf /etc/nginx/nginx.conf
    put ${deploy.basedir}/../backend/target/backend.jar ${deploy.remote.directory}/backend/backend.jar
    exit
sftp_script

ssh -i ${deploy.key.path} ${deploy.user}@${deploy.host} << ssh_script
    rm -rf ${deploy.remote.directory}/frontend
    unzip ${deploy.remote.directory}/frontend.zip -d ${deploy.remote.directory}/frontend
    sudo service nginx start
    exit
ssh_script