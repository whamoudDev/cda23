#!/bin/bash
# Mettre à jour le code source
git pull
# Construire l'image Docker
docker build --no-cache -t front-cda23 .
# Arreter le conteneur existant
docker stop angularcda23
# Supprimer le conteneur existant
docker rm angularcda23
# Lancer un nouveau conteneur
docker run -d --name=angularcda23 -p 4200:80 front-cda23