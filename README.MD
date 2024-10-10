
# Projeto Pokemon

Este projeto consiste em um frontend feito com Next.js e um backend desenvolvido com NestJS para surgimento e captura de pokemon, utilizando a API https://pokeapi.co/ e banco de dados PostgreSQL.

## Pré-requisitos
- Node.js (v18 ou superior)
- Docker e Docker Compose
- Yarn ou npm

## Passo a passo para rodar o projeto

### 1. Configurar o Backend (NestJS)
1. Navegue até a pasta do backend:

```
cd backend
```
2. Instale as dependências do NestJS:
```
npm install
```
3. Crie um arquivo .env na pasta backend com as seguintes variáveis de ambiente:
```
DATABASE_URL=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgres
DATABASE=pokemon_app
PORT=3001
```
4. Rode o banco de dados PostgreSQL via Docker Compose:
```
docker-compose up -d
```
5. Inicie o backend em modo de desenvolvimento:
```
npm run start:dev
```
O backend estará rodando em http://localhost:3001.

### 2.  Configurar o Frontend (Next.js)
1. Navegue até a pasta do frontend:

```
cd frontend
```
2. Instale as dependências do NestJS:
```
npm install
```
3. Crie um arquivo .env na pasta frontend com a seguinte variável de ambiente:
```
BACKEND_URL=http://localhost:3001
```
4. Inicie o frontend em modo de desenvolvimento:
```
npm run dev
```
O frontend estará disponível em http://localhost:3000.


