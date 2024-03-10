
import left from "../../assets/Left Carousel.png"
import right from "../../assets/Right Carousel.png"

import img1 from "../../assets/Images.png"
import img2 from "../../assets/Images (1).png"




// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const NewRecipe = () => {
    return (
        <div className="bg-[#FFFAF2]  flex-1  md:flex mt-16 ">
            <div className="py-12 px-8 w-full md:w-2/5">
                <h1 className="text-[16px] text-[#86371C] leading-[16px] font-normal">......New Recipes</h1>
                <h1 className="text-[40px] mt-5 text-[#270A05] bakilda leading-[60px] font-normal">Taste Our New Recipe</h1>
                <p className="text-[16px] mt-6 text-[#53565C] ValueSansPro leading-[24px] font-normal">  Malesuada cursus a tincidunt volutpat posuere lacinia. Congue malesuada lacus pharetra ut vel amet. Amet turpis suspendisse porttitor scelerisque amet dolor et. Nisi ac vitae tortor lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis nunc erat. Donec quis fermentum mattis aliquet gravida. Adipiscing eu sit ornare imperdiet viverra sit vel. </p>
                <p className="text-[16px] text-[#53565C] ValueSansPro leading-[24px] font-normal mt-4">There are many variations of passages of Lorem Ipsum form any injected humour, or randomised words which dont look
                    slightly believable.</p>
                <div className="mt-12 gap-4">
                    <button>
                        <img src={left} alt="" />
                    </button>
                    <button className="px-6">
                        <img src={right} alt="" />
                    </button>

                </div>

            </div>
            <div className="py-16">
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#86371C",
                        "--swiper-pagination-bullet-inactive-color": "#FFFFFF",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-horizontal-gap": "4px"
                    }}
                    className="max-w-[700px] px-5 max-h-[671x]"
                    slidesPerView={3}
                    spaceBetween={10}
                    breakpoints={{
                        600: {
                            slidesPerView: 1,
                        },
                        1100: {
                            slidesPerView: 2,
                        },
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    pagination={true}
                    modules={[Autoplay, Navigation, Pagination]}
                >
                    {/* we have to give display flex to make it in center because swiper sets width on his own */}
                    <SwiperSlide>
                        <img className="w-[300px] h-[471px]" src={img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-[300px] h-[471px]" src={img2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-[300px] h-[471px]" src={img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-[300px] h-[471px]" src={img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-[300px] h-[471px]" src={img2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-[300px] h-[471px]" src={img1} alt="" />
                    </SwiperSlide>


                </Swiper>



            </div>
        </div>
    );
};

export default NewRecipe;