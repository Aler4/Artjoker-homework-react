export const ADD_ITEM = 'ADD_ITEM';
export const DELL_ITEM = 'DEL_ITEM';
export const SELECT_ITEM = 'SELECT_ITEM';
export const ADD_EDIT_ITEM = 'ADD_EDIT_ITEM';
export const CHANGE_ITEM = 'CHANGE_ITEM';
export const DELL_ALL = 'DEL_ALL';


export const addItem = (data) => ({data, type: ADD_ITEM});
export const delItem = (data) => ({data, type: DELL_ITEM});
export const editItem = (data) => ({data, type: SELECT_ITEM});
export const changeItem = (data) => ({data, type: CHANGE_ITEM});
export const addEditItem = (data) => ({data, type: ADD_EDIT_ITEM});
export const dellAllItem = (data) => ({data, type: DELL_ALL});
