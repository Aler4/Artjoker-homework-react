import {all} from "@redux-saga/core/effects";
import watchCurrency from "./exchangeReducer/sagas";

export default function* rootSaga() {
    yield all([
        watchCurrency()
    ])
};