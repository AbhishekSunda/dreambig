"use client"
import React, { useState, useRef, useEffect } from 'react';
import { PiCaretDownBold } from 'react-icons/pi'
import { usePathname } from 'next/navigation';
import { BiHomeAlt } from '@react-icons/all-files/bi/BiHomeAlt';
import { FaHistory } from '@react-icons/all-files/fa/FaHistory';
import { BsFillPersonFill } from '@react-icons/all-files/bs/BsFillPersonFill';
import { FiLogOut } from '@react-icons/all-files/fi/FiLogOut';
import Link from 'next/link';


function MenuDropdown() {
    const pathName = usePathname();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="flex justify-between items-center border border-black rounded-lg  font-semibold bg-yellow-50 text-black py-2 px-4  hover:bg-[#f2ebbfc0] gap-x-3"
            >
                Menu
                <i> <PiCaretDownBold /></i>
            </button>
            <div
                className={`${isDropdownOpen ? 'block' : 'hidden'
                    } absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg transition-opacity duration-300 p-2 `}
            >
                <button className="block w-full px-4 py-2 text-left  hover:bg-gray-200 rounded-lg">
                    <Link
                        href={"/"}
                        className='flex px-2 py-2 items-center gap-x-3'
                        onClick={toggleDropdown}
                    >
                        <BiHomeAlt size={"1.5rem"} />
                        <div>Home</div>
                    </Link>
                </button>
                <button className="block w-full px-4 py-2 text-left  hover:bg-gray-200 rounded-lg">
                    <Link
                        href={"/history"}
                        className='flex px-2 py-2 items-center gap-x-3'
                        onClick={toggleDropdown}
                    >
                        <FaHistory size={"1.5rem"} />
                        <div>History</div>
                    </Link>
                </button>
                <button className="block w-full px-4 py-2 text-left hover:bg-gray-200 rounded-lg">
                    <Link
                        href={"/profile"}
                        className='flex px-2 py-2 items-center gap-x-3'
                        onClick={toggleDropdown}
                    >
                        <BsFillPersonFill size={"1.5rem"} />
                        <div>Profile</div>
                    </Link>
                </button>
                <button className="block w-full px-4 py-2 text-left hover:bg-gray-200 rounded-lg whitespace-nowrap">
                    <Link
                        href={"/login"}
                        className='flex px-2 py-2 items-center gap-x-3'
                        onClick={toggleDropdown}
                    >
                        <FiLogOut size={"1.5rem"} />
                        <div>Log Out</div>
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default MenuDropdown;
