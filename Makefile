.PHONY: build start

build:
	cd frontend && npm install && npm run build
	cd backend && ./mvnw clean package

start:
	cd backend && ./mvnw spring-boot:run & cd frontend && npm run dev
