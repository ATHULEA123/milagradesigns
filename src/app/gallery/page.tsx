"use client"
import Navbar from "@/components/Navbar/page";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import maingallery from "../../../public/images/maingallery.png"
import { HiOutlineArrowLeft } from "react-icons/hi";
import Footer from "../../components/Footer/page";

export default function gallery() {
    return (
        <>
            <Navbar />
            <div
                className="w-full h-[300px] flex items-center justify-start bg-cover bg-center"
                style={{ backgroundImage: `url(/images/gallerybanner.png)` }}
            >
                <div className="container max-w-3xl px-6 text-white">
                    <h1 className="lg:text-[72px] md:text-5xl text-4xl font-medium leading-tight ml-44">Gallery</h1>
                </div>
            </div>
            <div className="container">

                <div className="   w-full max-w-md sm:max-w-2xl lg:max-w-3xl my-3 md:flex justify-start items-start hidden lg:mt-10 mt-5">
                    <Link href="/">  <button className="mb-5  backdrop-blur-md flex  items-center justify-center text-[#fff] bg-[#845607] px-3 py-2 rounded-xl font-semibold text-[18px] leading-[17px]">
                        <span className="text-[20px] mr-2" ><HiOutlineArrowLeft /></span>
                        Back
                    </button></Link>
                </div>
                <div className="text-center max-w-[1380px] lg:mt-10 mt-5">
                    <p>Milagra Designs creates spaces that tell your story with timeless aesthetics and personalized touches. We blend
                        creativity and functionality to deliver elegant, bespoke interiors. From concept to completion, our team ensures
                        exceptional quality and detail,
                        transforming homes and commercial spaces into inspiring environments filled with style and purpose.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:my-10 my-5">
                    <div>
                        <Image src={maingallery} width={350} height={50} alt="galleryone" />
                    </div>
                    <div>
                        <Image src={maingallery} width={350} height={50} alt="galleryone" />
                    </div>
                    <div>
                        <Image src={maingallery} width={350} height={50} alt="galleryone" />
                    </div>
                    <div>
                        <Image src={maingallery} width={350} height={50} alt="galleryone" />
                    </div>
                    <div>
                        <Image src={maingallery} width={350} height={50} alt="galleryone" />
                    </div>
                    <div>
                        <Image src={maingallery} width={350} height={50} alt="galleryone" />
                    </div>
                    <div>
                        <Image src={maingallery} width={350} height={50} alt="galleryone" />
                    </div>
                    <div>
                        <Image src={maingallery} width={350} height={50} alt="galleryone" />
                    </div>
                    <div>
                        <Image src={maingallery} width={350} height={50} alt="galleryone" />
                    </div>
                    <div>
                        <Image src={maingallery} width={350} height={50} alt="galleryone" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}