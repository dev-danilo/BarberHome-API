#### Iniciando a API
```sh
$ cd BarberHome-API

# Criando a imagem Docker do banco de dados:
# Dentro do projeto, já existe uma arquivo docker-compose.yml que possui o
# PostgreSQL como banco de dados, basta ter o Docker instalado em sua máquina.
# Criar banco de dados inserindo a senha "docker" no postgresql
# Criar .env igual ao env de exemplo
$ docker-compose up -d # Iniciará em background e não irá bloquear o shell

# Rodar utilizando node 12
# Rodando as migrations para o banco de dados e iniciando o projeto
$ yarn && yarn typeorm migration:run && yarn dev:server
```

<a href="https://github.com/dev-danilo/BarberHome-API/blob/master/Insomnia_2022-03-05.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

#### Iniciando o Frontend
```sh
$ cd web
$ yarn && yarn start
```
#### Iniciando o Mobile(Android)
```sh
$ cd mobile
$ yarn && yarn android && yarn start
