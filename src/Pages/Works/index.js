import React from "react";
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"


const Works =()=>{
    return(
        <div className="w-full  flex flex-col justify-center mt-24">
            <div className="w-full flex flex-col items-center lg:flex-row lg:justify-around">
                <div className="w-11/12 lg:w-4/12" >
                    <p className="font-semibold" >How it Works</p>
                    <h1 className="text-green-600 font-bold text-2xl lg:text-4xl" style={{fontFamily:"roboto"}}>
                        Understand & Release the stress in 3 steps
                    </h1>
                </div>
                <div className="w-11/12 lg:w-5/12 flex  items-center ">
                    <p className="text-gray-700 font-semibold">
                        Alivio offers journals it takes, tackling different areas such as anxiety, overwhelmedness, sadness, or anger, and a veriety og personal causes, to help you become aware of your emotions, and guide you in how to manage stress.
                    </p>
                </div>
            </div>

            <div className="w-full flex flex-col items-center mt-10 sm:flex-row sm:justify-around">
                <div className="w-11/12 sm:w-3/12">
                        <h1 className="text-2xl text-left font-bold " style={{fontFamily:"Roboto"}}>Personalize</h1>
                        <p className="text-gray-700 font-semibold sm:w-56 mt-5 lg:w-full"> 
                        Answer a quick survey about how you express yourself, what causes you stress, and what area would you like to work on. This way, we can fully personalize your journal!
                        </p>
                        <img className="mt-5 sm:w-96" src={img1}></img>
                </div>
                
                <div className="w-11/12 sm:w-3/12 mt-24">
                        <h1 className="text-2xl text-left font-bold " style={{fontFamily:"Roboto"}}>Write & Understand</h1>
                        <p className="text-gray-700 font-semibold sm:w-56 mt-5 lg:w-full "> 
                            Write, draw, reflect, understand. Alivio will guide you through prompts and will help you manage your stress!
                        </p>
                        <img className="mt-5 sm:w-96" src={img2}></img>
                </div>
                
                <div className="w-11/12 sm:w-3/12 mt-10">
                        <h1 className="text-2xl text-left font-bold " style={{fontFamily:"Roboto"}}>Alivio!</h1>
                        <p className="text-gray-700 font-semibold sm:w-56 mt-5 lg:w-full"> 
Now you aware, and have a way to manage and overcome your own stress. what are you waiting for? Alivio today!                        </p>
                        <img className="mt-5 sm:w-96" src={img3}></img>
                </div>
                
            </div>

            
        </div>
    );
}

export default Works;