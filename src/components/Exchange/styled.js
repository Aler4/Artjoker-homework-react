import styled from "styled-components";

export const StyledTable = styled.table`
    margin-top: 20px;
`
export const StyledBtn = styled.button`
    width: 80px;
    height: 40px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    margin: 10px 0 0;
    &:hover {
        box-shadow: inset 0px 0px 12px 0px darkslategrey;
    }
`

export const StyledTdCurr = styled.td`
    float: center;
    font-size: 1rem;
    color: cornflowerblue;
    &.title{
     font-size: 1.5rem;
     font-weight: 700;
    }
`
export const StyledTdBased = styled.td`
    padding-left: 10px;
    float: center;
    font-size: 1rem;
    color: darkgrey;
    &.title{
     font-size: 1.5rem;
     font-weight: 700;
    }
`

export const StyledTdBuy = styled.td`
    padding-left: 10px;
    float: center;
    font-size: 1rem;
    color: forestgreen;
    &.title{
     font-size: 1.5rem;
     font-weight: 700;
    }
`

export const StyledTdSale = styled.td`
    padding-left: 10px;
    float: center;
    font-size: 1rem;
    color: salmon;
    &.title{
     font-size: 1.5rem;
     font-weight: 700;
    }
`

