# Banco API Test

## Objetivo

Este projeto contém testes automatizados de API desenvolvidos em **JavaScript** para validar a API REST do projeto **banco-api**, cobrindo principalmente operações de autenticação e transferência bancária.

A automação foi construída utilizando boas práticas de organização, reutilização de código e geração de relatórios HTML para facilitar a análise dos resultados.

API alvo: https://github.com/juliodelimas/banco-api

------------------------------------------------------------------------

# Stack utilizada

-   Node.js
-   JavaScript
-   Mocha
-   Chai
-   Supertest
-   Dotenv
-   Mochawesome

------------------------------------------------------------------------

# Estrutura do projeto

``` text
.
├── test/
    ├── login.test.js
│   └── transferencia.test.js
├── mochawesome/
│   └── (relatórios HTML gerados após a execução)
├── package.json
├── .env (criado pelo usuário)
├── .gitignore
└── README.md
```

------------------------------------------------------------------------

# Configuração

## Arquivo .env

Crie um arquivo chamado `.env` na raiz do projeto.

Exemplo:

``` env
BASE_URL=http://localhost:3000
```

Altere a URL conforme o ambiente onde a API estiver sendo executada.

------------------------------------------------------------------------

# Instalação

``` bash
npm install
```

------------------------------------------------------------------------

# Executando os testes

``` bash
npm test
```

ou

``` bash
npx mocha
```

------------------------------------------------------------------------

# Relatórios

O projeto utiliza o **Mochawesome**.

Após a execução dos testes com npm test será criado automaticamente o relatório dentro do diretório `mochawesome-report`: clicando em cima do relatório gerado com botão direito selecione "copy patch" e cole no navegador.

Sugestão: para executar os teste e abrir o relatório HTML automaticamente, adicione um script no `package.json`

```json
"scripts": {
  "test:report": "npm test && open mochawesome-report/mochawesome.html"
}
```

Nele estará disponível um relatório HTML contendo:

-   Cenários executados
-   Tempo de execução
-   Evidências dos testes
-   Status (Sucesso/Falha)

------------------------------------------------------------------------

# Dependências

-   Node.js --- https://nodejs.org/
-   Mocha --- https://mochajs.org/
-   Chai --- https://www.chaijs.com/
-   Supertest --- https://github.com/forwardemail/supertest
-   Dotenv --- https://github.com/motdotla/dotenv
-   Mochawesome --- https://github.com/adamgruber/mochawesome

------------------------------------------------------------------------

# Projeto testado

https://github.com/juliodelimas/banco-api

------------------------------------------------------------------------

# Autor

Cintia Maas
