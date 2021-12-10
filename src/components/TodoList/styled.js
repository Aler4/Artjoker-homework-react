import styled from 'styled-components'

export const List = styled.div`
    width: 500px;
    height: 600px;
    box-sizing: border-box;
    padding: 5px 10px;
    margin: 15px 0 10px 0;
    border-radius: 10px;
    overflow: auto;
    background: #485563;
    background: -webkit-linear-gradient(to right, #29323c, #485563);
    background: linear-gradient(to right, #29323c, #485563);
    
    &::-webkit-scrollbar {
        display: block;
        width: 6px;
        cursor: grabbing;
    }
    
    &::-webkit-scrollbar-thumb {
        visibility: hidden;
        border-radius: 10px;
        background: #485563;
        background: -webkit-linear-gradient(to right, #29323c, #485563);
        background: linear-gradient(to right, #29323c, #485563);
        &: hover{
            visibility: visible;
        }
    }
}
`
export const ClearBtn = styled.span`
    color: aquamarine;
    cursor: pointer;
    
    &:hover {
            font-weight: bold;
            color:aliceblue;
    }
`

