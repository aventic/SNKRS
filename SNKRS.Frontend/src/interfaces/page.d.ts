import { Seo } from '@src/interfaces/seo';

export interface Page {
    content: string;
    headline: string;
    seo: Seo;
    mainMenu: any;
}