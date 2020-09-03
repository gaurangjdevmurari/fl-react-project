import * as Constants from "../constants";

export const initialState = {
    query: "",
    format: "",
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case Constants.CHANGE_FILTER:
            return {
                ...state,
                ...action.payload,
            };

        default:
            throw new Error();
    }
}
