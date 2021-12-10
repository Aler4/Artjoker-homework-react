import {Form, Input} from "./styled";
import {useCallback, useState} from "react";

export function InputField() {
    const [value,setValue] = useState('');

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
        console.log(value);
    })


    return (
        <Form>
        <Input
            value ={value}
            onChange={handleChange}
            type='text' name='todo'
            placeholder='Enter your todo...'
        />
        </Form>
    )
}