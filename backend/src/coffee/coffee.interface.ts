export interface CoffeeInfo {
  id: number;
  uid: string;
  blend_name: string;
  origin: string;
  variety: string;
  notes: string;
  intensifier: string;
}

export interface CoffeeImage {
  file: string;
  license: string;
  owner: string;
  width: number;
  height: number;
  filter?: string;
  tags: string;
  tagMode: string;
}

export type CoffeeData = CoffeeInfo & CoffeeImage;
