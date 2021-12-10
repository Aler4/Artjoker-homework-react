import styled from 'styled-components'

export  const TodoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 10px 5px 10px 10px;
    margin: 5px 0;
    background: #0F2027; 
    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027); 
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027); 
    
    &:hover {
    transform: scale(1.03);
    }
`
export const DelButton = styled.input`
    width: 40px;
    height: 40px;
    opacity: 0.8;
    outline: none;
    background-color: inherit;
    border-radius: 50%;
    font-weight: 800;
    color: azure;
`
export const TodoInfo = styled.div`
    width: 60%;
    text-align: left;
`
export const TodoInfoTitle = styled.div`
    font-family: 'Readex Pro', sans-serif;
    font-size: 1.5rem;
    color: lightcyan;
    overflow: hidden;
`
export const TodoInfoDate = styled.div`
    font-style: italic;
    font-size: 0.9rem;
    font-weight: 600;
    font-family: 'Readex Pro';
    color: azure;
    padding-top: 7px;
`