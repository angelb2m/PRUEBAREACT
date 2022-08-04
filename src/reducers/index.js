const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_PARENT':
        return {
          ...state,
          selectedParent: [...state.selectedParent, action.payload]
        }

      case 'LOAD_PARENT':
        return {
          ...state,
          currentParents: [...state.currentParents, action.payload]
        }
      default: 
        return state;
    }
  }
  
  export default reducer;
