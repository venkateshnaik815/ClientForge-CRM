# ClientForge-CRM

ClientForge CRM is an enterprise-grade customer relationship management system.

## Installation
1. Ensure you have Node.js 18+ and Java 21+ installed.
2. Clone the repository: `git clone https://github.com/venkateshnaik815/ClientForge-CRM.git`
3. Install frontend dependencies:
```bash
cd frontend
npm install
```

## Build
To build the frontend for production:
```bash
cd frontend
npm run build
```
To package the Spring Boot backend:
```bash
cd backend
./mvnw clean package
```

## Run
Start the backend server:
```bash
cd backend
./mvnw spring-boot:run
```
Start the frontend development server:
```bash
cd frontend
npm run dev
```

## Dependencies
- Spring Boot 3.2.x (Java)
- React 18, Vite, Tailwind CSS v4 (TypeScript)
- H2 Database (In-Memory)

## Usage
Access the application at http://localhost:5173 after starting both servers. You can login with the generated admin credentials.
