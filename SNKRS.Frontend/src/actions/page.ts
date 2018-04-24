import { Page } from '@src/interfaces/page';

export const FETCH_PAGE = 'FETCH_PAGE';
export const FETCH_PAGE_DONE = 'FETCH_PAGE_DONE';

export const fetchPageAction = (url: string) => ({
    type: FETCH_PAGE,
    payload: url
});

export const fetchPageDoneAction = (page: Page) => ({
    type: FETCH_PAGE_DONE,
    payload: page
});