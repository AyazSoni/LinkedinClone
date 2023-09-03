import { signInWithPopup } from "firebase/auth";
import {auth , provider , storage , db } from "../Firebase.js";
import {connect} from "react-redux";
import React from 'react';
import {userLogin} from "./Action.js";
import { ref, uploadBytes , getDownloadURL } from 'firebase/storage';
import { addDoc, collection , getDocs , query , orderBy , doc} from "firebase/firestore";
import {DataUpload} from "./Action.js";
import {postdata} from "./Action.js";

const LodingAction = (loading) => {
  return{
    type : DataUpload,
    payload : loading
};
}
const SigninAction = (payloadUser) => {
  return{
  type : userLogin,
  payload : payloadUser
  };
}
const postDataAction = (data) => ({
    type : postdata,
    payload : data,
  });

//const payloadArray = []

const SigninAPI = () => {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(SigninAction(result.user));
      })
      .catch((error) => {
        if (error.code === 'auth/popup-closed-by-user') {
          // Handle this error by informing the user and giving them the option to retry the login.
          alert('Authentication popup was closed. Please try again.');
        } else {
          // Handle other authentication errors.
          alert(error.message);
        }
      });
  };
};

//not understand by me properly
const UserAuth = () => {
  return (dispatch) => {
    auth.onAuthStateChanged( async (user) => {
      if (user) {
        dispatch(SigninAction(user));
      }
    }
      );
  };
}

const SignOutAPI = () => {
  return (dispatch) => {
    auth.signOut().then(() => {
      dispatch(SigninAction(null));
    }).catch((error) => {
      alert(error.message);
      });
  }
}

const postArticleAPI = (payload) => {
  return  (dispatch) => {
    dispatch(LodingAction(true));
  if(payload.image !== ''){
    const imageRef = ref(storage, `/images/${payload.image.name}`);

    uploadBytes(imageRef, payload.image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
      /*  db.collection('articles').add({
        actor : {
          email : payload.user.email,
          name : payload.user.displayName,
          date : payload.timestamp,
          image : payload.user.photoURL,
        },
        video : payload.video,
        sharedImg : url,
        description : payload.description,
      });*/
      const docRef =  addDoc(collection(db, "articles"), {
         actor : {
          email : payload.user.email,
          name : payload.user.displayName,
          date : payload.Timestamp,
          image : payload.user.photoURL,
        },
        video : payload.video,
        sharedImg : url,
        description : payload.description, 
      });
      dispatch(LodingAction(false));
      });
    });
 
     /* const downloadURL = await upload.snapshot.ref.getDownloadURL();*/

   
    
    
}else if(payload.video) {
  addDoc(collection(db, "articles"), {
         actor : {
          email : payload.user.email,
          name : payload.user.displayName,
          date : payload.Timestamp,
          image : payload.user.photoURL,
        },
        video : payload.video,
        sharedImg : '',
        description : payload.description, 
      });
    dispatch(LodingAction(false));
}else{
  addDoc(collection(db, "articles"), {
         actor : {
          email : payload.user.email,
          name : payload.user.displayName,
          date : payload.Timestamp,
          image : payload.user.photoURL,
        },
        video : '',
        sharedImg : '',
        description : payload.description, 
      });
    dispatch(LodingAction(false));
}
}
}
const getpostArticle = () => {

 // return async (dispatch) => {
     /* let payload;
    try {
  
        const citiesRef = collection(db, "articles");
      const q = query(citiesRef, orderBy("actor.date", "desc")); // Add orderBy here
      const querySnapshot = await getDocs(q);
       // Initialize an array to store the data of all documents

      querySnapshot.forEach((doc) => {
        if (doc.exists()) {
           payload = doc.data(); // Store the data in the payload variable
          payloadArray.push(payload); // Add the payload to the arthe
         
        }
      });
       dispatch(postDataAction(payloadArray));
      if (payloadArray.length > 0) {
        console.log(` payload ${payload}`);
      } else {
        console.log("No documents found");
      }
    } catch (error) {
      console.error("Error fetching and logging data:", error);
    }
  };*/
  return (dispatch) => {
  let payload;
  const citiesRef = collection(db, "articles");
  const q = query(citiesRef, orderBy("actor.date", "desc")); // Add orderBy here
  const querySnapshot = getDocs(q);

  querySnapshot.then((snapshot) => { // Use 'then' instead of 'onSnapshot'
    payload = snapshot.docs.map((doc) => doc.data());
    dispatch(postDataAction(payload));
  });
}
}



export {SigninAPI , UserAuth , SignOutAPI , postArticleAPI , getpostArticle}; 