export enum ECollection {
  COLLECT1 = 'Amoricci Parati',
  COLLECT2 = 'Emiliana Parati',
  COLLECT3 = 'Erismann',
}

export interface IGoods {
  id: number;
  name: string;
  item_number: number;
  price: number;
  crossed_price: number;
  field_popular?: boolean;
  field_novelty?: boolean;
  field_inStock?: boolean;
  field_25discount?: boolean;
  collection: ECollection;
}
