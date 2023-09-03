import cancel from "../Images/x.svg";
import user from "../Images/user.svg";
import React , {useState} from "react";
import youtube from "../Images/youtube.svg";
import anyone from "../Images/chat-left-text.svg";
import image from "../Images/image.svg";
import ReactPlayer from 'react-player';
import {connect} from 'react-redux'; 
import {postArticleAPI} from '../Action/index.js';
//import firebase from "firebase";
import { Timestamp } from "firebase/firestore";
import {getpostArticle} from "../Action/index.js";

const PostMake = (props) => {
  const [textareaValue, setTextareaValue] = useState('');
  const [postImage , setPostImage] = useState('');
  const [videoLink , setVideoLink] = useState('');
  const [vdImgChange , setVdImgChange] = useState('');
  
  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };
  const handleImageChange = (event) => {
      const image = event.target.files[0];
      if(image == null || image == undefined){
        alert("not an image");
       return;
      }
      setPostImage(image);
  };
  const videoimage = (event) => {
      setVdImgChange(event);
      setVideoLink('');
      setPostImage('');
  }
  const reset = () => {
    props.setPostMaker('close');
    setTextareaValue('');
    setPostImage('');
    setVdImgChange('');
    setVideoLink('');
  }
  const postarticle = async (e) => {
    e.preventDefault();
    if(e.target !== e.currentTarget){
      return;
    }
/*  const timestamp = { seconds: 1630483200, nanoseconds: 0 };
  const date = new Date(timestamp.seconds * 1000);
  const timestampString = date.toDateString();*/
   
   
    const payload = {
     image : postImage,
     video : videoLink,
     user : props.user,
     description : textareaValue,
     Timestamp : Timestamp.now(),
   }
   props.postArticle(payload);
   reset();
  }
    return(
      <>
      { props.postMaker == 'open' &&
      <div className="z-50 bg-black bg-opacity-60 fixed     top-0 bottom-0 right-0
          left-0 w-full h-full flex  justify-center"
       style={{ fontSize: "12px" }}
      >
      
      <div className="Box bg-white text-black m-10 
  w-96  h-[420px] shadow shadow-black drop-shadow-md
rounded mt-3 overflow-y-scroll
      ">
         <div className="head flex justify-between  px-2 py-3 items-center
         text-gray-500
         border-b border-gray-500  border-solid font-bold">
            <p> Create a post </p>
            <button onClick={ () => reset() } >
            <img className="w-8 rounded-3xl" src={cancel}
            alt=""/>
            </button>
         </div>
         
         <div className="p-5 flex " >
            <button>
            {props.user && props.user.photoURL ? (<img className="w-10
            rounded-3xl " src={props.user.photoURL}  alt=""/>):(
            <img className="w-10 rounded-3xl " src={user}  alt=""/>)}
            </button>
            <span className="font-bold flex items-center ml-2"> {props.user ?
            props.user.displayName : "unknown"} </span>
         </div>
         <textarea name="" id="" cols="30" rows="12" placeholder="what do you
         want to talk about?" className="mr-10 px-3 md:mr-40 focus:outline-none
         resize-none
         "
         value={textareaValue}
        onChange={handleTextareaChange}
         ></textarea>
          
         
         {/* image from gallery */}
         
          <div className="flex justify-center  flex-col   ">
          <div className="overflow-y-scroll
          
          ">
          { vdImgChange == 'video' ? (
       <>
          <input className="p-2  w-72 border border-gray-300 border-solid" type="text"  placeholder="please input a video link"
         onChange={(e) => setVideoLink(e.target.value)}/>
           {videoLink &&  <div className="p-3"><ReactPlayer width={"100%"}
           url={videoLink} /> </div>}       
       </>)
       :
       ( vdImgChange == 'image' &&(
       <>
             <input type="file" name="" id="image" style={{display: "none"}}
             accept="image/*" onChange={handleImageChange}/>
         { postImage && <img src={URL.createObjectURL(postImage)}  />}
       </>
        ))
          }
         </div>
         </div>
    <div className="fixed bottom-0 left-0 right-0  bg-white" style={{ position: "sticky" }} >
        <div className="flex p-3 items-center bg-white">
          <label  for="image">
             <img  onClick={ () => videoimage('image')} className="mr-3" src={image} /> 
          </label>
          <img onClick={ () => videoimage('video')} src={youtube} />
          <img src={anyone} className=" ml-3 pl-2 border-l border-gray-400 border-solid" />
           <span className="text-gray-300 ml-1 mb-1"> anyone </span>
          <button className={` px-4 py-2 ml-16 rounded-3xl font-bold md:ml-40
            ${ textareaValue ? 'bg-blue-500 text-white' : 'text-gray-500 bg-gray-300'}`}
          onClick={ (event) => postarticle(event)}
          disabled={ !textareaValue ? true : false}
          > 
            Post
          </button>
        </div>
      </div>
  </div>
    </div>
        
      }
     </>
      
    );
}

const mapStateToProps = (state) => ({
  user : state.UserReducer.user,
})

const mapDispatchToProps = (dispatch) => ({
  postArticle : (payload) => dispatch(postArticleAPI(payload)),
  getpostArticle : () => dispatch(getpostArticle()),
})

export default connect(mapStateToProps , mapDispatchToProps)(PostMake);