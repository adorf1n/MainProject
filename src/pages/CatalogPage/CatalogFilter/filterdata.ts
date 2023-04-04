export interface IFilterCatalog {
  id: number;
  value: string;
  name: string;
}

export const filterCollectionData: IFilterCatalog[] = [
  { value: 'Amoricci', id: 1, name: 'Градиенты' },
  { value: 'Aquamarine', id: 2, name: 'Акварель' },
  { value: 'Modern', id: 2, name: 'Модерн' },
  { value: 'Flowers', id: 2, name: 'Цветы' },
  { value: 'Classic', id: 2, name: 'Классика' },
];

export const filterColorsData: IFilterCatalog[] = [
  { value: 'White', id: 1, name: 'Белый' },
  { value: 'Green', id: 2, name: 'Зеленый' },
  { value: 'Gray', id: 2, name: 'Серый' },
  { value: 'Yellow', id: 2, name: 'Желтый' },
  { value: 'Blue', id: 2, name: 'Синий' },
  { value: 'Purple', id: 2, name: 'Фиолетовый' },
];

export const filterMaterialData: IFilterCatalog[] = [
  { value: 'Paper', id: 1, name: 'Бумага' },
  { value: 'Vinyl', id: 1, name: 'Винил' },
  { value: 'Non-woven', id: 1, name: 'Флизерин' },
  { value: 'Textile', id: 1, name: 'Текстиль' },
];
