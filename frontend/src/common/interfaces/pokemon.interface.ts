export interface Pokemon {
  sprites: {
    front_default: string;
  };
  name: string;
  types: [{ type: { name: string } }];
  height: string;
  weight: string;
}
