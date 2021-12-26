import React, {useCallback, useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {currencySelector} from "../../redux/exchangeReducer/selectors";
import {updateRequest} from "../../redux/exchangeReducer/action";
import {StyledBtn, StyledTable, StyledTdBased, StyledTdBuy, StyledTdCurr, StyledTdSale} from "./styled";
import {roundingNumber} from "./service";


export const Exchange = () => {

    const currency = useSelector(currencySelector);
    const [state, setState] = useState(currency);
    const dispatch = useDispatch();

    const handleClick = useCallback(() => {
        dispatch(updateRequest());
        setState(currency);
    },[currency,dispatch]);

    const row = useMemo(() => {
        const currencies = state.items;
        if(currencies !== null){
            return  currencies.map((item,index) => (
                <tr key={index}>
                    <StyledTdCurr>{item.ccy}</StyledTdCurr>
                    <StyledTdBased>{item.base_ccy}</StyledTdBased>
                    <StyledTdBuy>{roundingNumber(item.buy, 2)}</StyledTdBuy>
                     <StyledTdSale>{roundingNumber(item.sale, 2)}</StyledTdSale>
                </tr>)
            )
        }
    },[setState,state]);

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

    useEffect(() => {
        setState(currency)
    });

    return (
        <>
            <StyledBtn onClick={handleClick}>Update</StyledBtn>
            {state.isLoading ? (<h3>Loading..</h3>) : table};
        </>
    )
};