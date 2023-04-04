export interface IFilterCatalog {
  id: number;
  value: string;
  name: string;
}

export const filterCollectionData: IFilterCatalog[] = [
  { value: 'Amoricci', id: 1, name: 'Градиенты' },
  { value: 'Aquamarine', id: 2, name: 'Акварель' },
];

export const filterColorsData: IFilterCatalog[] = [
  { value: 'magento', id: 1, name: 'Розовый' },
  { value: 'purple', id: 2, name: 'Сереневый' },
];
