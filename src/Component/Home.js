
import React from 'react';
import LeftSide from './leftSide.js';
import RightSide from './rightSide.js';
import Main from './main.js'
const Home = () => {
  return (
  <div>
    <section className="text">
      <div className="pt-20 px-3 font-bold md:flex justify-center md:text-2xl " style={{ fontSize: "12px" }}>
        <p className="text-blue-500 font-sans">Hiring in a hurry?</p>
        <p>- Find talented pros in record time with Upwork and keep your business moving.</p>
      </div>
    </section>
    
    <section className="contain md:flex p-4 pt-12 md:justify-between
    overflow-y-scroll  ">
    
       <LeftSide />
       <Main />
       <RightSide/>
    </section>
  </div>
  );
}

export default Home;
