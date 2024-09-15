import { apiClient } from '../api-client';

export interface CharacterResult {
  info: Info;
  results: Character[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: any;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}

export const getCharacters = async (page = 1) => {
  const response = await apiClient.get<CharacterResult>('/character', {
    params: {
      page,
    },
  });
  return response.data;
};
