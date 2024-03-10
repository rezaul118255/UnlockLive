// import React from 'react';
import image from "../../assets/Layer 1 1.png"
import icon1 from "../../assets/Ellipse 1549.png"
import icon2 from "../../assets/Ellipse 1550.png"
import icon3 from "../../assets/Ellipse 1551.png"
import "./Banner.css"

const Banner = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="">
                    <div className=" text-[#270A05] mt-20">
                        <h1 className="abril text-[16px]">WELCOME TO OUR</h1>
                        <h1 className="bakilda text-[60px]  md:text-[100px] font-normal">Unlocklive</h1>
                        <h1 className="bakilda text-[20px]  font-thin">Elevating Your Coffee Experience</h1>
                        <p className="valueSansPro text-[16px] mt-6 font-normal opacity-50 leading-4">Unlocklive  embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.</p>
                    </div>
                    <div className="flex mt-12 ">
                        <div>
                            <button className="text-white button bg-[#86371C] h-[52px] w-[211px] rounded-[10px] ">
                                EXPLORE OUR MENU
                            </button>

                        </div>

                        <div className="relative hidden lg:block  ">

                            <div>
                                <div className="absolute">
                                    <img className=" md:ms-[100px]" src={icon1} alt="" />
                                </div>
                                <div className="absolute">
                                    <img className="md:ms-[130px]" src={icon2} alt="" />
                                </div>
                                <div className="absolute">
                                    <img className="md:ms-[160px]" src={icon3} alt="" />
                                </div>
                            </div>
                            <div className=" md:ms-[300px]">
                                <h1 className="abril text-[24px] ">1200+</h1>
                                <p className="valueSansPro  text-[14px] font-normal">Tasty Variant Coffee</p>

                            </div>





                        </div>






                    </div>

                </div>
                <div>
                    <img className="w-[754px] h-[630px]" src={image} alt="" />

                </div>
            </div>

        </div>
    );
};

export default Banner;