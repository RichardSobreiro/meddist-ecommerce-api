<!-- @format -->

# meddist-ecommerce-api

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

## EC2 - Dev

- SSH to instance

```
ssh -i "meddist-dev-ec2micro.pem" ec2-user@ec2-18-228-16-112.sa-east-1.compute.amazonaws.com
```

### Set up instance

#### Install PostgreSQL

- Update your instance:

```
sudo yum update -y
```

- Install PostgreSQL:

```
sudo dnf install postgresql15.x86_64 postgresql15-server -y
```

- Set up initial DB

```
sudo postgresql-setup --initdb
```

- Start the PostgreSQL service:

```
sudo systemctl start postgresql
sudo systemctl enable postgresql
sudo systemctl status postgresql
```

- Switch to the PostgreSQL user and create a new database user:

```
sudo su - postgres
createuser --interactive --pwprompt
```

Follow the prompts to create a new user (ecommerceapi).

- Create a database:

```
createdb -O ecommerceapi ecommercedb
```

- Log in using the Postgres system account:

```
su - postgres
```

- Now, change the admin database password:

```
psql -c "ALTER USER postgres WITH PASSWORD '03122024@Rr++';"
exit
```

#### Configure PostgreSQL for Remote Access

- Edit the PostgreSQL configuration:

```
sudo vim /var/lib/pgsql/data/postgresql.conf
```

Change listen_addresses to '\*' to allow connections from any IP.

- Edit the pg_hba.conf file:

```
sudo vim /var/lib/pgsql/data/pg_hba.conf
```

- Add the following line to allow connections from your IP address:

```
host    all             all             187.20.21.126/32            md5
```

- Install extensions

```
sudo yum install postgresql15-contrib.x86_64
```

- Enable "uuid-ossp"

```
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

- Restart PostgreSQL:

```
sudo service postgresql restart
```
