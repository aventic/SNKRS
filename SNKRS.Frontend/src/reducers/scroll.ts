import { AnyAction } from 'redux';
import { SCROLL } from '@src/actions/scroll';

const initialState: any = {
    topBarActive: false
};

const scrollReducer = (state: any = initialState, action: AnyAction) => {
    switch (action.type) {
        case SCROLL:
            if (action.payload > 0) {
                return { topBarActive: true };
            }

            return state;
        default:
            return state;
    }
};

export default scrollReducer;
