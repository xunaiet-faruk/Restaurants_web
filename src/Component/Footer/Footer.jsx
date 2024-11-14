import time from '../../../public/Vector (8).png'
import call from '../../../public/Vector (9).png'
import mail from '../../../public/Vector (10).png'
import map from '../../../public/map-pin.png'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className="relative ">
            <footer
                className="relative bg-cover h-full bg-center py-16 text-white"
                style={{
                    backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/1130/8d6f/f909efb883f56845dcebe7cdc85a607c?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kDmp1rzG4KcE0rcSvJj4odUzgIovysZGMNX5XoQdDfkUwO0NllviV0c5RkW-Zg5tqtzkqvqN-V8WfTIwVMzPcZdZCTw7vUU~w2LuaB13UmH-uKlUHqhgHY6f0jTBD0qPcndEoZ-Gfjh9~08ty0-fWnvWNRRWBvpK~h1m3cufSrXQG2tUOWWcNO6xtdO6vS02E5Z8gMjc1OuuMg3Q7b21g2psMA4SZkYWgdsZ1hwkyt~yzdniUA7VDy2jglaxaEJZqX6bo-SZ7XcRvKAT1LnPfeBtaSAj2aGUBxB5rSX9Om0~YgwR108j5atBUIJbaOfpgggD2lah6q8LbLnQ3pwQ0Q__)'
                }}
            >
               
                <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

                
                <div className="relative z-10 text-center text-white max-w-screen-xl mx-auto py-20">
                    <h1 className='text-[62px] font-bebas leading-[64px] pb-12'>
                        We are ready to give you the best dining experiences
                    </h1>

                    {/* Additional content like opening hours, contact info, etc. */}

                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-center'>
                        <div className='text-center'>
                            <div className='flex justify-center items-center py-5'>
                                <img src={time} alt="" />
                            </div>
                           <div className='space-y-2'>
                                <h3 className='text-[24px] font-bebas leading-[28px]'>Opening hours</h3>
                                <p className='text-[16px] font-Roboto'>Monday - Sunday</p>
                                <p>9:00 AM to 11:30 PM</p>
                           </div>
                        </div>
                        <div className='text-center'>
                            <div className='flex justify-center items-center py-5'>
                                <img src={call} alt="" />
                            </div>
                           <div className='space-y-2'>
                                <h3 className='text-[24px] font-bebas leading-[28px]'>Opening hours</h3>
                                <p className='text-[16px] font-Roboto'>Monday - Sunday</p>
                                <p>9:00 AM to 11:30 PM</p>
                           </div>
                        </div>
                        <div className='text-center'>
                            <div className='flex justify-center items-center py-5'>
                                <img src={mail} alt="" />
                            </div>
                           <div className='space-y-2'>
                                <h3 className='text-[24px] font-bebas leading-[28px]'>Opening hours</h3>
                                <p className='text-[16px] font-Roboto'>Monday - Sunday</p>
                                <p>9:00 AM to 11:30 PM</p>
                           </div>
                        </div>
                        <div className='text-center'>
                            <div className='flex justify-center items-center py-5'>
                                <img src={map} alt="" />
                            </div>
                           <div className='space-y-2'>
                                <h3 className='text-[24px] font-bebas leading-[28px]'>Opening hours</h3>
                                <p className='text-[16px] font-Roboto'>Monday - Sunday</p>
                                <p>9:00 AM to 11:30 PM</p>
                           </div>
                        </div>
                      
                    </div>

                        {/* social icon heree --------                  */}
                    <div className='flex gap-6 mt-48 justify-center items-center'>
                        <div className='border-[#E5E7EB] border w-[53px] h-[53px] rounded-full flex justify-center items-center hover:bg-[#BD1F17] hover:text-white cursor-pointer'>
                            <FaFacebook className='text-xl' />
                       </div>
                        <div className='border-[#E5E7EB] border w-[53px] h-[53px] rounded-full flex justify-center items-center hover:bg-[#BD1F17] hover:text-white cursor-pointer'>
                            <FaXTwitter className='text-xl' />
                       </div>
                        <div className='border-[#E5E7EB] border w-[53px] h-[53px] rounded-full flex justify-center items-center hover:bg-[#BD1F17] hover:text-white cursor-pointer'>
                            <FaInstagram className='text-xl' />
                       </div>
                        <div className='border-[#E5E7EB] border w-[53px] h-[53px] rounded-full flex justify-center items-center hover:bg-[#BD1F17] hover:text-white cursor-pointer'>
                            <FaLinkedin className='text-xl' />
                       </div>
                       
                       
                        

                    </div>
                    <p className='text-center p-5 text-[21px]'>© 2023 All Rights Reserved </p>
                   
                </div>
            </footer>
        </div>
    );
};

export default Footer;
