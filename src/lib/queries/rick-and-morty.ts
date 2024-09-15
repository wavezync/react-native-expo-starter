import { createQueryKeys } from '@lukemorales/query-key-factory';
import { getCharacters } from '../api/rick-and-morty.service';

export const rickAndMorty = createQueryKeys('rickAndMorty', {
  all: null,
  list: (page = 1) => ({
    queryKey: [page],
    queryFn: () => getCharacters(page),
  }),
});
