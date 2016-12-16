apt-get install mongodb
mkdir -p data/db
mongod --replSet "rs0" --dbpath ~/data/db