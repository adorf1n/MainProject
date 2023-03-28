import ky from 'ky';

import { IData } from './slideData';

const address = ky.create({ prefixUrl: import.meta.env.VITE_STRAPI_API });

export const fetchSlider = () =>
  address.get('service-page-sliders').json<{ data: IData[] }>();
