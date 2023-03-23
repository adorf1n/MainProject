export interface ISlideData {
  id: number;
  title: string;
  text: string;
  image: string;
}

export const slideData: ISlideData[] = [
  {
    id: 1,
    title: 'Художественное оформление вертикальных поверхностей',
    text: 'Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.',
    image: '/img/background.png',
  },
  {
    id: 2,
    title:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit In fringilla ex auctor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla ex auctor, egestas nulla in, egestas est. Etiam sed tempus enim, eu consequat purus. In hac habitasse platea consectetur adipiscing elit egestas nulla in, egestas est.',
    image: '/img/background.png',
  },
];
