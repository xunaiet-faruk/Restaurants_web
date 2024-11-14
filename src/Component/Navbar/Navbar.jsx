import { useState, useRef, useEffect } from 'react';
import Logo from '../../../public/Logo (2).png';

const Navbar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    return (
        <div className=" py-5 w-full bg-transparent" style={{
            background: 'linear-gradient(123.4deg, #BD1F17 40.8%, #A61D13 120.8%, #8E1B0F 40.8%)',
        }}>
            <nav className="flex items-center  max-w-screen-xl mx-auto justify-between px-4 py-2 text-white ">
                {/* Logo */}
                <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                    <img src={Logo} alt="Logo" />
                </div>

                {/* Navigation Links for Medium and Above */}
                <ul className="hidden md:flex items-center justify-center gap-10 flex-grow">
                    {['Home', 'About', 'Portfolio', 'Clients', 'Blog', 'Contact'].map((item) => (
                        <li key={item} className="group flex cursor-pointer flex-col">
                            {item}
                            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#FEBF00] transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    ))}
                </ul>

                {/* Book Button for Medium and Above */}
                <div className="hidden md:block">
                    <button className="w-[140px] sm:w-[157px] h-[40px] md:h-[44px] bg-[#FEBF00] font-Roboto text-black font-bold">
                        Book a table
                    </button>
                </div>

                {/* Mobile Menu Icon for Small Screens */}
                <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex md:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="cursor-pointer"
                    >
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>

                    {/* Dropdown Menu for Small Screens */}
                    {dropDownState && (
                        <ul className="z-10 gap-2 bg-[#393E46] absolute right-0 top-11 flex w-[200px] flex-col rounded-lg text-base">
                            {['Home', 'About', 'Portfolio', 'Clients', 'Blog', 'Contact'].map((item) => (
                                <li
                                    key={item}
                                    className="cursor-pointer px-6 py-2 text-white hover:bg-[#FEBF00]"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </div>

    );
};

export default Navbar;
