// import { ConnectionOptions } from 'typeorm';
// import * as dotenv from 'dotenv';

// dotenv.config();

// export default {
//   type: 'postgres',
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   username: process.env.POSTGRES_USER,
//   password: process.env.POSTGRES_PASSWORD,
//   database: process.env.POSTGRES_DB,
//   synchronize: false,
//   baseUrl: './',
//   logging: true,
//   migrationsRun: true,
//   // entities: ['src/database/entity/*.ts'],
//   migrations: ['src/database/migration/*.ts'],
//   // subscribers: ['src/subscriber/**/*.ts'],
//   seeds: ['src/database/seeds/**/*{.ts,.js}'],
//   // factories: ['src/factories/**/*{.ts,.js}'],
//   cli: {
//     entitiesDir: 'src/database/entity',
//     migrationsDir: 'src/database/migration/',
//     subscribersDir: 'src/subscriber',
//   },
// } as unknown as ConnectionOptions;