# Front-End de Consulta de Créditos

Este é o front-end da aplicação de **consulta de créditos constituídos**.
A interface foi construída com Angular e Bootstrap para permitir buscas simples e rápidas.

## Tecnologias Utilizadas

* **Angular 14**
* **TypeScript**
* **Bootstrap 4**
* **RxJS**
* **Docker & Docker Compose**

## Estrutura do Projeto

* **`src/`**: Código-fonte da aplicação.

  * **`app/`**:

    * **`components/`**: Componentes criados para consulta de créditos.
    * **`models/`**: Modelos (ex.: `credito.model.ts`).
    * **`services/`**: Serviços (ex.: `credito.service.ts`).
  * **`environments/`**: Configurações de ambiente (`environment.ts`, `environment.prod.ts`).
* **`angular.json`**: Configurações do Angular CLI.
* **`package.json`**: Dependências e scripts de build/execução.
* **`tsconfig.json`**: Configurações do TypeScript.
* **`Dockerfile`**: Dockerfile para produção.
* **`Dockerfile_local`**: Dockerfile para desenvolvimento.
* **`docker/`**: Arquivos de configuração do Docker Compose para ambientes.

## Como Executar o Projeto com Docker

O projeto utiliza dois Dockerfiles e Compose para ambientes distintos.

### Ambiente de Desenvolvimento

Para subir o front-end em modo desenvolvimento, execute:

```shell
docker-compose -f docker/docker-compose-develop.yml up --build
```

Isso irá:

* Construir imagem com **Dockerfile\_local** (Node 16)
* Subir o serviço na porta **4200**
* Conectar automaticamente ao back-end em `localhost:8080`

## Acessando a Aplicação

Abra no navegador:

**[http://localhost:4200](http://localhost:4200)**
