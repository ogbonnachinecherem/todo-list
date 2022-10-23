let initialState= {
    forms: [
    
    ],
 };
let TodoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FORM":
      return {...state, forms: action.payload}
      case "DELETE_FORM": 
      const unDeletedForms = state.forms.filter((form) =>
      form.id!== action.payload)
      return {...state, forms: unDeletedForms}
      case "EDIT_FORM":
        const updatedForm = state.forms.map((form) => {
          if(form.id === action.payload.id){
            return action.payload
          }
          else {return form}
        })
        return {...state, forms: updatedForm }
    default:
      return state;  
  }
 
};
export default TodoReducers;