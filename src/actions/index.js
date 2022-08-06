import { SET_CHILDS, SET_LOADING, SET_PARENTS, SET_ITEM } from './type';


export const setParents = (payload) => ({
  type: SET_PARENTS,
  payload,
});

export const setChilds = (payload) => ({
  type: SET_CHILDS,
  payload,
});

export const setItem = (payload) => ({
  type: SET_ITEM,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});