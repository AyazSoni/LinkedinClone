import homelogo from  "../Images/home-logo.svg";
import search from "../Images/search-icon.svg";
import nav_home from "../Images/nav-home.svg";
import nav_network from "../Images/nav-network.svg";
import nav_jobs from "../Images/nav-jobs.svg";
import nav_messaging  from "../Images/nav-messaging.svg";
import nav_notification from "../Images/nav-notifications.svg";
import user from "../Images/user.svg";
import down from "../Images/down-icon.svg";

const Header = () => {
  return(
    <div className="">
       <div className="flex p-1 bg-white">
        <img className=" pl-5" src={homelogo} alt="" />
        <img  className="bg-gray-200  pl-3 ml-3 "src={search} alt="" />
        <input  className="bg-gray-200 pl-3 "type="text" placeholder="Search" />
      </div>
      
      <div className="bg-white flex absolute bottom-0
       ">
  <div>
    <img className="pl-6 p-3" src={nav_home} alt="" />
    <p>Home</p>
  </div>

  <div>
    <img className="pl-6 p-3" src={nav_network} alt="" />
    <p>Network</p>
  </div>

  <div>
    <img className="pl-6 p-3" src={nav_jobs} alt="" />
    <p>Jobs</p>
  </div>

  <div>
    <img className="pl-6 p-3" src={nav_messaging} alt="" />
    <p>Messaging</p>
  </div>

  <div>
    <img className="pl-6 p-3" src={nav_notification} alt="" />
    <p>Notification</p>
  </div>
</div>

       <div className=" pl-6 p-3">
         <img  className="" src={user} alt="" />
         <p> me </p>
         <img   src={down} alt="" />
      </div>
      </div>

    </div>
    );
}

export default Header;