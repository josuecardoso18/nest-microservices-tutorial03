# Solução de problemas

- Abra o Docker Desktop antes de executar `docker compose up -d`.
- Copie `.env.example` para `.env` antes de iniciar os serviços.
- Se o Prisma não encontrar as tabelas, execute `npm run db:generate` e `npm run db:push`.
- PostgreSQL usa a porta 5434 para evitar conflito com instalações locais.
- RabbitMQ: porta 5672; painel: 15672.
- A DLQ exige executar `npm run rabbitmq:setup` antes de iniciar a fila. Se a fila já existir sem configuração DLX, o RabbitMQ pode reclamar de argumentos incompatíveis; em laboratório, remova a fila pelo painel e rode o script novamente.
- O Outbox incluído é didático, sem publisher confirms completos e sem proteção contra duplicidade em múltiplas instâncias.
