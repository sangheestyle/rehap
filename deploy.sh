docker-compose up --build -d

docker commit rehap_app_1 rehap_app
docker tag rehap_app sangheestyle/rehap_appsvr
docker push sangheestyle/rehap_appsvr

docker-compose stop

eb deploy