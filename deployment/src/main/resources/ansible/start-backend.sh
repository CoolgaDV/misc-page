#!/usr/bin/env bash

cd  ${deploy.remote.directory}/backend

nohup /home/${deploy.user}/java/bin/java \
      -Djava.security.egd=file:/dev/urandom -Xms128m -Xmx128m \
      -jar backend.jar \
      </dev/null >/dev/null 2>&1 &