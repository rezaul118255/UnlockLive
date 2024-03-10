
import logo1 from "../../assets/Group 1000007971.png"
import logo2 from "../../assets/Group 1000007919.png"
const CoffeeMenu = () => {
    return (
        <div>
            {/* Coffee Menu sectionCoffee Menu */}
            <div className="text-center mt-5">
                <h1 className="text-[16px] text-[#86371C] leading-[10px] font-normal">......Coffee Menu......</h1>
                <h1 className="text-[44px] bakilda mt-4 text-[#270A05] font-normal">Unlocklive Coffee Menu</h1>
            </div>
            <div className="text-[#270A05] mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="h-[144px]  p-4 rounded-2xl border border-[#270A05] border-opacity-[7%]  flex justify-center items-center gap-6">
                    <div>
                        <img src={logo1} alt="" />

                    </div>
                    <div>

                        <h1 className="abril text-[16px] md:text-[24px] font-semibold leading-[36px]">Double Espresso x2</h1>
                        <p className="ValueSansPro text-[14px] font-normal opacity-[70%] leading-6">There are many variations of passages Lorem ............................. Ipsum form</p>
                    </div>
                    <div>
                        <img src={logo2} alt="" />
                    </div>

                </div>
                <div className="h-[144px]  p-4 rounded-2xl border border-[#270A05] border-opacity-[7%]  flex justify-center items-center gap-6">
                    <div>
                        <img src={logo1} alt="" />

                    </div>
                    <div>
                        <h1 className="abril text-[16px] md:text-[24px] font-semibold leading-[36px]">Double Espresso x2</h1>
                        <p className="ValueSansPro text-[14px] font-normal opacity-[70%] leading-6">There are many variations of passages Lorem ............................. Ipsum form</p>
                    </div>
                    <div>
                        <img src={logo2} alt="" />
                    </div>

                </div>
                <div className="h-[144px]  p-4 rounded-2xl border border-[#270A05] border-opacity-[7%]  flex justify-center items-center gap-6">
                    <div>
                        <img src={logo1} alt="" />

                    </div>
                    <div>
                        <h1 className="abril text-[16px] md:text-[24px] font-semibold leading-[36px]">Double Espresso x2</h1>
                        <p className="ValueSansPro text-[14px] font-normal opacity-[70%] leading-6">There are many variations of passages Lorem ............................. Ipsum form</p>
                    </div>
                    <div>
                        <img src={logo2} alt="" />
                    </div>

                </div>
                <div className="h-[144px]  p-4 rounded-2xl border border-[#270A05] border-opacity-[7%]  flex justify-center items-center gap-6">
                    <div>
                        <img src={logo1} alt="" />

                    </div>
                    <div>
                        <h1 className="abril text-[16px] md:text-[24px] font-semibold leading-[36px]">Double Espresso x2</h1>
                        <p className="ValueSansPro text-[14px] font-normal opacity-[70%] leading-6">There are many variations of passages Lorem ............................. Ipsum form</p>
                    </div>
                    <div>
                        <img src={logo2} alt="" />
                    </div>

                </div>

            </div>
            <div className="flex justify-center items-center">
                <button className="mt-12 button border font-semibold text-[#86371C] border-[#86371C] h-[52px] w-[162px] rounded-[10px] ">
                    View All Menu
                </button>
            </div>

        </div>
    );
};

export default CoffeeMenu;