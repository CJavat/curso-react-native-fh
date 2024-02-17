export interface PokemonPaginatedResponse {
  count:    number;
  next:     string;
  previous: null;
  results:  Result[];
}

export interface Result {
  name: string;
  url:  string;
}

export interface SimplePokemon {
  id: number;
  name: string;
  picture:  string;
  color?: string;
}
