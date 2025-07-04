"use client"

import Image from 'next/image';
import Link from 'next/link';

export default function DownloadVpn() {
   
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
            <div >

                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Download SeelVpn</h1>
                <p className="text-gray-600 mb-10 text-center">Select your platform below to get started.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-12">
                {/* Desktop Section */}
                <div  className="flex flex-col items-center gap-4">
                    <h2 className="text-xl font-semibold text-gray-800">Desktop</h2>
                    <Link href="/Download?device-name=MAC&download-link=" className="flex w-[230px] h-[41px]   justify-center items-center gap-[6.64px] shrink-0 bg-teal-400 hover:bg-teal-500 text-white rounded-full text-sm font-medium">
                        <Image src="/buttonImg/desktop.png"
                         alt="Mac Icon"
                         width={30} 
                         height={30}
                          />
                          <span>

                        Mac
                          </span>
                    </Link>
                    <p className="text-sm text-gray-500">64-bit macOS 11.0 and later.</p>

                    <Link href="/Download?device-name=Windows&download-link=" className="flex w-[230px] h-[41px]   justify-center items-center gap-[6.64px] shrink-0 bg-teal-400 hover:bg-teal-500 text-white rounded-full text-sm font-medium">
                        <Image
                         src="/buttonImg/window.png" 
                         alt="Windows Icon"
                         width={30}
                         height={30}
                           />
                        Windows
                    </Link>
                    <p className="text-sm text-gray-500">Windows 10 and later.</p>
                </div>

                {/* Mobile Section */}
                <div  className="flex flex-col items-center gap-4">
                    <h2 className="text-xl font-semibold text-gray-800">Mobile</h2>
                    <Link href="/Download?device-name=iPhone-or-iPad&download-link=" className="flex w-[230px] h-[41px]   justify-center items-center gap-[6.64px] shrink-0 bg-teal-400 hover:bg-teal-500 text-white rounded-full text-sm font-medium">
                        <Image
                         src="/buttonImg/mobile-button-solid.svg"
                          alt="iOS Icon"
                          width={18}
                            height={18}
                             />
                        iOS
                    </Link>
                    <p className="text-sm text-gray-500">iPads and iPhones with 12.0 and later</p>

                    <Link href="/Download?device-name=Android&download-link=" className="flex w-[230px] h-[41px]    justify-center items-center gap-[6.64px] shrink-0 bg-teal-400 hover:bg-teal-500 text-white rounded-full   font-medium">
                        <Image
                         src="/buttonImg/android.png"
                          alt="Android Icon"
                          width={30}
                            height={30}
                             />
                        Android
                    </Link>
                    <p className="text-sm text-gray-500">Android 8.1 and later</p>
                </div>
            </div>

            <div className="mt-10  max-w-7xl text-xs text-gray-400">
                <div className="max-w-7xl w-full mx-auto flex justify-between items-center mb-2  text-xs text-gray-400">
                    <a href="#" className="hover:underline" >Notice and Attribution</a>
                    <a href="#" className="hover:underline" >Uninstall SeelVpn</a>
                </div>

                <div  className="max-w-6xl mx-auto text-center mt-[20px]">
                    By downloading SeelVpn, you agree to the <Link href="/terms-of-service" className="underline">Terms of Service</Link> and <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.
                </div>
            </div>

        </div>
    );
}
