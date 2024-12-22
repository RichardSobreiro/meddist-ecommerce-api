<!-- @format -->

# meddist-ecommerce-api

## TODOS

1. Security Considerations: Storing tokens in browsers can be risky. Ensure your application has adequate security measures to prevent XSS attacks or token theft.

## Create the Project

- Install NestJS CLI globally

```
npm i -g @nestjs/cli
```

- Generate a new project with the NestJS CLI:

```
nest new meddist-ecommerce-api
```

- Generate a new module

```
nest g module products
nest g controller products
nest g service products
```

- Run prettier

```
npx prettier --write "**/*.ts"
```

### Update database schema

- Generate the migration with TypeORM CLI

```
npx typeorm migration:generate -n UsernameNullableMigration
```

- Run the migration

```
npx typeorm migration:run
```

## Generate and Apply Migrations

- Create a migration name CreateUserAccount

```
npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:generate src/migrations/UserEmailIsConfirmed --dataSource ormconfig.ts
```

- Apply the migration

```
npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run --dataSource ormconfig.ts
```
