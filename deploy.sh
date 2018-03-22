docker-compose up --build -d

docker commit rehap_appsvr_1 rehap_appsvr
docker tag rehap_appsvr sangheestyle/rehap_appsvr
docker push sangheestyle/rehap_appsvr

docker-compose stop

eb deploy