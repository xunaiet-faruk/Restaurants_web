import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import svg from '../../../public/Group.svg'
import Feedback from '../../../public/“.png'
import tomato from '../../../public/221.png'
import grabees from '../../../public/12.png'
import { useEffect, useState } from "react";

const Testominal = () => {

    const array = 
        [
            {
                name: 'John Doe',
                designation: "Food Critic",
                testimonialDescription: "You can't go wrong with Chicken Mand.  had it twice, and each time the chicken was perfectly cooked — juicy and tender. Usually, mandi chicken is a bit dry, .",
                keyWord: 'Chicken Mandi'
            },
            {
                name: 'Khalid Al Dawsry',
                designation: "Food Enthusiast",
                testimonialDescription: "The Chicken Mandi was incredible The flavors were authentic, and the chicken was moist and tender, unlike the usual dry mandi. It’s definitely a must-try dish!",
                keyWord: 'Authentic Mandi'
            },
            {
                name: 'Lina Matthews',
                designation: "Travel Blogger",
                testimonialDescription: "I’ve had Chicken Mandi in a few countries, but this one stood out. The spices were well balanced, and the chicken just melted in my mouth. Perfect for anyone ",
                keyWord: 'Middle Eastern Cuisine'
            },
            {
                name: 'Samiya Khan',
                designation: "Food Lover",
                testimonialDescription: "The Chicken Mandi was hands down one of the best I've ever had The smoky flavor and tender chicken were perfect. The rice was fluffy and fragrant — an amazing",
                keyWord: 'Smoky Flavor'
            },
            {
                name: 'Omar Bin Fahad',
                designation: "Chef",
                testimonialDescription: "As a chef, I appreciate the level of skill it takes to get Chicken Mandi just right. This one was excellent — juicy chicken with flavors that reminded me of home.",
                keyWord: 'Authentic Taste'
            },
            {
                name: 'Sophia Lin',
                designation: "Culinary Traveler",
                testimonialDescription: "I was skeptical at first, but the Chicken Mandi here is a culinary delight Tender, flavorful, and perfectly cooked. A beautiful representation of Arabian cuisine.",
                keyWord: 'Arabian Cuisine'
            },
            {
                name: 'Ahmed Raees',
                designation: "Food Reviewer",
                testimonialDescription: "The Mandi rice and chicken combination was flawless The chicken was tender, with a hint of spice that didn’t overpower. Definitely worth the experience",
                keyWord: 'Mandi Rice'
            },
            {
                name: 'Emily Chang',
                designation: "Food Blogger",
                testimonialDescription: "The Chicken Mandi was a surprise in the best way. The rich spices and perfectly cooked chicken made this dish unforgettable. A fantastic option for anyone.",
                keyWord: 'Rich Spices'
            },
            {
                name: 'Yusuf Ali',
                designation: "Restaurant Owner",
                testimonialDescription: "I’ve had many versions of Chicken Mandi, but this was exceptional. The flavors were authentic, the meat tender, and the rice perfectly seasoned. ",
                keyWord: 'Authentic Flavor'
            }
        ]
    const [currentSlider, setCurrentSlider] = useState(0);
    // The slider images array
    const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? array.length - 2 : currentSlider - 1));
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === array.length - 2 ? 0 : currentSlider + 1));
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlider]);

    return (
        <div className="relative">

            {/* side image -------------------- */}

            <div>
                <div className="absolute md:block hidden -left-[5px] top-[240px]">
                    <img src={tomato} alt="" />

                </div>
                <div className="absolute md:block hidden -right-[0px] top-[380px]">
                    <img className="" src={grabees} alt="" />

                </div>
            </div>

            <div className="max-w-screen-2xl mx-auto mb-32 px-4 sm:px-6 lg:px-8 relative">
                <div className="flex flex-col lg:flex-row justify-between pt-20 lg:pt-40 pb-10 lg:pb-20">
                    <div className="text-center lg:text-left mb-8 lg:mb-0">
                        <div className="flex justify-center lg:justify-start items-center gap-3 pb-5">
                            <div className="bg-[#BD1F17] w-[10px] h-[10px]"></div>
                            <p className="text-[#BD1F17] text-[16px] sm:text-[20px] font-bold font-roboto">
                                Crispy, Every Bite Taste
                            </p>
                        </div>
                        <h1 className="font-bebas-neue text-[32px] sm:text-[48px] lg:text-[62px] font-bold leading-tight lg:leading-[62px]">
                            POPULAR FOOD ITEMS
                        </h1>
                    </div>

                    {/* Slider buttons */}
                    <div className="flex gap-10 pt-7  absolute md:-right-0 md:top-20 bottom-0 md:ml-32 ml-24 md:pr-[20px]" style={{ transform: 'translateY(90px)' }}>
                        <div onClick={prevSlider} className="bg-white shadow-xl hover:bg-[#BD1F17] hover:text-white cursor-pointer flex justify-center items-center rounded-full w-[60px] h-[60px]">
                            <FaChevronLeft className="w-11" />
                        </div>
                        <div onClick={nextSlider} className="bg-white shadow-xl hover:bg-[#BD1F17] hover:text-white cursor-pointer flex justify-center items-center rounded-full w-[60px] h-[60px]">
                            <FaChevronRight className="w-11" />
                        </div>
                    </div>

                </div>

                {/* Slider Section */}
                <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start">
                    {/* Text/Slider Section */}
                    <div className="bg-[#FEBF00] w-full lg:w-[656px] h-[400px] sm:h-[450px] lg:h-[565px] md:mb-6 lg:mb-0">
                        <div className="w-full mx-auto flex items-center overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24">
                            <div className="relative overflow-hidden w-full">
                                {/* Slider container */}
                                <div
                                    className="ease-linear duration-300 flex transition-transform"
                                    style={{ transform: `translateX(-${currentSlider * 100}%)` }}
                                >
                                    {/* Slides */}
                                    {array.map((each, idx) => (
                                        <div key={idx} className="min-w-full flex justify-center pt-8 sm:pt-12">
                                            <div className="h-full w-full sm:w-[426px] p-4 sm:p-8 rounded">
                                                <img src={Feedback} alt="" className="" />
                                                <p className="text-[16px] sm:text-[24px] font-Roboto mt-4 mb-6 sm:mb-12">
                                                    {each?.testimonialDescription}
                                                </p>
                                                <div className="flex justify-between items-center gap-4 sm:gap-6 pt-8 sm:pt-16">
                                                    <div>
                                                        <h3 className="text-[14px] sm:text-[18px] font-bold">{each?.name}</h3>
                                                        <p className="text-sm sm:text-md">{each?.designation}</p>
                                                    </div>
                                                    <img className="w-10 h-10 sm:w-14 sm:h-14 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop" alt="" />
                                                </div>
                                                <div className="flex items-center mt-4 sm:mt-6">
                                                    <hr className="flex-grow border border-black" />
                                                    <hr className="border-[#BD1F17] border-4 w-10 sm:w-[52px] ml-2" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 pb-4 lg:pb-9">
                            <img className="w-16 lg:w-auto" src={svg} alt="" />
                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="w-full lg:w-[863px] relative">
                        <img className="h-[300px] sm:h-[450px] lg:h-[565px] w-full object-cover" src="https://s3-alpha-sig.figma.com/img/938e/f7b1/e5c04249c8e07f31fb0eda23eede4ad3?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lBNr~obCOGB3gR~mUfIC1pcCPoxNxRf2e7zJ2Q4d1WihiubN5d4WBF8fehv54B1q83zvXJjimNFPszNQ6zEWdrHApTANesMgHjaB~J7hDaGcMSb9bKurj6QX3rfSTJU~XhY33XV1BkI~mutccpkO6dK35S1nenmQmEVBc-q2l5ubm0-G37uHpcCrUct2Q6bqB4xM-ydXdl5hdRZNRwENjb3N6f2nvDrbfvBqmTKTSQy8fN5sdJf5wvr52G5amWQXg6PfJa75qlbPvt09gowY79U5F7zGE2mlbH9pN64YfJcxnxQ0sAj8ZWymjZI-yjUvT3bV9UL4VfxU5Mcqmp6eFg__" alt="" />
                        <div className="absolute bottom-32  sm:bottom-[250px]  right-44 sm:right-[425px] animate-pulse bg-[#FEBF00] rounded-full flex flex-col justify-center items-center w-10 h-10 sm:w-[49px] sm:h-[49px]">
                            <FaPlay className="text-sm sm:text-xl" />
                        </div>
                    </div>
                </div>


            </div>

      </div>
    );
};

export default Testominal;