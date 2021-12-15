import {Button, Form, InputName} from "./styled";
import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addEditItem, addItem, changeItem} from "../../redux/todoReducer/action";
import {currentSelector} from "../../redux/todoReducer/selector";
import {getDate} from "./services";

export function InputField() {

    const current = useSelector(currentSelector);
    const [value,setValue] = useState(current);
    const dispatch = useDispatch();

    const handleName = useCallback((e) => {
        setValue({...value, name:e.target.value, id: value.id+1});
    },[current]);

    const handleClick = useCallback((e) => {
        e.preventDefault();
        value.date = getDate();
        value.isSelect === true ? dispatch(addEditItem(value)) : dispatch(addItem(value))
    },[value]);

    useEffect(()=>{
        setValue({...current})
    },[current]);

    useEffect(()=>{
        dispatch(changeItem(value.name,))
    },[value.name]);

    return (
        <Form>
        <InputName
            value ={value.name}
            onChange={handleName}
            type='text' name='todo'
            placeholder='Enter your todo...'
            autoFocus ={true}
        />
        <Button type='submit'
                value="+"
                onClick={handleClick}
        />
        </Form>
    )
}