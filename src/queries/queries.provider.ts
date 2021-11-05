import { Connection } from 'typeorm';
import { Queries } from './schemas/queries.schema';

export const queriesProviders = [
  {
    provide: 'QUERIES_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Queries),
    inject: ['DATABASE_CONNECTION'],
  },
];
