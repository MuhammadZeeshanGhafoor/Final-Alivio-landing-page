import React from "react";
import Video from "../../assets/Video.png"


const About =()=>{
    return(
        <div style={{backgroundColor:"#245852"}}>
        <div className="w-full  mt-20 flex flex-col items-center lg:flex-row lg:justify-around" style={{backgroundColor:"#245852"}}>
            <div className="text-white mt-12 w-11/12 lg:w-96 lg:text-left">
                <h1 className="text-3xl lg:text-5xl" style={{fontFamily:"robot"}}>Let's hear about Kayla's success story</h1>
                <p className="text-gray-300 mt-5">
                    See how well Alivio works in a real customer's life
                </p>
                <button className="bg-green-600 w-28 rounded-md mt-10  h-8 text-sm text-white lg:w-40 lg:h-14 lg:text-lg lg:rounded-lg  lg:ml-0 lg:mt-10">
                    Let's get started
                </button>

            </div>
            <div className="w-11/12 mt-20 lg:w-2/4">
                <img src={Video}></img>
            </div>
            
        </div>
        <hr className="mt-12 lg:mt-32 " ></hr>
        </div>
    );
}

export default About;