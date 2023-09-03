import {userLogin} from "../Action/Action.js";

const INITIALSTATE = {
  user : null,
};

const UserReducer = (state = INITIALSTATE , action ) => {
    switch(action.type){
      case userLogin:
        return {
          ...state,
          user : action.payload,
        };
        
        default:
          return state;
    }
  };

export default UserReducer;
