import React from "react";
import BackGroundImg from "../../assets/BG.png"
import "./index.css"


const Banner =()=>{
    return(
        <div className="w-full flex justify-center">
        <div className="w-full flex  bg-yellow-600 2xl:w-full  h-40 sm:h-60" class="container" style={{backgroundImage: `url(${BackGroundImg})`, backgroundRepeat:"no-repeat",backgroundSize:"cover" , }}>
            <div className="flex flex-col w-44  text-base font-semibold text-green-600 items-start p-5 sm:text-3xl lg:text-5xl sm:w-56 sm:py-12 lg:w-80">
                <h1 style={{fontFamily:'roboto'}}>
                    Be aware,
                </h1>
                <h1 style={{fontFamily:'roboto'}}>
                    Manage well.
                </h1>
                <p className=" text-gray-600 font-medium  text-xs w-40 text-left sm:text-sm lg:text-lg lg:w-64">
                    Every experiences stresses different ways.
                    Let Alivio guide you in a peronlized journal experience, to over come your stress.
                </p>
                <button className="bg-green-600 w-24 rounded-md ml-32 -mt-3 h-8 text-sm text-white lg:w-40 lg:h-14 lg:text-lg lg:rounded-lg  lg:ml-0 lg:mt-10">
                    Find Your Way
                </button>
            </div>
        </div>
        </div>
    );
}


export default Banner;