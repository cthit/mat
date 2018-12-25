import {
    APP_LOAD_RESTAURANTS_SUCCESSFULLY,
    APP_LOAD_RESTAURANTS_FAILED
} from "./App.actions";

/** root reducer */
export default {
    app
};

export function app(state = {}, action) {
    switch (action.type) {
        case APP_LOAD_RESTAURANTS_SUCCESSFULLY:
            return {
                ...state,
                ...action.payload
            };

        case APP_LOAD_RESTAURANTS_FAILED:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
}
