
import image from "../../assets/Layer 1 5.png"
const ChooseUs = () => {
    return (
        <div className="grid grid-cols-1 gap-32 md:grid-cols-2 mt-20">
            <div className="text-[#270A05]">
                <div className="mt-[450px] md:mt-0">
                    <h1 className="text-[#86371C] text-[16px]">   -----Why Choose Us</h1>
                    <h1 className="bakilda text-[44px] font-normal text-[#270A05] leading-[60px]">Choosing Unlocklive, A Taste of Perfection</h1>
                    <p className="ValueSansPro text-[16px] mt-4 leading-[27px] opacity-[60%]">Unlocklive takes pride in the art of roasting, transforming raw coffee beans into a symphony of aromatic notes and rich flavors.</p>
                </div>
                <div className="flex-1 md:flex gap-4 mt-4 ">
                    <div className="h-[143px] w-[203px] border-[1.5px] rounded-xl border-[#270A05] border-opacity-[10%] ">
                        <h1 className=" text-center mt-6 bakilda text-[44px] font-normal">20+</h1>
                        <h1 className=" text-center bakilda text-[20px] mt-2">Years Experience</h1>

                    </div>
                    <div className="h-[143px] w-[203px]  mt-6 md:mt-0 border-[1.5px] rounded-xl border-[#270A05] border-opacity-[10%] ">
                        <h1 className=" text-center mt-6 bakilda text-[44px] font-normal">100+</h1>
                        <h1 className=" text-center bakilda text-[20px] mt-2">Master Chefs</h1>

                    </div>
                    <div className="h-[143px] w-[203px]  mt-6 md:mt-0 border-[1.5px] rounded-xl border-[#270A05] border-opacity-[10%] ">
                        <h1 className=" text-center mt-6 bakilda text-[44px] font-normal">30+</h1>
                        <h1 className=" text-center bakilda text-[20px] mt-2">Achievements</h1>

                    </div>
                </div>
                <h1 className="mt-8 ValueSansPro text-[16px] opacity-[60%] leading-[27px]">Your choice to savor our coffee is an invitation to experience the epitome of craftsmanship, flavor, and dedication.</h1>
                <button className="mt-12 button border font-semibold text-[#86371C] border-[#86371C] h-[52px] w-[211px] rounded-[10px] ">
                    EXPLORE OUR MENU
                </button>
            </div>
            <div className="">
                <img className="w-[400px]" src={image} alt="" />
            </div>
        </div>
    );
};

export default ChooseUs;