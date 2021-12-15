import {ADD_EDIT_ITEM, ADD_ITEM, CHANGE_ITEM, DELL_ALL, DELL_ITEM, SELECT_ITEM} from "./action";

const initialState = {
    current: {name: '', date: '', id: 1,isSelect: false},
    todo: []
};

export const todoReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                todo: [
                    {
                    name: action.data.name,
                    date: action.data.date,
                    id: action.data.id,
                    isSelect: false
                    }
                    ,...state.todo
                ],
                current: {
                    name: '',
                    date: '',
                    id: state.current.id+1,
                    isSelect: action.data.isSelect}
            }
        case SELECT_ITEM:
            return {
                ...state,
                current: {...state.todo.filter((item) => item.id === action.data.id)[0], isSelect: true}
            }
        case CHANGE_ITEM:
            return {
                ...state,
                current: {...state.current, name: action.data}
            }
        case ADD_EDIT_ITEM:
            return {
                ...state,
                todo: state.todo.map(item => {
                    if(item.id === action.data.id){
                        action.data.isSelect = false
                        item = action.data;
                    }
                    return item;
                }),
                current: {
                    name: '',
                    date: '',
                    id: (state.todo.sort((a,b) => b.id - a.id)[0].id) +1,
                    isSelect: false}
            }

            case DELL_ITEM:
            return {
                ...state,
                todo: state.todo.filter((todo) => (action.data !== todo.id ))
            }
            case DELL_ALL: return initialState;
        default: return initialState;
    }
}