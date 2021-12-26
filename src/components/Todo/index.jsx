import {DelButton, TodoContainer, TodoInfo, TodoInfoDate, TodoInfoTitle} from "./styled";
import React, {useCallback} from "react";
import {useDispatch} from "react-redux";
import {delItem, editItem} from "../../redux/todoReducer/action";

export function Todo({todo}) {

    const dispatch = useDispatch();
    const handleEdit = useCallback(() => {
        dispatch(editItem(todo))
    },[dispatch,todo])

    const handleDelete = useCallback((e) => {
        dispatch(delItem(todo.id))
    },[dispatch,todo])

    return (
        <TodoContainer>

            <TodoInfo>
                <TodoInfoTitle onClick={handleEdit}>
                    {todo.name}
                </TodoInfoTitle>
                <TodoInfoDate>
                    {todo.date}
                </TodoInfoDate>
            </TodoInfo>

            <DelButton type='submit' value='X' onClick={handleDelete}/>
        </TodoContainer>
    )
}