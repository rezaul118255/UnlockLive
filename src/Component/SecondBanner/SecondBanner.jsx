
import logo from "../../assets/Group 1000008458.png"
import logo1 from "../../assets/Group 1000008461.png"
const SecondBanner = () => {
    return (
        <div className="h-[246px] bg-[#FFFAF2] flex-1 md:flex items-center justify-center text-[#270A05]  ">
            <div className="bg-[#86371C] w-[320px] h-[326px]">
                <img className="mt-4 h-36" src={logo1} alt="" />
                <img className="mx-6 mt-10 h-18" src={logo} alt="" />
            </div>
            <div className="mx-8 mt-8 md:mt-0">
                <h1 className="text-[24px] font-semibold abril ">Our Opening Hours</h1>
                <h1 className="text-[16px] font-normal valueSansPro mt-3">Mon - Sat: 07:00 - 18:00</h1>
                <h1 className="text-[16px] font-normal valueSansPro">Only Sun: 09:00 - 14:00</h1>

            </div>
            <div className="border-l-[1px] border-[#270A05] mt-8 md:mt-0">

                <div className="mx-8">
                    <h1 className="text-[24px] font-semibold abril ">Our Live Location</h1>
                    <h1 className="text-[16px] font-normal valueSansPro mt-3">848 A 28TH ST, Brooklyn</h1>
                    <h1 className="text-[16px] font-normal valueSansPro">Brooklyn New York, UK</h1>
                </div>

            </div>
            <div className="border-l-[1px]  border-[#270A05] mt-8 md:mt-0">
                <div className="mx-8">
                    <h1 className="text-[24px] font-semibold abril ">Book A Table Nows</h1>
                    <h1 className="text-[16px] font-normal valueSansPro mt-3">+1 318-254-6849</h1>
                    <h1 className="text-[16px] font-normal valueSansPro">+1 452-754-6579</h1>
                </div>


            </div>


        </div>
    );
};

export default SecondBanner;