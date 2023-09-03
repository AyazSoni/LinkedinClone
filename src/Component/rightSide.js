/*import hashtag from "https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs";*/
import feed from "../Images/feed-icon.svg";
import arrow from "../Images/right-icon.svg";

const RightSide = () => {
  return(
  <div className="Container my-7 mb-16 md:my-0 md:ml-8">
     <div  className="bg-white shadow-gray-400 shadow rounded-2xl pt-2">
       <button className="flex px-4 py-1 font-bold text-gray-700" > 
         <p className="w-40 text-left pt-1" 
         style={{ fontSize: "14px" }}
         > Add to your feed </p>
         <img src={feed} alt="" className="w-5 md:ml-12 mt-1  ml-28" />
       </button>
       <div className="pl-4  pt-4 flex text-left">
          <a>
            <img src="https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs" alt="" className="" />
          </a>
          <div className=" flex  flex-col mt-1 ml-3  text-gray-700 font-bold">
            <span >  #linkedin </span>
            <button className="border-2 border-gray-700 border-solid rounded-2xl py-1 px-4 text-gray-500"
            style={{ fontSize: "12px" }}
            > Follow </button>
          </div>
       </div>
       
        <div className="pl-4  pt-4 flex ">
          <a>
            <img src="https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs" alt="" className="" />
          </a>
          <div className=" flex flex-col mt-1 ml-3 text-gray-700 font-bold ">
            <span className="font-bold">  #Video </span>
            <button className="border-2 border-gray-700 border-solid rounded-2xl py-1 px-4 text-gray-500"
            style={{ fontSize: "12px" }}
            > Follow </button>
          </div>
       </div>
       <button className=" font-bold text-left text-blue-500 flex p-4 pl-5"
       style={{ fontSize: "13px" }}
       >
          <span> View all recommendations </span>
          <img src={arrow} alt="" className="" />
       </button>
     </div>
     
     <div className="bg-white shadow-gray-400 shadow rounded mt-3 h-8 ">
     
     </div>
  </div>
  );
}

export default RightSide;