import { AnyAction } from "redux";
import { Page } from "@src/interfaces/page";
import { FETCH_PAGE, FETCH_PAGE_DONE } from "@src/actions/page";

const initialState: any = {
    loading: false
};

const pageReducer = (state: Page = initialState, action: AnyAction): Page => {
    switch (action.type) {
        case FETCH_PAGE:
            return { ...state, loading: true };
        case FETCH_PAGE_DONE:
            return { ...action.payload, loading: false };
        default:
            return state;
    }
};

export default pageReducer;
