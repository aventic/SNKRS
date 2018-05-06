import { AnyAction } from 'redux';
import { ISettings } from '@src/interfaces/settings';

const initialState: any = {};

const settingsReducer = (state: ISettings = initialState, action: AnyAction): ISettings => {
    switch (action.type) {
        default:
            return state;
    }
};

export default settingsReducer;
