import React from "react";

const Footer =()=>{
    return(
        <div className="w-full flex flex-col items-start " style={{backgroundColor:"#245852"}}>
            <h1 className="text-gray-300 p-5 text-3xl">
                Alivio
            </h1>
            <ul className="flex flex-col  text-gray-300 ml-12 p-3">
                <li className="p-3 ">Why Alivio</li>
                <li className="p-3 ">Solutions</li>
                <li className="p-3 ">Community</li>
                <li className="p-3 ">Pricing</li>
            </ul>
        </div>
    );
}


export default Footer;