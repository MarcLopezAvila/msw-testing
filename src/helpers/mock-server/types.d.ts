import { FactoryAPI } from '@mswjs/data/lib/glossary';
import { PrimaryKey } from '@mswjs/data/lib/primaryKey';

export type DB = FactoryAPI<{ character: { name: PrimaryKey<string>; }; }>;
