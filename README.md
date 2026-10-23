# NestJS Microservices — Tutorial 03

Projeto-base didático: NestJS, PostgreSQL, Prisma, RabbitMQ, Notifications Service, ACK/NACK, DLQ e Outbox.

## Requisitos
Node.js 20+, npm e Docker Desktop.

## Instalação (PowerShell)
1. Extraia o ZIP e abra a pasta `nest-microservices-tutorial03` no VS Code.
2. `Copy-Item .env.example .env`
3. `npm install`
4. `docker compose up -d`
5. `npm run db:generate`
6. `npm run db:push`

Abra quatro terminais na pasta do projeto e execute:
- `npm run start:dev:users`
- `npm run start:dev:orders`
- `npm run start:dev:notifications`
- `npm run start:dev:api-gateway`

Gateway: http://localhost:3000  
Painel RabbitMQ: http://localhost:15672 (usuário `app`, senha `app123`)

## Teste (PowerShell)
Criar usuário:
`Invoke-RestMethod -Method Post -Uri http://localhost:3000/users -ContentType "application/json" -Body '{"name":"Ana","email":"ana@example.com"}'`

Criar pedido:
`Invoke-RestMethod -Method Post -Uri http://localhost:3002/internal/orders -ContentType "application/json" -Body '{"userId":1,"description":"Notebook Dell","total":4500}'`

O serviço Notifications imprime a notificação no terminal. Use o ID do usuário retornado, se não for 1.

## Observação
Código para estudo, não produção. O Outbox é didático: para garantias completas faltam publisher confirms, locking/lease e consumidores idempotentes.
