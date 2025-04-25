"use client"
import AOS from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function DownloadVpn() {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });

    }, [])
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
            <div data-aos="fade-down">

                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Download SeelVpn</h1>
                <p className="text-gray-600 mb-10 text-center">Select your platform below to get started.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-12">
                {/* Desktop Section */}
                <div data-aos="fade-left" className="flex flex-col items-center gap-4">
                    <h2 className="text-xl font-semibold text-gray-800">Desktop</h2>
                    <button className="flex w-[230px] h-[41px] px-[105.7px] justify-center items-center gap-[6.64px] shrink-0 bg-teal-400 hover:bg-teal-500 text-white rounded-full text-sm font-medium">
                        <img src="/buttonImg/desktop.png" alt="Mac Icon" className="w-5 h-5" />
                        Mac
                    </button>
                    <p className="text-sm text-gray-500">64-bit macOS 11.0 and later. <a className="underline" href="#">What’s new?</a></p>

                    <button className="flex w-[230px] h-[41px] px-[105.7px] justify-center items-center gap-[6.64px] shrink-0 bg-teal-400 hover:bg-teal-500 text-white rounded-full text-sm font-medium">
                        <img src="/buttonImg/window.png" alt="Windows Icon" className="w-5 h-5" />
                        Windows
                    </button>
                    <p className="text-sm text-gray-500">Windows 10 and later. <a className="underline" href="#">What’s New?</a></p>
                </div>

                {/* Mobile Section */}
                <div data-aos="fade-right" className="flex flex-col items-center gap-4">
                    <h2 className="text-xl font-semibold text-gray-800">Mobile</h2>
                    <button className="flex w-[230px] h-[41px] px-[105.7px] justify-center items-center gap-[6.64px] shrink-0 bg-teal-400 hover:bg-teal-500 text-white rounded-full text-sm font-medium">
                        <img src="/buttonImg/mobile.png" alt="iOS Icon" className="w-5 h-5" />
                        iOS
                    </button>
                    <p className="text-sm text-gray-500">iPads and iPhones with 12.0 and later</p>

                    <button className="flex w-[230px] h-[41px] px-[105.7px] justify-center items-center gap-[6.64px] shrink-0 bg-teal-400 hover:bg-teal-500 text-white rounded-full text-sm font-medium">
                        <img src="/buttonImg/android.png" alt="Android Icon" className="w-5 h-5" />
                        Android
                    </button>
                    <p className="text-sm text-gray-500">Android 8.1 and later</p>
                </div>
            </div>

            <div className="mt-10  max-w-7xl text-xs text-gray-400">
                <div className="max-w-7xl w-full mx-auto flex justify-between items-center mb-2  text-xs text-gray-400">
                    <a href="#" className="hover:underline" data-aos="fade-right">Notice and Attribution</a>
                    <a href="#" className="hover:underline" data-aos="fade-left">Uninstall SeelVpn</a>
                </div>

                <div data-aos="fade-right" className="max-w-6xl mx-auto text-center mt-[20px]">
                    By downloading SeelVpn, you agree to the <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
                </div>
            </div>

        </div>
    );
}
