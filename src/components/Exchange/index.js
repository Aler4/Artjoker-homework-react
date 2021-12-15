import React, {useCallback, useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {currencySelector} from "../../redux/exchangeReducer/selectors";
import {getApiCurrency, roundingNumber} from "./service";
import {updateExchange} from "../../redux/exchangeReducer/action";
import {StyledBtn, StyledTable, StyledTdBased, StyledTdBuy, StyledTdCurr, StyledTdSale} from "./styled";
export const Exchange = () => {

    const currency = useSelector(currencySelector);
    const [state, setState] = useState(currency);
    const dispatch = useDispatch();

    useEffect(() => {
        setState(currency)
    },[setState]);

    const handleClick = useCallback(() => {
        getApiCurrency.then(data => dispatch(updateExchange(data))).then(setState(currency));
    });

    const row = useMemo(() => {
        const currencies = state.items;
        if(currencies !== null){
            return  currencies.map((item,index) => (
                <tr key={index}>
                    <StyledTdCurr>{item.ccy}</StyledTdCurr>
                    <StyledTdBased>{item.base_ccy}</StyledTdBased>
                    <StyledTdBuy>{roundingNumber(item.buy, 2)}</StyledTdBuy>
                    <StyledTdSale>{roundingNumber(item.sale, 2)}</StyledTdSale>
                </tr>))
        }
        setState({...state, isLoading: true})
    },[state.items]);

    const table = (
        <StyledTable>
            <tbody>
            <tr>
                <StyledTdCurr className='title'>Currency</StyledTdCurr>
                <StyledTdBased className='title'>UAH</StyledTdBased>
                <StyledTdBuy className='title'>Buy</StyledTdBuy>
                <StyledTdSale className ='title'>Sale</StyledTdSale>
            </tr>
            {row}
            </tbody>
        </StyledTable>);
    return (
        <>
            <StyledBtn onClick={handleClick}>Update</StyledBtn>
            {state.isLoading ? (<h3>Loading..</h3>) : table};
        </>
    )
};