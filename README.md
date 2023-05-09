
# Backend Login with Prisma ORM


Este é um repositório de exemplo que mostra como implementar um sistema de login simples usando o Prisma ORM em um backend Node.js.

O objetivo do projeto é fornecer um exemplo de como criar um sistema de login básico usando Prisma ORM para manipular dados do banco de dados. O backend é construído usando Node.js e Express, e o banco de dados usado é o PostgreSQL.
## Tecnologias usadas
Este projeto foi criado usando as seguintes tecnologias:

- Prisma TypeScript ORM
- JWT authentication
- TypeScript
- bcryptjs
## Funcionalidades

Pagina statica feita para exercitar funcionalidades basicas do React.js e CSS 
## Como usar

1. Clone o repositório em sua máquina local:

```bash
git clone https://github.com/Toukinha/ReactSinglePage.git
```

2. Instale as dependências do projeto:

```bash
npm install
```
4. Inicie o servidor do banco de dados:

```bash
docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=password -d -p 3306:3306 mysql
```
5. Replique as mudanças no esquema do Prisma e gere uma nova migration:

```bash
npm run dev:nodemon
```
5. Rode o script do nodemon

```bash
npm run dev:nodemon
```

## Funcionalidades
O projeto implementa as seguintes funcionalidades:

- Cadastro de usuário
- Login de usuário
- Autenticação de usuário usando tokens JWT

O endpoint para cadastro de usuário é http://localhost:3333/register e requer um nome de usuário, um email e uma senha.

O endpoint para login de usuário é http://localhost:3333/login e requer um email e uma senha. Se as credenciais estiverem corretas, um token JWT é retornado.

## Contribuindo
Se você deseja contribuir com este projeto, sinta-se à vontade para abrir uma issue ou uma pull request. Todos os tipos de contribuição são bem-vindos!