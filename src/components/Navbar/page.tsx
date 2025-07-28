"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoReorderThree } from "react-icons/io5";

import { MdClose } from "react-icons/md";
import logo from "../../../public/images/milagra.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="w-full bg-[#3F3E41] relative z-50">
                <div className="max-w-7xl mx-auto lg:px-0 py-3 px-6">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href="/">
                            <Image src={logo} alt="Logo" width={180} height={50} />
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden lg:flex space-x-12 font-[500] text-md">
                            <a href="/" className="text-[#fff] font-normal text-lg hover:text-[#C4910D]">Home</a>
                            <a href="#about" className="text-[#fff] font-normal text-lg hover:text-[#C4910D]">About us</a>
                            <a href="/mainservice" className="text-[#fff] font-normal text-lg hover:text-[#C4910D]">Packages</a>
                            <a href="/portfolio" className="text-[#fff] font-normal text-lg hover:text-[#C4910D]">Portfolio</a>
                            <a href="/gallery" className="text-[#fff] font-normal text-lg hover:text-[#C4910D]">Gallery</a>
                        </div>

                        {/* Contact Button */}
                        <div className="hidden lg:flex items-center gap-4">
                            <a
                                href="#Consultation"
                                className="border-[1px] border-[#C4910D] text-lg text-[#C4910D] px-6 py-2 rounded-lg text-[15px] font-medium hover:bg-[#0792CE] hover:text-[#fff] transition"
                            >
                                Contact Us
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden bg-white text-[#C4910D] text-3xl rounded-full"
                            onClick={() => setIsOpen(true)}
                        >
                            <IoReorderThree />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="fixed inset-y-0 right-0 w-3/4 bg-[#3F3E41] z-50 flex flex-col justify-center items-center space-y-6 text-white text-lg font-medium">
                        <button
                            className="absolute top-5 right-5 text-3xl text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            <MdClose />
                        </button>

                       
                            <a onClick={() => setIsOpen(false)} href="/" className="hover:text-[#C4910D]">Home</a>
                            <a onClick={() => setIsOpen(false)} href="#about" className="hover:text-[#C4910D]">About us</a>
                            <a onClick={() => setIsOpen(false)} href="/mainservice" className="hover:text-[#C4910D]">Packages</a>
                            <a onClick={() => setIsOpen(false)} href="/portfolio" className="hover:text-[#C4910D]">Portfolio</a>
                            <a onClick={() => setIsOpen(false)} href="/gallery" className="hover:text-[#C4910D]">Gallery</a>
                            <a
                                onClick={() => setIsOpen(false)}
                                href="#Consultation"
                                className="border border-[#C4910D] px-6 py-2 rounded-lg hover:bg-[#0792CE] hover:text-white mt-4"
                            >
                                Contact Us
                            </a>
                       
                    </div>

                )}
            </nav>
        </>
    );
}
