import styled from 'styled-components';

export const Form = styled.form`  
    margin: 0 auto;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const InputName = styled.input`    
    outline: none;
    background-color: whitesmoke;
    height: 40px;
    font-size: 1rem;
    width: 250px;
    border-radius: 7px;
    text-align: center;
`
export const Button = styled.input`    
    width: 50px;
    height: 50px;
    margin-top: 10px;
    border: none;
    border-radius: 50%;
    background: aquamarine;
    margin-left: 5px;
    opacity: 0.8;
    font-size: 2rem;
    color: white;
   
    &:hover{
    color: green;
    opacity: 1;
    }
`