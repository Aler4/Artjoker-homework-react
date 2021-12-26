import { call, put, takeLatest} from '@redux-saga/core/effects';
import { setLoading, updateExchange, UPDATE_REQUEST} from "./action";

export default function* watchCurrency (){
    yield takeLatest(UPDATE_REQUEST,updateCurrencySaga)
}

function* updateCurrencySaga(action) {
    try {
        yield put(setLoading(true));
        const data = yield call(() => {
            return fetch(' https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11', {
                method: 'GET',
            }).then(res => res.json())
        });
        yield put(updateExchange(data))
        yield put(setLoading(false));
    }
    catch (e) {
        console.log(e);
    }
};