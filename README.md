# Frontend Angular - Aplicação de Gestão de Categorias e Produtos

Este repositório contém a aplicação frontend desenvolvida em **Angular** para gestão de **categorias** e **produtos**. A aplicação se comunica com o backend via APIs RESTful e implementa funcionalidades de criação, listagem, edição e remoção de categorias e produtos.

## Requisitos

### Funcionais
- **Cadastro de Categorias**: Permite criar, editar, listar e remover categorias.
- **Cadastro de Produtos**: Permite criar, editar, listar e remover produtos dentro de categorias.
- **Autenticação**: O usuário deve fornecer um **usuário** e **senha** para acessar a aplicação. A autenticação será feita utilizando **token JWT**.

### Não Funcionais
- **Responsividade**: A aplicação deve ser responsiva e funcionar bem em dispositivos móveis e desktops.
- **Desempenho**: A aplicação deve ser capaz de carregar rapidamente, mesmo com grandes volumes de dados.

## Segurança

- **Autenticação de Usuário**: A autenticação é feita com **usuário** e **senha**, sendo gerado um **token JWT** que deve ser passado nas requisições subsequentes.
- **Proteção de Rotas**: As rotas protegidas, como as de criação e edição de categorias e produtos, exigem o envio do **token JWT** no cabeçalho da requisição para garantir que o usuário está autenticado.
  
### Como obter o Token
1. Faça login na aplicação fornecendo **usuário** `admin` e **senha** `123456`.
2. O sistema irá gerar e retornar um **token JWT**, que deve ser utilizado nas requisições subsequentes.

No Postman, para autenticar as rotas da API:
1. Acesse a aba **Authorization**.
2. Selecione **Bearer Token** como tipo de autenticação.
3. Insira o **token** gerado após o login no campo **Token**.

### Rotas Principais

#### **Rotas de Categorias**
- **GET /api/categorias**: Lista todas as categorias. 
- **POST /api/categorias**: Cria uma nova categoria. 
- **PUT /api/categorias/{id}**: Atualiza os dados de uma categoria específica.
- **DELETE /api/categorias/{id}**: Remove uma categoria específica.

#### **Rotas de Produtos**
- **GET /api/produtos**: Lista todos os produtos.
- **POST /api/produtos**: Cria um novo produto.
- **PUT /api/produtos/{id}**: Atualiza os dados de um produto específico.
- **DELETE /api/produtos/{id}**: Remove um produto específico.

## Como Acessar a Aplicação

### Pré-requisitos
- **Node.js** instalado (recomenda-se a versão LTS).
- **Angular CLI** instalado globalmente. Caso não tenha, instale com o comando:
  ```bash
  npm install -g @angular/cli

### Passos para Subir a Aplicação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/frontend-angular.git
   ```
2. Acesse a pasta do projeto:

   ```bash
   cd frontend-angular
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Suba a aplicação:

   ```bash
   ng serve
   ```

A aplicação estará disponível em http://localhost:4200.

### Fluxo de Autenticação

1. O usuário faz login fornecendo username e password no frontend.
2. O backend gera um JWT e o envia de volta para o frontend.
3. O frontend armazena o JWT no localStorage.
4. Em cada requisição subsequente para um endpoint protegido, o JWT é enviado no cabeçalho Authorization.
5. O backend valida o JWT e permite o acesso aos dados protegidos.

#### Tecnologias Utilizadas

- Frontend: Angular
- Gerenciador de Pacotes: npm
- Bibliotecas de UI: Angular Material
- Autenticação: JWT (JSON Web Token)
- Consumo de API: HttpClient (Angular)

