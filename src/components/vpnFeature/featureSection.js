import Image from "next/image";

export default function FeatureSection() {
    return (
        <div className="bg-gray-700 text-white px-6 py-12 md:py-20">
            <div className="flex justify-center text-center">
                <div className="w-full md:w-2/3">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Features for all your privacy needs
                    </h1>
                    <p className="mt-4 text-base md:text-lg">
                        Turn SeelVpn on. Enjoy all the benefits of a private connection.
                    </p>

                    {/* Feature Icons */}
                    <div className="grid grid-cols-2 md:grid-cols-4  mt-10">
                        <div className="flex justify-center">
                            <Image
                                src="/vpnFeatureImg/pravicy.png"
                                alt="Privacy"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src="/vpnFeatureImg/preformance.png"
                                alt="Performance"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src="/vpnFeatureImg/encryption.png"
                                alt="Encryption"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src="/vpnFeatureImg/worldWide.png"
                                alt="Worldwide"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
