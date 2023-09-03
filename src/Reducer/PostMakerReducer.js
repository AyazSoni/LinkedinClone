import {DataUpload} from "../Action/Action.js";
import {postdata} from "../Action/Action.js";

const initialState = {
  loding : false,
  postData : [],
};

const PostReducer = ( state = initialState , action) => {
   switch(action.type) {
     case postdata : 
       return{
         ...state,
         postData : action.payload,
       };
       
     case  DataUpload :
       return {
         ...state,
         loding : action.payload,
       };
     
     default :
      return state;
   }
}

export  default PostReducer;