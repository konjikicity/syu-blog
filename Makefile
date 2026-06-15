#!make
DOCKER_COMPOSER_PATH=docker-compose.yml
-include .env
export
DC=docker compose
STAGE=local
GIT=git pull origin
all: ## All
build: ## Build
	@$(DC) -f $(DOCKER_COMPOSER_PATH) build
up: ## Docker UP
	@$(DC) -f $(DOCKER_COMPOSER_PATH) up -d 
down: ## Docker Down
	@$(DC) -f $(DOCKER_COMPOSER_PATH) down
restart: ## Docker Restart
	@$(DC) -f $(DOCKER_COMPOSER_PATH) restart
reload: ## Docker Reload
	@$(DC) -f $(DOCKER_COMPOSER_PATH) down
	@$(DC) -f $(DOCKER_COMPOSER_PATH) up -d
ps: ## Docker ps
	@$(DC) -f $(DOCKER_COMPOSER_PATH) ps
exec: ## Docker Exec | args NAME
	@$(DC) -f $(DOCKER_COMPOSER_PATH) exec app bash
clean: ## Docker Clean !!手持ちのイメージ、ボリュームがすべて消えます。!!
	@docker image prune
	@docker volume prune
