import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { History } from './modules/history/entities/history.entity';

const config: Options = {
  dbName: 'postgres',
  user: 'postgres',
  password: '969696',
  host: 'localhost',
  port: 5432,
  driver: PostgreSqlDriver,
  debug: true,
  entities: [History],
  entitiesTs: [History],
  migrations: {
    path: 'dist/migrations',
    pathTs: 'src/migrations',
  },
};

export default config;
