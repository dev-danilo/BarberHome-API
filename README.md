# Configuração de ambiente
  **Instalar Docker**
  -docker run --name barberhome_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432
  -docker run --name mongodb -p 27017:27017 -d -t mongo
  -docker run --name redis -p 6379:6379 -d -t redis:alpine

# Recuperação de senha 🚀

  **Requisitos Funcionais**
  - O usuário deve poder recuperar sua senha informando seu email;
  - O usuário deve receber um email com instruções de recuperação de senha;
  - O usuário deve poder resetar sua senha;

  **Requisitos Não Funcionais**
  - Utilizar Mailtrap para testar envios em ambiente dev;
  - Utilizar Amazon SES para envios em produção;
  - O envio de emails deve acontecer em segundo plano (background job);

  **Regras de Negócio**
  - O link enviado por email para resetar senha deve expirar em 2h;
  - O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil 🚀

  **Requisitos Funcionais**
  - O usuário deve poder atualizar seu nome, email e senha;

  **Requisitos Não Funcionais**

  **Regras de Negócio**
  - O usuário não pode alterar seu email para um email já utilizado;
  - Para atualizar sua senha, o usuário deve informar a senha antiga;
  - Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador 🚀

  **Requisitos Funcionais**
  - O prestador deve poder listar todos os agendamentos de um dia especifico;
  - O prestador deve receber uma notificação sempre que houver um novo agendamento;
  - O prestador deve poder visualizar as notificações não lidas;

  **Requisitos Não Funcionais**
  - Os agendamentos do prestador no dia devem ser armazenados em cache;
  - As notificações do prestador devem ser armazenadas no MongoDB;
  - As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

  **Regras de Negócio**
  - A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

# Agendamento de serviços 🚀

  **Requisitos Funcionais**
  - O usuário deve poder listar todos os prestadores de serviço dos prestadores;
  - O usuário deve poder listar os dias de um mês com pelo menos um hotário disponível de um prestador;
  - O usuário deve poder listar os horários disponíveis em um dia especifico de um prestador
  - O usuário deve poder realizar o agendamento;

  **Requisitos Não Funcionais**
  - A listagem de prestadores deve ser armazenada em cache;

  **Regras de Negócio**
  - Cada agendamento deve durar 1h exatamente;
  - Os agendamentos devem estar disponíveis entre 8h às 18h(primeiro às 8h, último as 17h);
  - O usuário não pode agendar em um horário já ocupado;
  - O usuário não pode agendar em um horário que ja passou;
  - O usuário não pode agendar serviços consigo mesmo;


