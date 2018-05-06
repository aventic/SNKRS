import { ISeo } from '@src/interfaces/seo';

export interface IPage {
    content: string;
    headline: string;
    seo: ISeo;
    mainMenu: any;
    loading: boolean;
}
