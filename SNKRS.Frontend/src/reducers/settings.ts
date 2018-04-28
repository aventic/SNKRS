import { AnyAction } from 'redux';
import { Settings } from '@src/interfaces/settings';

const initialState: any = {};

const settingsReducer = (state: Settings = initialState, action: AnyAction): Settings => {
    switch (action.type) {
        default:
            return state;
    }
};

export default settingsReducer;
