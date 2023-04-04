import ky from 'ky';

import { ICategory } from '../types/category';
import { IData } from './../containers/ServiceSlider/slider';
import { IGoods } from './../types/goods';

const address = ky.create({ prefixUrl: import.meta.env.VITE_STRAPI_API });

export const fetchSlider = () =>
  address.get('service-page-sliders').json<{ data: IData[] }>();

export const postOffer = (data: { name: string; phone: string }) => {
  return address.post('offers', { json: data });
};

export const postBigOffer = (formData: FormData) => {
  return address.post('big-offers', { body: { data: formData } });
};

export const fetchCatalog = () => {
  return address.get('categories').json<{ data: ICategory[] }>();
};

export const fetchGoods = () => {
  return address.get('catalogs').json<{ data: IGoods[] }>();
};
