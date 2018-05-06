export const SCROLL = 'SCROLL';

export const scrollAction = (amount: number) => ({
    type: SCROLL,
    payload: amount
});
