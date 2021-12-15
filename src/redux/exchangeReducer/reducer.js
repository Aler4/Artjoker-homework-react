import {UPDATE_EXCHANGE} from "./action";

const initialState = {
    currency: {
        isLoading: true,
        items: null
    }
}

export const exchangeReducer = (state = initialState,action) => {
        switch (action.type) {
            case UPDATE_EXCHANGE:
                return {
                    ...state,
                    currency: {
                        items: [...action.data],
                        isLoading: false
                    }
                }
            default: return initialState;
        }
}