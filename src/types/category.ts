import { BaseParams } from './index';

export interface ICategory extends BaseParams {
  title: string;
  type: string;
  catalogs: any[];
}
