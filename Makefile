dev:
	docker-compose -f docker-compose.yml up

down:
	docker-compose down

build:
	docker build \
	--build-arg NODE_ENV=production \
	--build-arg STRAPI_URL=http://dtsk.ru \
	-t alexmikelov/dtsk-admin:0.0.1 \
	-f Dockerfile.prod .

prod:
	docker-compose -f docker-compose.prod.yml up -d


copy-file:
	scp -i ~/.ssh/id_rsa .env root@185.177.216.251:/root/dtsk-admin

connect-to-vps:
	ssh -i ~/.ssh/id_rsa root@185.177.216.251
