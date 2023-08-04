// Importing image assets
import homeLogo from "../Images/home-logo.svg";
import searchIcon from "../Images/search-icon.svg";
import navHomeIcon from "../Images/nav-home.svg";
import navNetworkIcon from "../Images/nav-network.svg";
import navJobsIcon from "../Images/nav-jobs.svg";
import navMessagingIcon from "../Images/nav-messaging.svg";
import navNotificationIcon from "../Images/nav-notifications.svg";
import userIcon from "../Images/user.svg";
import downIcon from "../Images/down-icon.svg";
import workIcon from "../Images/nav-work.svg";

const Header = () => {
  return (
  <div className="">
    <div className="md:flex ">
      {/* Search bar and logo */}
      <div className="flex p-1 md:p-3 md:pl-10 bg-white w-full fixed z-10 ">
        <img className="pl-5" src={homeLogo} alt="Home Logo" />
        <img className="bg-gray-200 pl-3 ml-3" src={searchIcon} alt="Search Icon" />
        <input className="bg-gray-200 pl-3" type="text" placeholder="Search" />
      </div>

      {/* Navigation bar */}
      <div className="bg-white flex fixed w-full md:w-fit h-fit md:right-40
      bottom-0 md:top-0  z-20 ">
        <div className="pl-1">
          <img className="pl-6 p-3 pb-0" src={navHomeIcon} alt="Home" />
          <p className="pl-3" style={{ fontSize: "10px" }}>Home</p>
        </div>

        <div className="pl-2">
          <img className="pl-6 p-3 pb-0" src={navNetworkIcon} alt="Network" />
          <p className="pl-3" style={{ fontSize: "10px" }}>Network</p>
        </div>

        <div className="pl-2">
          <img className="pl-6 p-3 pb-0" src={navJobsIcon} alt="Jobs" />
          <p className="pl-3" style={{ fontSize: "10px" }}>Jobs</p>
        </div>

        <div className="pl-2">
          <img className="pl-6 p-3 pb-0" src={navMessagingIcon} alt="Messaging" />
          <p className="pl-3" style={{ fontSize: "10px" }}>Messaging</p>
        </div>

        <div className="pl-2">
          <img className="pl-6 p-3 pb-0" src={navNotificationIcon} alt="Notifications" />
          <p className="pl-2" style={{ fontSize: "10px" }}>Notifications</p>
        </div>
      </div>

      {/* User profile */}
      <div className="fixed top-0 right-0 bg-white px-3 pr-4 pt-1 md:pt-2 
      md:top-0 md:h-fit md:right-24 z-30">
        <img className=" w-6 md:w-7 rounded-2xl" src={userIcon} alt="User" />
        <p className="text-left" style={{ fontSize: "10px" }}>Me</p>
        <img className="w-3 absolute bottom-0 right-3" src={downIcon} alt="Dropdown" />
      </div>

      {/* Work icon */}
      <div className="absolute bottom-1 right-0 bg-white px-3 pt-2 md:top-0
      md:h-fit md:right-9 border-l border-l-gray-200 border-solid hidden
      md:block z-30">
        <img className="w-8 rounded-2xl" src={workIcon} alt="Work" />
        <p className="text-left" style={{ fontSize: "8px" }}>Work</p>
        <img className="w-3 absolute bottom-0 right-2" src={downIcon} alt="Dropdown" />
      </div>
    </div>
  </div>
  );
}

export default Header;
