export const AddForms =(newForm)=>{
    return{
      type:"ADD_FORM",
      payload:newForm
    }
  
  }
  export const DeleteForm = (id) => {
    return {
      type: "DELETE_FORM",
      payload: id
    }
  }
  
  export const EditF = (Data) => {
    return {
      type: "EDIT_FORM",
      payload: Data
    }
  }

  