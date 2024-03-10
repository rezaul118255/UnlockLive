
import logo from "../../assets/logo (3).png"
import facebook from "../../assets/Facebook.png"
import linkedin from "../../assets/Linkedin.png"
import twitter from "../../assets/Twitter.png"

const Footer = () => {
    return (
        <div className="md:h-[110px] bg-[#270A05] md:flex justify-between my-12 mt-[400px]  items-center md:mt-10" >

            <div>
                <img className="mx-6 mt-6 md:mt-0" src={logo} alt="" />
            </div>
            <div>
                <ul className="text-white flex mx-4 md:mx-0 py-6 md:py-0 ValuSansPro text-[16px] leading[16px] font-normal gap-9">
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Cookies</li>
                </ul>

            </div>
            <div className="mx-6 gap-4">
                <button>
                    <img className="text-[#FFFFFF]" src={facebook} alt="" />
                </button>
                <button className="mx-4">
                    <img src={linkedin} alt="" />
                </button>
                <button>
                    <img src={twitter} alt="" />
                </button>

            </div>



        </div>
    );
};

export default Footer;