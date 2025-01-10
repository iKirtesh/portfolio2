import React, { useState, useEffect } from 'react';

function Navbar({ sectionRefs }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (section, e) => {
        e.preventDefault(); // Prevent default anchor behavior
        if (sectionRefs[section]) {
            sectionRefs[section].current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close the menu if it's open on mobile
        if (isOpen) {
            toggleMenu();
        }
    };

    const logo = 'https://cdn-icons-png.flaticon.com/128/4926/4926550.png';
    const links = [
        // { id: 1, name: 'Home', url: '#' },
        { id: 2, name: 'About', url: '#' },
        { id: 3, name: 'Skills', url: '#' },
        { id: 4, name: 'Projects', url: '#' },
        { id: 5, name: 'Education', url: '#' },
        { id: 6, name: 'Contact', url: '#' },
    ];

    return (
        <nav className={`navbar transition-all duration-300 ease-in-out ${scrolled ? 'scrolled md:pt-4 lg:pt-6' : ''}`}>
            <div className={`navbar-container ${scrolled ? 'scrolled' : ''} container md:rounded-xl lg:rounded-2xl rounded-b-xl py-3 shadow-md mx-auto flex flex-col md:flex-row items-center justify-between px-4`}>
                <div className="flex items-center justify-between w-full md:w-auto">
                    <div className="flex items-center">
                        <img src={logo} alt="logo" className="w-10 h-10" />
                        <span className="ml-2 font-semibold">Kirtesh Admute</span>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="focus:outline-none">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`md:flex md:items-center rounded w-full md:w-auto ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <ul className="flex flex-col md:flex-row items-center md:space-x-6 mt-4 md:mt-0">
                        {links.map((link) => (
                            <li key={link.id} className="md:mt-0 w-full border-gray-150">
                                <a
                                    href={link.url}
                                    onClick={(e) => handleLinkClick(link.name, e)}
                                    className="font-semibold block py-2 md:py-0 px-2 md:px-2 hover:text-orange-500"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
