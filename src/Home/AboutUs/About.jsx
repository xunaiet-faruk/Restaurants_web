import { useState } from 'react';
import Tabimage from '../../../public/Frame 1707478063.png';
import salad from '../../../public/salad.png'
import call from '../../../public/call-alt.png'
import delibary from '../../../public/Vector (6).png'
import dinnig from '../../../public/Vector (7).png'
import bag from '../../../public/bag.png'

const About = () => {

    const [activeTab, setActiveTab] = useState('about');

    // Tab content
    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return (
                    <div>
                        <h1 className="text-[62px] pb-6  leading-[62px] font-bebas text-left uppercase text-black">
                            Exceptional culinary experience and delicious food
                        </h1>
                        <p className='pb-12 text-xl'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis
                            ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur
                            adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.
                        </p>

                     <div className='flex items-center gap-6'>

                            <div>
                                <button className="w-[140px] sm:w-[157px] h-[40px] md:h-[44px] bg-[#FEBF00] font-Roboto text-black font-bold">
                                    Book a table
                                </button>
                            </div>

                            <div>
                                <div className='flex gap-2 items-center'>
                                    <img src={call} className='text-2xl text-[#BD1F17] font-bold' />
                                    <p className='text-xl font-semibold'>+88 3426 739 485</p>

                                </div>
                            </div>

                     </div>
                    </div>
                );
            case 'experience':
                return (
                    <div>
                        <h1 className="text-[62px] pb-6 leading-[62px] font-bebas text-left uppercase text-black">
                            A Culinary Journey of Passion and Precision
                        </h1>
                        <p className='pb-12 text-xl'>
                            Our team’s culinary journey combines traditional flavors with modern techniques to create unforgettable dishes. With experience from prestigious kitchens worldwide, our chefs blend classic and contemporary styles, ensuring each dish delights all the senses.
                        </p>

                        <div className='flex items-center gap-6'>

                            <div>
                                <button className="w-[140px] sm:w-[157px] h-[40px] md:h-[44px] bg-[#FEBF00] font-Roboto text-black font-bold">
                                    Book a table
                                </button>
                            </div>

                            <div>
                                <div className='flex gap-2 items-center'>
                                    <img src={call} className='text-2xl text-[#BD1F17] font-bold' />
                                    <p className='text-xl font-semibold'>+88 3426 739 485</p>

                                </div>
                            </div>

                        </div>
                    </div>
                );
            case 'contact':
                return (
                    <div>
                        <h1 className="text-[62px]  pb-6  leading-[62px] font-bebas text-left uppercase text-black">
                            Get in Touch with Us
                        </h1>
                       
                    <form>
                        <div className='flex gap-6'>

                                <input
                                    type="text"
                                    name="name"
                                    className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
                                    placeholder="Your Name"
                                    required
                                />

                                <input
                                    type="email"
                                    name="email"
                                    className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
                                    placeholder="Your Email"
                                    required
                                />
                        </div>
                            <textarea
                                name="details"
                               
                                className="w-full p-2 mb-6 border border-gray-300 rounded-lg"
                                placeholder="Enter your message or details here"
                                rows="6"
                                required
                            ></textarea>


                    </form>

                        <div className='flex items-center gap-6'>

                            <div>
                                <button className="w-[140px] sm:w-[157px] h-[40px] md:h-[44px] bg-[#FEBF00] font-Roboto text-black font-bold">
                                    Book a table
                                </button>
                            </div>

                            <div>
                                <div className='flex gap-2 items-center'>
                                    <img src={call} className='text-2xl text-[#BD1F17] font-bold' />
                                    <p className='text-xl font-semibold'>+88 3426 739 485</p>

                                </div>
                            </div>

                        </div>
                    </div>
                );
            default:
                return null;
        }
    };


    return (
        <div className="max-w-screen-2xl mx-auto mb-32 relative">
            <div className='absolute -right-[175px] top-[400px]'>
                <img src={salad} alt="" />
            </div>
            <div className="flex gap-16 pt-32 relative">
                {/* Image Section with Fixed Width */}

                <div className='absolute  mt-4 rounded-xl  '>
                    <img src="https://i.ibb.co.com/BPKWGRk/Market-Place.png" alt="" />
                </div>
                <div className="flex-shrink-0 ">
                    <img src={Tabimage} alt="Tab illustration" className="w-full " />
                </div>

                {/* Tabs Section */}
                <div>
                    {/* Tab Buttons */}
                    <div className="flex flex-row border-b border-[#B52B1D] w-[832px] gap-6">
                        <button
                            onClick={() => setActiveTab('about')}
                            className={`px-5 py-2 text-md font-semibold ${activeTab === 'about' ? 'bg-[#B52B1D] text-white' : 'text-black'}`}
                        >
                            About
                        </button>
                        <button
                            onClick={() => setActiveTab('experience')}
                            className={`px-5 py-2 text-md font-semibold ${activeTab === 'experience' ? 'bg-[#B52B1D] text-white' : 'text-black'}`}
                        >
                            Experience
                        </button>
                        <button
                            onClick={() => setActiveTab('contact')}
                            className={`px-5 py-2 text-md font-semibold ${activeTab === 'contact' ? 'bg-[#B52B1D] text-white' : 'text-black'}`}
                        >
                            Contact
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="mt-8">
                        {renderContent()}
                    </div>
                </div>
            </div>


            {/*  about   oportunity  details --------- */}

                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-32 justify-between'>

                <div className='flex gap-5'>
                    <div className=' w-[90px] font-roboto flex flex-col justify-center items-center h-[90px] shadow-2xl bg-white rounded-full'>
                        <img className='' src={delibary} />
                    </div>
                    <div>
                        <h2 className='text-[30px] font-bebas-neue font-semibold leading-[36px] uppercase'>fast delivery</h2>
                        <p className='text-[20px]'>Within 30 minutes</p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className=' w-[90px] font-roboto flex flex-col justify-center items-center h-[90px] shadow-2xl bg-white rounded-full'>
                        <img className='' src={dinnig} />
                    </div>
                    <div>
                        <h2 className='text-[30px] font-bebas-neue font-semibold leading-[36px] uppercase'>absolute dining</h2>
                        <p className='text-[20px]'>Best buffet restaurant</p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className=' w-[90px] font-roboto flex flex-col justify-center items-center h-[90px] shadow-2xl bg-white rounded-full'>
                        <img className='' src={bag} />
                    </div>
                    <div>
                        <h2 className='text-[30px] font-bebas-neue font-semibold leading-[36px] uppercase'>pickup delivery</h2>
                        <p className='text-[20px]'>Grab your food order</p>
                    </div>
                </div>
             

                </div>

        </div>
    );
};

export default About;
