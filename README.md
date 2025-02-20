# Aplicação de Filmes com Microfrontends

Este repositório contém uma aplicação web modularizada utilizando o conceito de **Microfrontends** para consumir a API do **The Movie Database (TMDb)**. A aplicação permite listar filmes populares, visualizar detalhes de um filme e realizar buscas.

## Tecnologias Utilizadas

- **ReactJS** para o desenvolvimento dos componentes da interface com **Vite**.
- **TypeScript** para garantir tipagem e segurança no código.
- **Module Federation (Webpack)** para a divisão e integração dos microfrontends.
- **Styled-Components** para estilização e responsividade.
- **Axios para chamadas** HTTP.

## Estrutura da Aplicação

A aplicação é dividida em microfrontends para modularização e separação de responsabilidades:

### Microfrontend 1 - Listagem e Busca de Filmes
- Exibe a lista de filmes populares.
- Permite a busca de filmes na API do TMDb.

### Microfrontend 2 - Detalhes do Filme
- Exibe detalhes do filme selecionado.
- Mostra sinopse, gêneros, elenco e trailer.

### Microfrontend 3 - Autenticação
- Implementa um sistema de login fictício.
- Armazena o usuário no `localStorage`.

## Como Rodar o Projeto

### 1. Clonar o Repositório

### 2. Instalar Dependências 

```bash
npm install  # ou yarn install


### 3. Rodar Cada Microfrontend

npm start  # ou yarn start

### Configuração da API do TMDb

REACT_APP_TMDB_API_KEY=your_api_key_here


git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
