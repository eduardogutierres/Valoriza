Projeto Valoriza.

Projeto do evento da Rocketseat (Next Level Week 06). Projeto NLW Valoriza.

Entidades e Atributos:

user	id, name, email, password, admin, created_at, updated_at

tag	id, name, created_at, updated_at

compliments	id, user_sender, user receiver, tag_id, message, created_at

Recursos:

Express

TypeORM

SQLite

Funcionalidades:

Cadastro de usuários

Cadastro de Tags (elogios possíveis)

Somente usuário administrador

Cadastro do elogio

ID do usuário que vai receber elogio

ID do usuário que está enviando o elogio

ID da tag

Data de criação

Autenticação de usuário

Gerar token JWT

Validar usuário logado nas rotas necessárias

Listagem de usuários

Listagem de tags

Listagem de elogios por usuário

Iniciando o projeto

Após clonar o projeto, é necessário atualizar as dependências.

Comandos para baixar dependências, executar migrations e iniciar a aplicação:

yarn

yarn typeorm migration:run

yarn dev
