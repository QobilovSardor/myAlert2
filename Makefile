install:
	git pull
	npm ci

timezone:
	timedatectl set-timezone Europe/Moscow

fix:
	npx prettier . --write
	npx eslint --fix .

docker-build-prepare:
	git pull
	docker stop $$(docker ps -a -q)
	docker rm $$(docker ps -a -q)

docker-build-prod:
	git pull
	docker compose build
	docker compose up

ungit:
	rm -rf .git
	rm .gitignore