#### Iniciando a API
```sh
$ cd api

# Criando a imagem Docker do banco de dados:
# Dentro do projeto, já existe uma arquivo docker-compose.yml que possui o
# PostgreSQL como banco de dados, basta ter o Docker instalado em sua máquina.
$ docker-compose up -d # Iniciará em background e não irá bloquear o shell

# Rodando as migrations para o banco de dados e iniciando o projeto
$ yarn && yarn typeorm migration:run && yarn dev:server
```

<a href="https://insomnia.rest/run/?label=gobarber-jvictorfarias&uri=https%3A%2F%2Fgithub.com%2Fjvictorfarias%2FGoBarber%2Fblob%2Fmaster%2Fapi%2Finsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

#### Iniciando o Frontend
```sh
$ cd web
$ yarn && yarn start
```
#### Iniciando o Mobile(Android)
```sh
$ cd mobile
$ yarn && yarn android && yarn start
