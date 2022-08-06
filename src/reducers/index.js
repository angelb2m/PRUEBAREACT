import { SET_LOADING, SET_PARENTS, SET_CHILDS, SET_ITEM } from '../actions/type';

const initialState = {
  parents: [],
  childs: [],
  selectedItem:[],
  loading: false,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PARENTS:
      return { ...state, parents: action.payload };
    case SET_CHILDS:
      return { ...state, childs: action.payload };
    case SET_ITEM:
      return { ...state, selectedItem: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};





