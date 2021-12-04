import React from "react";
import img4 from "../../assets/Image.png"
import Card1 from "../../assets/Card.png"
const Product =()=>{
    return(
        <div className="w-full flex flex-col items-center mt-10 lg:flex-row lg:justify-around">
            <div className="w-11/12 flex flex-col items-center lg:w-2/5">
                <img src={img4}></img>
                <img src={Card1} className="w-64 -mt-20"></img>

            </div>

            <div className="w-11/12 mt-10 lg:w-1/4 lg:-mt-32 text-left">
                <p className="mt-5 text-gray-600 font-semibold">Our product</p>
                <h1 className="mt-5 font-bold text-2xl text-green-600 lg:text-4xl" style={{fontFamily:"roboto"}}>You tell us your stress,
                    We make your diary
                </h1>
                <p className="mt-5 text-gray-600 font-semibold">Everyone ecperiences ut, and in different ways.
                    Let Alivio guide you, in a persinalized experience, to overcome your stress.
                </p>
                <button className="mt-5 w-40 bg-green-600 h-9 rounded-md text-white">Find Your Way</button>
            </div>
            <hr className="mt-10"></hr>
        </div>
    );
}

export default Product;