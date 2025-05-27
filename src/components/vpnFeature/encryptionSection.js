"use client"
import { useEffect } from "react";
import Image from "next/image";


export default function EncryptionSection() {
  

    return (
        <div className="bg-white text-black  px-6 py-12 md:py-20">
            <div className=" w-[85%] m-auto flex justify-center">
                <div>
                    <h1 className="text-3xl text-center" >
                        <b>Encrypt your connection, everywhere</b>
                    </h1>
                    <div className="flex justify-center" >
                        <Image
                            src="/vpnFeatureImg/encryptionImg.png"
                            alt="Teams Plan"
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 text-center rounded" >
                            <h1 className="font-bold text-center">Strong encryption</h1>
                            <p className="w-full text-neutral-500">
                                SeelVpn uses strong AES 256-bit encryption by default. Weaker encryption isn't even an option.
                            </p>
                            <div className="text-neutral-500"><p>learn More</p></div>
                        </div>
                        <div className="p-4 text-center rounded"  >
                            <h1 className="font-bold text-center">SGhostSeal</h1>
                            <p className="w-full text-neutral-500">
                                Defeat VPN blocking with GhostSeal. Make your encrypted VPN data less detectable to governments, businesses and ISPs.
                            </p>
                            <div className="text-neutral-500"><p>learn More</p></div>
                        </div>
                        <div className="p-4 text-center rounded"  >
                            <h1 className="font-bold text-center">Protocol selection</h1>
                            <p className="w-full text-neutral-500">
                                Control how you connect to SeelVpn’s secure and fast VPN network with WireGuard, OpenVPN, and IKEv2 protocols.
                            </p>
                            <div className="text-neutral-500"><p>learn More</p></div>
                        </div>
                        <div className="p-4 text-center rounded"  >
                            <h1 className="font-bold text-center">Unlimited devices</h1>
                            <p className="w-full text-neutral-500">
                                No limit on the number of devices you can connect to while using SeelVpn. Privacy everywhere.
                            </p>
                            <div className="text-neutral-500"><p>learn More</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
