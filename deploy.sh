#!/bin/bash
# Mettre à jour le code source
git pull
# Construire l'image Docker
docker build --no-cache -t front-cda23 .
# Arreter le conteneur existant
docker stop conteneur-cda23
# Supprimer le conteneur existant
docker rm conteneur-cda23
# Lancer un nouveau conteneur
docker run -d --name=conteneur-application -p 4200:80 front-cda23