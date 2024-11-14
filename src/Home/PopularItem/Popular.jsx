import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import burger from '../../../public/burger.png';
import pizza from '../../../public/pizza 1.png';
import french from '../../../public/french-fries 1.png';
import curness from '../../../public/curness.png';
import sliced from '../../../public/top-view-bell-pepper-pepper-sliced-black-bowl-white-horizontal 2.png';

const items = [
    { img: burger, title: "Vegetables Burger", description: "Barbecue Italian cuisine pizza" },
    { img: pizza, title: "Pizza", description: "Delicious cheesy pizza" },
    { img: french, title: "French Fries", description: "Crispy and tasty fries" },
    { img: curness, title: "Crunchy Snacks", description: "Savory and crispy" },
    { img: burger, title: "Burger Deluxe", description: "Juicy beef burger" },
    { img: pizza, title: "Pepperoni Pizza", description: "Spicy pepperoni goodness" },
];

const Popular = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleNext = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
                setIsAnimating(false);
            }, 500); // Animation duration
        }
    };

    const handlePrevious = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    (prevIndex - 1 + items.length) % items.length
                );
                setIsAnimating(false);
            }, 500);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 1000);

        return () => clearInterval(interval);
    }, [handleNext]);

    const visibleItems = [
        items[(currentIndex) % items.length],
        items[(currentIndex + 1) % items.length],
        items[(currentIndex + 2) % items.length],
        items[(currentIndex + 3) % items.length]
    ];

    return (
        <div className="bg-[#FBF7F2] w-full relative">
            <div className="max-w-screen-2xl mx-auto">
                <div className="flex justify-between py-40">
                    <div>
                        <div className="flex items-center gap-3 pb-5">
                            <div className="bg-[#BD1F17] w-[10px] h-[10px]"></div>
                            <p className="text-[#BD1F17] text-[20px] font-bold font-roboto">
                                Crispy, Every Bite Taste
                            </p>
                        </div>
                        <h1 className="font-bebas-neue text-[62px] font-bold leading-[62px] text-left">
                            POPULAR FOOD ITEMS
                        </h1>
                    </div>

                    {/* Slider buttons */}
                    <div className="flex gap-10 pt-7">
                        <div
                            onClick={handlePrevious}
                            className="bg-white hover:bg-[#BD1F17] hover:text-white cursor-pointer flex justify-center items-center rounded-full w-[60px] h-[60px]"
                        >
                            <FaChevronLeft className="w-11" />
                        </div>
                        <div
                            onClick={handleNext}
                            className="bg-white hover:bg-[#BD1F17] hover:text-white cursor-pointer flex justify-center items-center rounded-full w-[60px] h-[60px]"
                        >
                            <FaChevronRight className="w-11" />
                        </div>
                    </div>
                </div>

                {/* Side image */}
                <div className="absolute left-0">
                    <img src={sliced} alt="Decorative" />
                </div>

                {/* Display four items in the slider */}
                <div className="overflow-hidden relative mx-auto pb-32">
                    <div
                        className={`grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[24px] transition-transform duration-500`}
                    >
                        {visibleItems.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-xl hover:border-t-[#BD1F17] hover:border-4 hover:rounded-t-xl flex flex-col justify-center items-center w-[340px] h-[370px] transition-all duration-500"
                            >
                                <img src={item.img} alt={item.title} />
                                <hr className="w-[57px] border-[3px] border-[#BD1F17] my-5" />
                                <h2 className="font-bold text-[24px] font-bebas-neue pt-1">
                                    {item.title}
                                </h2>
                                <p className="text-[16px] pt-2">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;
