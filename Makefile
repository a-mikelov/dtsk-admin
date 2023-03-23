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
	docker-compose -f Dockerfile.production.yml up	