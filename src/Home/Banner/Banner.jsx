import banner from '../../../public/Bannner.png';
import flower from '../../../public/flower.png';

const Banner = () => {
    return (
        <div
            className="w-full h-full lg:pt-12 md:pt-40 pt-20 pb-40"
            style={{
                background: 'linear-gradient(123.4deg, #BD1F17 40.8%, #A61D13 76.4%, #8E1B0F 120.69%)',
            }}
        >
            <div className='max-w-screen-2xl mx-auto relative'>
                <div className="flex flex-col md:flex-col lg:flex-row justify-between gap-10 md:gap-32 items-center pt-12">
                    <div className="space-y-8 md:space-y-16">
                        <h1
                            style={{
                                background: 'linear-gradient(90deg, rgba(189, 31, 23, 0) 32.88%, rgba(189, 31, 23, 0.7) 100%)',
                            }}
                            className="absolute text-[50px] lg:text-start md:text-center sm:text-[60px] md:text-[80px] lg:text-[100px] font-bold text-white uppercase leading-tight md:leading-[90px] lg:leading-[110px] py-3 md:py-5 pr-4 md:pr-12"
                        >
                            Taste the authentic <br /> Saudi cuisine
                        </h1>
                        <p className="text-[16px] lg:text-start md:text-center  sm:text-[20px] md:text-[24px] text-white pt-48  md:pt-72 lg:pt-52">
                            Among the best Saudi chefs in the world, serving <br className="hidden md:block" /> you something beyond flavor.
                        </p>
                        <div className='flex lg:justify-start md:justify-center lg:items-start md:items-center'>
                            <button className="w-[130px] sm:w-[140px] md:w-[157px] h-[40px] md:h-[44px] bg-[#FEBF00] font-Roboto text-black font-bold">
                                Explore Menu
                            </button>
                        </div>
                       
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <img className="w-[300px] sm:w-[500px] md:w-[600px] lg:w-[700px]" src={banner} alt="Saudi cuisine banner" />
                        <div className='absolute  lg:right-4 right-9  md:top-[12px] md:right-[32px] top-[390px]'>
                            <img src={flower} alt="Decorative flower" className="w-[50px] sm:w-[80px] md:w-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
