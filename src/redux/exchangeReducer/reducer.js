import {SET_LOADING, UPDATE_EXCHANGE} from "./action";

const initialState = {
    currency: {
        isLoading: false,
        items: null,
    }
}

export const exchangeReducer = (state = initialState,action) => {
        switch (action.type) {
            case UPDATE_EXCHANGE:
                return {
                    ...state,
                    currency: {isLoading:false, items: [...action.data]}
                }
            case SET_LOADING:
                return {
                    ...state,
                    currency: {...state.currency, isLoading: action.data,},
                }
            default: return initialState;
        }
}