"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/milagra.png";
import { MdArrowOutward } from "react-icons/md";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
export default function footer(){
    return(
        <>
           <section className=" bg-[#3F3E41]">
        <div
          className="relative w-full "

        >
          <div className="container">
            <div className="md:pt-15 pt-10 md:px-6 px-0">


              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:place-items-center items-center lg:gap-15 gap-10">
                {/* Column 1 */}
                <div className="flex flex-col md:gap-2 gap-6">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={200}
                    height={50}
                    className="transform transition-transform duration-300 hover:scale-105"
                  />
                  <p className="text-[#fff] md:text-[15px] text-sm font-normal">
                    Experience Bespoke Architectural Design Crafted to Reflect Your
                    Vision And Lifestyle
                  </p>

                </div>

                {/* Column 2 */}
                <div className="flex flex-col md:gap-4 gap-2">

                  <Link href="/">
                    <p className="font-medium text-[13px] md:text-[15px] text-[#fff]">Home</p>
                  </Link>
                
                  <Link href="/about">
                    <p className="font-medium text-[13px] md:text-[15px] text-[#fff]">About Us</p>
                  </Link>
                  <Link href="/projects">
                    <p className="font-medium text-[13px] md:text-[15px] text-[#fff]">Packages</p>
                  </Link>
                  <Link href="/#Team">
                    <p className="font-medium text-[13px] md:text-[15px] text-[#fff]">Gallery</p>
                  </Link>
                    <Link href="/#Team">
                    <p className="font-medium text-[13px] md:text-[15px] text-[#fff]">Portfolio</p>
                  </Link>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col md:gap-5 gap-3 text-[#fff]">
                  <div>
                    <p className="flex items-center gap-4 md:text-[15px] text-[12px] font-medium">
                      <span className="md:text-2xl text-lg">
                        <IoCallOutline />
                      </span>
                      +91 9809584012
                    </p>
                  </div>

                  <div className="items-center gap-3">
                    <p className="flex items-center max-w-[320px] gap-4 md:text-[14px] text-sm mb-2 font-bold">
                      <span className="md:text-2xl text-lg">
                        <IoLocationOutline />
                      </span>
                      Milagra Designs | Interior Designers in
                    </p>
                    <p className="max-w-[280px] ml-8 md:text-[15px] text-[12px] font-medium">
                      Trivandrum and Kollam
                    </p>
                  </div>

                  <div>
                    <p className="flex items-center gap-4 md:text-[15px] text-[12px] font-medium">
                      <span className="lg:text-2xl text-lg">
                        <AiOutlineMail />
                      </span>
                      milagradesign@gmail.com
                    </p>
                  </div>


                </div>
              </div>


            </div>
          </div>
          <div className="md:mt-15 mt-10 flex justify-center items-center bg-[#C4910D80] py-3">
            <p className="md:text-[15px] text-[12px] font-normal text-[#fff]">
              &copy; 2025 Door of Dream Architects. All rights reserved.
            </p>
          </div>
        </div>
      </section>
        </>
    )
}