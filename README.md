# Test Driven Development (TDD) Demo

Código para demonstração do processo de TDD para Onboarding Wiz.

## Instalação

Para instalar o servidor, é necessário ter o Node.js e NPM instalados. Após clonar
o repositório, basta navegar até a pasta contendo o código e executar o comando:

> npm i

Após a conclusão do processo, é necessário rodar as migrations para configurar o banco de dados SQLite:

> npm run typeorm migration:run

Com o banco de dados configurado, pode-se iniciar o servidor:

> npm run dev

## Testes

Para executar os testes do sistema, basta executar:

> npm run test

Os dados de coberturas podem ser encontrados na pasta "coverage/lcov-report/index.html".
