import React, {useCallback, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ClearBtn, List} from "./styled";
import {todoSelector} from "../../redux/todoReducer/selector";
import {Todo} from "../Todo";
import {dellAllItem} from "../../redux/todoReducer/action";


export function TodoList() {
    const todos = useSelector(todoSelector);
    const dispatch = useDispatch();

    const dellAllHendler = useCallback(() => {dispatch(dellAllItem())},[todos])

    const mappedTodos = useMemo(() => {
        return todos.map(item => (<Todo key={item.id} todo = {item} />))
    },[todos]);

    return(<>
        <List>
            {mappedTodos}
        </List>
            <ClearBtn onClick={dellAllHendler}>Delete All</ClearBtn>
        </>
    )
}