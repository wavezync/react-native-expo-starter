import { mergeQueryKeys } from '@lukemorales/query-key-factory';
import { rickAndMorty } from './rick-and-morty';

export const queries = mergeQueryKeys(rickAndMorty);
