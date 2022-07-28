<h1 align="center">
  <center>Backend Delivery Menu
</center>
</h1>

## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](classic.yarnpkg.com/en/docs/install)

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta `cd prisma`;
3. Rode `yarn` ;
4. Rode `yarn prisma generate` para instalar os models do prisma no projeto
5. Rode `yarn dev` ou `npm run dev` para rodar a aplicação;
6. Acesse a URL `http://localhost:3333`;

Executar Migrate: `yarn prisma migrate dev` (DEPOIS DE CRIAR O BANCO);

Executar Dependências: `yarn add @types/name_dependencia` ou `npm i @types/name_dependencia`;

Executar Migrate: `yarn prisma migrate dev`;

Testar o Cadastro de Users:

```JSON
{
	"name": "Fernando Kendy Yahiro",
	"email": "yahirokendy@gmail.com",
	"password": "teste123ok"
}
```