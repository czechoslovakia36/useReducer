 export const INITIAL_STATE= {
    title: "",
    desc: "",
    price: 0,
    category: "",
    tags: [],
    images: {
      sm: "",
      md: "",
      lg: "",
    },
    quantity: 0,
  }

  export const  formReducer = (state,action) => {
       switch(action.type){
        case "CHANGE_INPUT":
            return {
                ...state,
                [action.payload.name]:action.payload.value
            };
        case "ADD_TAG":
            return {};
        case "REMOVE_TAG":
            return {};
        case "INCREASE":
            return {};
        case "DECREASE":
            return {};
        default:
            return state;

       }
      



  }