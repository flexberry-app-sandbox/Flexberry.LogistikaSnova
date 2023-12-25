docker build --no-cache -f SQL\Dockerfile.PostgreSql -t logistika_snova-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t logistika_snova-java/app ../../..
