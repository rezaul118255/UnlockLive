/* eslint-disable react/no-unescaped-entities */
import logo from "../../assets/Image.png"
import logo1 from "../../assets/Image (1).png"
import logo2 from "../../assets/Image (2).png"
import logo3 from "../../assets/Image (3).png"
import logo4 from "../../assets/Image (4).png"


// import logo from "../../assets/Image.png"

const NewCreation = () => {
    return (
        <div className="mt-16">
            <section className="">
                <div className="text-center   md:px-48">


                    <h1 className="text-[#86371C] text-10px leading-[24px] font-normal border-bottom-1 border-[#86371C]">Showcase</h1>
                    <h1 className="text-[44px] bakilda mt-6 text-[#270A05] leading-[60px] font-normal">Our Chefs New Creations</h1>
                    <p className="ValueSansPro text-[18px] mt-10 leading-[32px] opacity-[60%]">Behold the extraordinary creations born from the synergy of our users' ingenuity and the transformative power of AI, a testament to boundless innovation.</p>

                </div>
                <div className="mt-10">
                    <ul className="ValueSansPro text-[22px] leading-[30px] font-normal gap-[24px] md:flex mx-10 md:mx-0 item-center justify-center">
                        <li className="border border-[#86371C] text-[#86371C] p-1 rounded-3xl">All</li>
                        <li>Burger</li>
                        <li>Drinks</li>
                        <li>Pizza</li>
                        <li>Dinner</li>
                        <li>Lunch</li>
                        <li>Cookies</li>
                        <li>Bakery</li>
                    </ul>
                </div>

            </section>

            <section>
                <div className="grid grid-cols-1 md:grid-cols-1 mx-3 md:mx-[100px] gap-4 mt-7">
                    <div className="grid grid-cols-12 h-[340px] gap-4 md:hidden">
                        {/* Row 1 for smaller screens (single image) */}
                        <img
                            className="col-span-full h-[330px] w-auto rounded-lg "
                            src={logo}
                            alt="Image 1 (smaller screens)"
                        />
                        <img
                            className="col-span-full rounded-lg h-[330px]"
                            src={logo1}
                            alt="Image 2"
                        />
                    </div>
                    <div className="md:grid grid-cols-12 hidden   gap-4">
                        {/* Row 1 (2 images) */}
                        <img
                            className="col-span-4 h-[330px] rounded-lg"
                            src={logo}
                            alt="Image 1"
                        />
                        <img
                            className="col-span-8 rounded-lg h-[330px]"
                            src={logo1}
                            alt="Image 2"
                        />
                    </div>
                    <div className="grid grid-cols-12 h-[340px] gap-4 md:hidden">
                        {/* Row 1 for smaller screens (single image) */}
                        <img
                            className="col-span-full h-[330px] w-auto rounded-lg "
                            src={logo2}
                            alt="Image 1 (smaller screens)"
                        />
                        <img
                            className="col-span-full rounded-lg h-[330px]"
                            src={logo3}
                            alt="Image 2"
                        />
                    </div>
                    <div className="grid grid-cols-12 hidden md:grid gap-4">
                        {/* Row 2 (3 images) */}
                        <img
                            className="col-span-3 rounded-lg h-[330px]"
                            src={logo2}
                            alt="Image 3"
                        />
                        <img
                            className="col-span-5 rounded-lg h-[330px]"
                            src={logo3}
                            alt="Image 4"
                        />
                        <img
                            className="col-span-4 rounded-lg h-[330px]"
                            src={logo4}
                            alt="Image 5"
                        />
                    </div>
                </div>

            </section>
        </div>
    );
};

export default NewCreation;