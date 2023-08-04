
import user from "../Images/user.svg";
import image from "../Images/image.svg";
import video from "../Images/film.svg";
import event from "../Images/calendar-event.svg";
import article from "../Images/journal-text.svg";
import more from "../Images/three-dots.svg";
import post1 from "../Images/.svg";

const Main = () => {
  return(
   <div className=" container my-10">
       <div className="sharePost bg-white shadow-gray-400 shadow rounded pt-2">
           <div className="flex p-2 ">
              <img className="w-10 rounded-3xl mr-2" src={user} alt=""/>
              <button className="border border-solid border-gray-400 rounded-2xl
              p-2 py-0 pr-44 font-bold"
              style={{ fontSize: "12px" }}
              > start a post </button>
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
       
       <div className="post bg-white mt-2  shadow-gray-400 shadow rounded ">
         <div className="flex p-2">
           <img className="w-12 pr-2" src={user} alt=""/>
           <div className="text-left text-gray-700" 
           style={{ fontSize: "10px" }} >
           <p className="font-bold"> userName </p>
           <p> soniayaz541@gmail.com </p>
           <p> 22/04/2005 </p>
           </div>
           <button >
             <img className="pl-32 relative bottom-3" src={more} alt=""/>
           </button>
         </div>
         <div className=" font-bold  text-gray-700 text-left pl-2 p-1"
         style={{ fontSize: "11px" }}>
           <p> This is my first react project , hope you like it 🎉 </p>
         </div>
         
         <div>
          <img className="" src={post1} alt=""/>
         </div>
       </div>
  </div>
  );
}

export default Main;