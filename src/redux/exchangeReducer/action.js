export const UPDATE_EXCHANGE = 'UPDATE_EXCHANGE';
export const UPDATE_REQUEST = 'UPDATE_REQUEST';
export const SET_LOADING = 'SET_LOADING';

export const updateExchange = (data) => ({data,type: UPDATE_EXCHANGE});
export const setLoading = (data) => ({data,type: SET_LOADING});
export const updateRequest = () => ({type: UPDATE_REQUEST});