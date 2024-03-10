
import logo from "../../assets/logo (3).png"
import facebook from "../../assets/Facebook.png"
import linkedin from "../../assets/Linkedin.png"
import twitter from "../../assets/Twitter.png"

const Footer = () => {
    return (
        <div className="h-[110px] bg-[#270A05] flex justify-between my-12  items-center mt-10" >

            <div>
                <img className="mx-6" src={logo} alt="" />
            </div>
            <div>
                <ul className="text-white flex  ValuSansPro text-[16px] leading[16px] font-normal gap-9">
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Cookies</li>
                </ul>

            </div>
            <div className="mx-6">
                <button>
                    <img className="text-[#FFFFFF]" src={facebook} alt="" />
                </button>
                <button>
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