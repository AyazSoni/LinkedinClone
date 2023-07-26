
import logolinkedin from "../Images/login-logo.svg";
import hero from "../Images/login-hero.svg";
import google from "../Images/google.svg";
const Login = () => {
  return(
    <div>
      <div className="flex justify-between p-3 
           md:p-4 md:px-10 ">
        <img src={logolinkedin} alt="image1"  className="w-28 pt-1 
          md:w-40"/>
        
        <div className="">
          <button className="pr-5 font-bold
           md:text-2xl"> Join now </button>
          
          <button className="border-2  rounded-3xl w-20 h-10 font-bold
          text-gray-400
          md:text-2xl md:w-36 md:h-14" style={{color:"#406F9E" ,border:" 2px solid #406F9E"}}>
          Sign in  </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 ">
      <p className="text-center pt-12 px-5 p-3
         md:text-4xl md:text-left md:ml-4 md:mt-14" style={{color:"#406F9E"}}> Welcome to your professional Community</p>
      
      <img  className="md:mt-7" src={hero} alt="hero" />   
      </div>
       <button className="flex text-center mt-10 border border-gray-600
      justify-center h-12 bg-white items-center rounded-3xl mx-1 ml-5 w-80
       md:w-96 relative md:bottom-80
      "> 
      
        <img  src={google} alt=""/>
        
        <span> Sign in with Google </span>
      </button>
    </div>
  );
}

export default Login;