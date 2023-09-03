
import cardBg from "../Images/card-bg.svg";
import photo from "../Images/photo.svg";
import network from "../Images/widget-icon.svg";
import item from "../Images/item-icon.svg";
import plus from "../Images/plus-icon.svg";
import {connect} from "react-redux";

const LeftSide = (props) => {
  return(
  <div className="Container md:pl-8 md:w-56 ">
    {/* first card showing personal info. */}
     <div className="Card bg-white rounded-xl shadow-gray-400 shadow ">
     {/* userPhoto*/ }
       <div className="userPhoto">
           <img className="h-14 w-full rounded-t-xl" src={cardBg} alt="" />
           <div class="w-16 h-16 bg-white relative  rounded-full m-auto flex items-center
             bottom-8">
             <img className="w-10 h-10 mx-auto z-0" src={photo} alt="" />
           </div>
           <p className="font-bold relative bottom-5">
             <span>Welcome,</span>
             <span> {props.user ? props.user.displayName : "there"}!</span>
           </p>
           <p className="relative bottom-4 text-blue-500 font-bold " 
           style={{ fontSize: "12px" }}
           > Add a photo</p>
       </div>
         <hr />
         <div className="network flex p-2 py-3 justify-between font-bold "
         style={{ fontSize: "12px" }}
         > 
         <div className="text-left">
           <p className="text-gray-500"> Connections </p>
           <p> Grow your network </p>
         </div>
           <img className="" src={network} alt="" />
         </div>
          <hr />
          
      <div className=" item flex py-3 p-2">
         <img className="" src={item} alt="" />
         <p className="font-bold"
            style={{ fontSize: "11px" }}
         > My items </p>
      </div>
     </div>
     {/* card 2  showing our network*/}
     <div className=" card-2 bg-white rounded-xl shadow-gray-400  shadow mt-2 ">
     <div className="follow  flex justify-between">
       <div className="text-left font-bold p-2 leading-6 pl-3 "
        style={{ fontSize: "11px" }}  >
           <p> Groups </p>
           <p> Events </p>
           <p> Follows Hastags </p>
       </div>
       <img className=" pr-4" src={plus} alt="" />
      </div>
      <hr />
      <div className="text-left font-black font-bold py-3 pl-3 text-gray-500"
      style={{ fontSize: "11px" }}
      >
       <p> Discover more </p>
      </div>
     </div>
  </div>
  );
}

const mapStateToProps = (state) => ({
  user : state.UserReducer.user,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps , mapDispatchToProps)(LeftSide);