import React from "react";
import Navbar from "../Navbar";
import BackGroundImg from "../../assets/BG.png"
import Banner from "../Banner";
import Works from "../Works";
import About from "../About";
import Product from "../Product";
import Footer from "../Footer";

const HomePage =()=>{
            return(
                <div >
                    <Navbar />

                    <Banner />

                    <Works />

                    <About />

                    <Product />
                    <Footer />
                
                </div>
            );


}


export default HomePage;