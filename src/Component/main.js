
import user from "../Images/user.svg";
import image from "../Images/image.svg";
import video from "../Images/film.svg";
import event from "../Images/calendar-event.svg";
import article from "../Images/journal-text.svg";
import more from "../Images/three-dots.svg";
import post1 from "../Images/kvr6clvo_home-decor-650_625x300_15_October_21.jpg";
import clap from "../Images/clapping.png";
import like from "../Images/563_facebook_like.jpg";
import like2 from "../Images/hand-thumbs-up.svg";
import comment from "../Images/chat-text.svg";
import share from "../Images/share.svg";
import send from "../Images/send-fill.svg";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import PostMake from "./postMake.js";
import React , {useState , useEffect} from "react";
import loding from "../Images/Spin-1s-200px.svg"
import {getpostArticle} from "../Action/index.js";
import ReactPlayer from 'react-player';

const Main = (props) => {
  
  useEffect(() => {
  props.getpostArticle();
  } , [props.postData]);
  
 const [postMaker , setPostMaker] = useState('close');
 
// {props.user && <Redirect to="/"/>}

  {if ( !props.user) {
    return <Redirect to="/" />;
  }}
  return(
    /* main container*/
  <div className=" container my-10 md:my-0 
    md:ml-6 md:w-[25.625rem]">
    {/* 1. share post */}
       <div className="sharePost bg-white shadow-gray-400 shadow rounded pt-2">
          
           <div className="flex p-2"  >
          
           {
             props.user && props.user.photoURL ?
             (<img className="w-10 rounded-3xl mr-2" src={props.user.photoURL} alt=""/>) :
             (<img className="w-10 rounded-3xl mr-2" src={user} alt=""/>)
           }
           
              <button className="border border-solid border-gray-400 rounded-2xl
              p-2 py-0 pr-44 md:pr-64 font-bold"
              style={{ fontSize: "12px" }}
              disabled={props.loding ? true : false}
               onClick={ () => setPostMaker('open')}> start a post </button>
           </div>
           <div className="link  flex flex-row justify-between p-2 text-blue-400
           font-bold"
           style={{ fontSize: "12px" }}>
               <button className="flex">
                <img className="pr-1" src={image} alt=""/>
                <p> Photo </p>
                </button>
                
                <button className="flex">
                <img className="pr-1" src={video} alt=""/>
                <p> Video </p>
                </button>
                
                <button className="flex" >
                <img className="pr-1" src={event} alt=""/>
                <p> Event </p>
                </button>
                
                <button className="flex">
                <img className="pr-1" src={article} alt=""/>
                <p>  Article </p>
                </button>                
           </div>
       </div>
       
       <div className="flex justify-center p-1">
         {props.loding && <img src={loding} />}
       </div>
       <div>
       {/* post of user */}
       {
       props.postData.map((post , index) => (
       <div className="post bg-white mt-2  shadow-gray-400 shadow rounded mb-6" key={index}>
       <div className="">
         <div className="flex p-2">
     <img className="w-12 pr-2" src={post.actor.image} alt=""/> 
           <div className="text-left text-gray-700" 
           style={{ fontSize: "10px" }} >
           <p className="font-bold">{post.actor.name } </p>
           <p> {post.actor.email} </p>
  <p>{post.actor.date.toDate().toLocaleDateString()}</p>
           </div>
           <button >
             <img className="pl-32 md:pl-52 relative bottom-3" src={more} alt=""/>
           </button>
         </div>
         <div className=" font-bold  text-gray-700 text-left pl-2 p-1"
         style={{ fontSize: "11px" }}>
           <p> {post.description} </p>
         </div>
         
         <div className="bg-black" >
           {
  !post.sharedImg && post.video ? (
    <div className=" h-fit w-full"><ReactPlayer width={"100%"}  url={post.video} /> </div>
  ) : post.sharedImg && (
    <img className="max-h-80 mx-auto" src={post.sharedImg} alt="" />
  )
}        
         </div>
         
         <div className="flex p-1">
            <button className="flex "
            style={{ fontSize: "12px" }}
            >
             <img className="w-6 " src={like} alt=""/>
              <img className="w-4 relative right-1" src={clap} alt=""/>
              <p className="font-bold text-gray-600"> 75 </p>
            </button>
            <button className="flex ml-3 text-blue-500 font-bold  "
            style={{ fontSize: "12px" }}
            >
              <p className="pr-1"> 0 </p>
              <p> comments </p>
            </button>
         </div>
         <hr />
         <div className="flex justify-between p-2 text-gray-500 font-bold justify-items-start pt-3 "
         style={{ fontSize: "12px" }}
         >
             <button className="flex pl-1">
                <img className="pr-1" src={like2} alt=""/>
                <p> Like </p>
                </button>    
                
                 <button className="flex">
                <img className="pr-1" src={comment} alt=""/>
                <p>  Comments </p>
                </button>      
                
                 <button className="flex">
                <img className="pr-1" src={share} alt=""/>
                <p>  Share </p>
                </button>         
                
                 <button className="flex pr-3">
                <img className="pr-1 " src={send} alt=""/>
                <p>  Send </p>
                </button>         
         </div>
       </div>
       </div>
         )
         )
       }
       </div>
          <PostMake postMaker={postMaker} setPostMaker={setPostMaker} />
     
   </div>

       
  );

}
const mapStateToProps = (state) => {
  return {
  user : state.UserReducer.user,
  loding : state.PostReducer.loding,
  postData : state.PostReducer.postData,
};
}

const mapDispatchToProps = (dispatch) => ({
  getpostArticle : () => dispatch(getpostArticle()),
})

export default connect(mapStateToProps , mapDispatchToProps)(Main);
