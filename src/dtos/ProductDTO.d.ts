import { coffeeTags } from '@data/products';

type TagsType = 'Especial' | 'Tradicional' | 'Gelado' | 'Com leite' | 'Alcoólico';

export interface ProductDTO {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: TagsType[];
  thumb?: string;
}
