DOCKER_VERSION := v1.3.0

build:
	docker buildx build --platform=linux/amd64 -t wemeta-supported-worlds .
	docker tag wemeta-supported-worlds 256487760603.dkr.ecr.us-west-2.amazonaws.com/wemeta-supported-worlds:${DOCKER_VERSION}
	aws ecr get-login-password | docker login --username AWS --password-stdin 256487760603.dkr.ecr.us-west-2.amazonaws.com
	docker push 256487760603.dkr.ecr.us-west-2.amazonaws.com/wemeta-supported-worlds:${DOCKER_VERSION}
	@echo 'NOTE: please bump image version in the fargate json and run make deploy-<env> to update'

deploy-prod:
	aws ecs register-task-definition --region us-west-2 --cli-input-json file://aws/production_fargate.json
	aws ecs update-service --cluster wemeta-supported-worlds-prod --service wemeta-supported-worlds-prod --task-definition wemeta-supported-worlds-prod --force-new-deployment

deploy-staging:
	aws ecs register-task-definition --region us-west-2 --cli-input-json file://aws/staging_fargate.json
	aws ecs update-service --cluster wemeta-supported-worlds-staging --service wemeta-supported-worlds-staging-2 --task-definition wemeta-supported-worlds-staging --force-new-deployment