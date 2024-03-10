/* eslint-disable no-unused-vars */

import logo from "../../assets/logo (3).png"
import Search from "../../assets/Icon.png"
import card from "../../assets/Cart.png"
import favourite from "../../assets/Favourites.png"
import User from "../../assets/Admin.png"
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start  hidden lg:block  " >
                    <ul className="flex gap-[50px]  text-[#270A05] text-[16px] font-semibold">
                        <li><a href="">Home</a></li>
                        <li><a href="">Page</a></li>
                        <li><a href="">Menu</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
                <div className="md:navbar-center lg:flex">
                    <img src={logo} alt="" />

                </div>
                <div className="navbar-end">
                    <div className="px-4 md:px-16 gap-1 md:gap-3 flex">
                        <div>
                            <img className="mt-2" src={Search} alt="" />
                        </div>
                        <div>
                            <img src={favourite} alt="" />
                        </div>
                        <div>
                            <img src={card} alt="" />
                        </div>

                    </div>
                    <div className="flex gap-4" >
                        <img src={User} alt="" />
                        <h1>Sign In</h1>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;

