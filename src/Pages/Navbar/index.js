import React, {useState } from "react";

import { FaBars} from "react-icons/fa"


const Navbar =()=>{

    const [showMenu, setShowMenu] = useState(false);

let menu 

if (showMenu){
  menu = <div className="w-full h-80 -mt-4 bg-purple-700 flex flex-col justify-center fixed lg:hidden">
    <div className="w-full flex h-10 justify-end "> </div>
    <ul className="text-white text-lg justify-center w-full flex flex-col">
   <h1 className="lg:hidden " onClick={()=>setShowMenu(!showMenu)}>close</h1>
            <li className="text-center hover:text-gray-800 tracking-widest">About </li>
            
            <li className="text-center hover:text-gray-800 " >Products</li>
            
            <li className="text-center hover:text-gray-800 tracking-widest">Privacy</li>
            
            <li className="text-center hover:text-gray-800 tracking-widest">Service</li>
            
            <li className="text-center hover:text-gray-800 tracking-widest">Pricing</li>
            
            <li className="text-center hover:text-gray-800 tracking-widest">Contact</li>
            <button className=" bg-gray-500 rounded-full h-12 text-black font-semibold">Register</button>
            <button className="underline">login</button>
    </ul>
  </div>
}
else {
  menu = <div className="hidden">Menu is this</div>
}
    return(
            <>
                 <div className="lg:flex list-none w-full  justify-around hidden mt-5 border-b-2">
                     <h1 className="text-2xl font-bold text-green-600" >Alivio</h1>
                     <div className="flex justify-around w-1/2 font-semibold">
                         <li>Why Alivio</li>
                         <li>Solutions</li>
                         <li>Community</li>
                         <li>Pricing</li>
                     </div>
                     <div className="flex justify-around font-semibold w-2/12">
                         <li>
                            Sign in
                         </li>
                         <li className="text-white w-32 rounded-md h-7 bg-green-600" >
                             Start trial
                         </li>
                     </div>
            
          </div>

              <div className="w-full flex justify-between p-3 lg:hidden">
                  <div>
                    <h1 className="text-xl font-semibold" style={{color:"#01996d"}}>
                      Alivio
                    </h1>
                  </div>
                  <div>
                <FaBars onClick={()=>setShowMenu(!showMenu)}/>

                  </div>
                  </div>
      {
           menu
      }
            </>
    );
}


export default Navbar;