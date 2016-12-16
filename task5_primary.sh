apt-get install mongodb
mkdir -p data/db
mongod --replSet "rs0" --dbpath ~/data/db
mongo --eval "rs.initiate();rs.add('hostname/ip_secondary:port')"