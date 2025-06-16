"use client";
import Image from "next/image";
import WhatIsVpnFirstSection from "@/components/whatIs-vpn/whats-vpn";
import Link from "next/link";

export default function WhatIsVPN() {
  return (
    <div>
      <WhatIsVpnFirstSection />

      <div className="bg-white px-4 py-12 md:py-20 text-center text-gray-800">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          What is a VPN?
        </h2>

        <div className="max-w-3xl mx-auto text-sm md:text-base leading-relaxed space-y-5">
          <p>
            A VPN is an app that keeps your internet connection private, whether
            you’re connecting to unsafe public Wi-Fi or your network at home.
            Having a layer of security that blocks people from watching you
            browse helps keep you safe online, no matter where you connect from.
          </p>
          <p>
            Virtual private networks protect you by creating an encrypted
            “tunnel” that all of your device’s data travels through on its way
            to the internet. Encryption turns words and data, like text files,
            into secret code. If someone tries to read encrypted data without
            the password, they’ll see random gibberish.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-6">
            <Image
              src="/whatIsVpn/whatisVpn.png"
              alt="Unencrypted Data"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full sm:w-1/2 h-auto object-cover"
            />
          </div>

          <p className="text-gray-500 text-sm italic">
            SeelVPN makes your data unreadable between you and its destination
          </p>

          <p>
            A VPN acts as your gateway for accessing the internet privately. VPN
            software can be installed on most popular devices, like your phone,
            laptop and desktop. One important thing to remember is: a VPN
            protects the internet data that’s sent over your connection. You’ll
            still need an ISP to connect to the internet; your VPN runs on top
            of that connection.
          </p>
        </div>

        {/* Quotation Block */}
        <div className="bg-white px-4 pt-16 md:pt-24 text-center text-gray-800">
          <p className="text-sky-500 text-lg md:text-xl font-medium max-w-3xl mx-auto mb-10">
            “ A VPN encrypts your internet connection to keep your online
            activity private on any network. ”
          </p>

          {/* Icons Block */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-16">
            <div className="flex flex-col items-center">
              <Image
                src="/whatIsVpn/eye.png"
                alt="Private Browsing Icon"
                width={64}
                height={64}
              />
              <p className="mt-4 text-sm text-gray-600 max-w-xs text-center">
                Your browsing is private, so you can’t be easily tracked online
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/whatIsVpnImg/flagInBottle.png"
                alt="Location Change Icon"
                width={64}
                height={64}
              />
              <p className="mt-4 text-sm text-gray-600 max-w-xs text-center">
                Your connection looks like it's coming from another country,
                which unlocks some websites
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/whatIsVpnImg/vpnSearch.png"
                alt="Encrypted Icon"
                width={64}
                height={64}
              />
              <p className="mt-4 text-sm text-gray-600 max-w-xs text-center">
                Your internet connection is encrypted, keeping the information
                you send and receive private
              </p>
            </div>
          </div>

          {/* Why VPN Section */}
          <div className="max-w-3xl mx-auto text-left">
            <h3 className="text-2xl font-semibold text-center mb-6">
              Why do I need a VPN?
            </h3>
            <p className="text-sm text-gray-700 mb-5">
              The reasons why you need a VPN are personal, and a little
              different for everyone. Some people use a VPN to bypass
              geo-restrictions and stay in touch with loved ones while traveling
              in heavily censored countries. Other people use VPNs to stay
              secure on public Wi-Fi. Some people just like knowing their
              internet service provider can’t see what they’re browsing every
              time they go online.
            </p>
            <p className="text-sm text-gray-700 mb-5">
              While the benefits of using a VPN are just starting to go
              mainstream, it wasn’t long ago that people had trouble seeing the
              importance of encryption. As hacking and data breaches became more
              common, people realized how much of their online browsing was
              visible to their ISP or local networks (long before there was
              “work” and “kids” at home). With this more broad type of VPN
              protection, you enjoy any kind of private protection.
            </p>
            <p className="text-sm text-gray-700">
              Just like you need protection from viruses, you need to protect
              yourself from privacy threats. Using a VPN gives you{" "}
              <span className="text-sky-500 underline">
                protection in a layer of encryption
              </span>
              , making it harder for people to spy on you online.
            </p>
          </div>
          <p className="text-sky-500 text-lg md:text-xl font-medium max-w-3xl mx-auto my-10">
            “You need a VPN because they provide security and protect you
            privacy”
          </p>
          <p className="text-gray-500 text-sm italic">
            SeelVPN makes your data unreadable between you and its destination
          </p>
        </div>
      </div>

      <div className="bg-white px-4 py-12 md:py-20 text-center text-gray-800">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Top reasons people use VPN
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16">
          {[
            {
              title: "Change your IP address",
              description:
                "Your IP address is kind of like a phone number that tells websites where you are and how to connect to your device. SeelVpn gives you a new IP, so all of your traffic looks like it's coming from somewhere else.",
              imageSrc: "/change-ip-address-img.svg",
            },
            {
              title: "Block online tracking",
              description:
                "Advertisers invade your online privacy by targeting your IP for ads. By changing your IP address, SeelVpn blocks common ways advertising trackers follow you around the internet.",
              imageSrc: "/pricing/freeOfferImg.svg",
            },
            {
              title: "Stay safe on public WiFi",
              description:
                "People love public Wi-Fi, but so do hackers. With simple tools, they can capture passwords and logins as they pass through a shared Wi-Fi point. Keep your accounts safe by encrypting your connection with SeelVpn.",
              imageSrc: "/vpnFeature/vpn.svg",
            },

            {
              title: "Stay connected to home",
              description:
                "Don't miss out on current events or local news when you're traveling. With servers in 47 countries SeelVpn can help you stay connected to home as if you were there.",
              imageSrc: "/vpnFeatureImg/worldWide.svg",
            },
            {
              title: "Stream video faster",
              description:
                "Internet service providers regularly throttle services they compete with, but with SeelVpn, you can avoid throttling by keeping your browsing private from your service provider.",
              imageSrc: "/vpnFeatureImg/performanceImg.png",
            },
            {
              title: "Bypass censorship",
              description:
                "More governments are trying to censor news and communications outside their borders. SeelVpn can help bypass censorship by connecting to a server in another country, so you can get the information you need.",
              imageSrc: "/bypassLocal.svg",
            },

            {
              title: "Travel securely",
              description:
                "Don't trust the Wi-Fi in your hotel? SeelVpn’s Grizzly-grade encryption lets you safely check your email, bank account, book flights and more—all without risking your personal information.",
              imageSrc: "/travel-securely.svg",
            },
            {
              title: "Protect your online privacy",
              description:
                "Most websites ignore your Human Right to privacy. Whether it's your internet service provider monitoring your connection or advertisers tracking you, exercising your right to privacy is becoming more difficult. With SeelVpn, all of your browsing is encrypted so no one else can see what you're doing.",
              imageSrc: "/vpnFeatureImg/encryptionImg.png",
            },
            {
              title: "Peer-To-Peer",
              description:
                "Internet service providers regularly slow, and even block, torrent connections on their networks. SeelVpn protects you from disconnects and blocks ISP from seeing your traffic, so they can't slow it down.",
              imageSrc: "/vpnFeatureImg/performance.svg",
            },
          ].map(({ title, description, imageSrc }, index) => (
            <div
              key={title + index}
              className="bg-neutral-100 p-6 rounded-lg shadow-md flex flex-col items-center gap-4"
            >
              <Image
                src={imageSrc}
                alt={title}
                width={200} // set actual width in px
                height={192} // match or approximate `h-48`
                className="w-auto h-48"
                priority={index < 3} // Optional: prioritize first few images
              />

              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-lg font-normal">{description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white px-4 py-16 md:py-24 text-center text-gray-800">
          <div className="max-w-3xl mx-auto text-left">
            <h3 className="text-2xl font-semibold text-center mb-6">
              What does a VPN do and how does it work?
            </h3>

            <h4 className="text-xl font-bold mb-4">Security</h4>
            <p className="text-sm text-gray-700 mb-5 text-justify">
              A VPN encrypts your connection and protects your personal data
              from being intercepted and read by attackers. Typical things
              attackers try to steal are passwords, credit card information, and
              private messages.
            </p>

            <h4 className="text-xl font-bold mb-4">Privacy</h4>
            <p className="text-sm text-gray-700 mb-5 text-justify">
              Using a VPN adds a layer of privacy to your online life. A VPN
              prevents your ISP, employer, or network owner from logging all the
              sites you visit, and stops websites from following your IP address
              around the internet.
            </p>

            <h4 className="text-xl font-bold mb-4">Access</h4>
            <p className="text-sm text-gray-700 mb-5 text-justify">
              VPN provide access to an open and unrestricted internet. By
              connecting to servers in other countries, VPN help you bypass
              government censorship bans on news sites, social networks, games,
              or other websites you love.
            </p>
            <p className="text-sm text-gray-700 mb-5 text-justify">
              VPN work by creating a secure tunnel that protects your device's
              connection to the internet. That protection is a layer of
              encryption, or coded language, only your VPN app and the server
              understand. With an encrypted connection, no one can monitor your
              online activity. If someone tried to track what you were doing,
              they would only see a random series of numbers and letters.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F6F6F6] px-4 py-12 md:py-20 text-center text-gray-800">
        <div className="px-4">
          <div className="max-w-3xl mx-auto text-left">
            <h3 className="text-2xl font-semibold text-center mb-6">
              With SeelVpn
            </h3>

            <p className="text-lg text-gray-700 mb-5 text-center">
              Your data is protected inside an encrypted tunnel from ISPs,
              network owners, and hackers.
            </p>

            <Image
              src="/with-seel-vpn-img.svg"
              alt="with-seel-vpn"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="bg-white px-4 text-center text-gray-800">
        <div className="bg-white px-4 py-16 md:py-24 text-center text-gray-800">
          <div className="max-w-3xl mx-auto text-left">
            <h3 className="text-2xl font-semibold text-center mb-6">
              What does a VPN client do exactly?
            </h3>

            <p className="text-sm text-gray-700 mb-5 text-justify">
              To use VPN software, you need something called a VPN client.
              "Client" is really just another term for app, but the difference
              is that clients act as a gateway between your device and the
              service you're trying to connect to. Clients aren't a standalone
              app.
            </p>

            <p className="text-sm text-gray-700 mb-5 text-justify">
              Your device connects to the VPN server through the VPN client.
              Once you're connected, the client gives you access to the VPN
              service.
            </p>

            <p className="text-sm text-gray-700 mb-5 text-justify">
              VPN aren't the only software that use clients. Some well-known
              examples of clients are online games like Fortnite or the Adobe
              Creative Suite.
            </p>
          </div>
          <p className="text-sky-500 text-lg md:text-xl font-medium max-w-3xl mx-auto my-10">
            “ ...clients act as a gateway between your device and the service...
            ”
          </p>
        </div>
      </div>

      <div className="bg-[#F6F6F6] px-4 py-12 md:py-20 text-center text-gray-800">
        <div className="px-4">
          <div className="max-w-3xl mx-auto text-left flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-center mb-6">
              How do I install a VPN?
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-16">
              {[
                {
                  title: "Download the app",
                  description:
                    "SeelVpn apps are available for PC, Mac, iPhone and Android.",
                  imageSrc: "/vpnFeature/Strong.svg",
                },
                {
                  title: "Create an account",
                  description:
                    "Use your email and create a password.",
                  imageSrc: "/create-account-img.svg",
                },
                {
                  title: "Connect",
                  description:
                    "Tap the button to connect to the VPN.",
                  imageSrc: "/vpnFeatureImg/worldWide.svg",
                },
              ].map(({ title, description, imageSrc }, index) => (
                <div
                  key={title + index}
                  className="p-2 flex flex-col items-center gap-3"
                >
                  <Image
                    src={imageSrc}
                    alt={title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto h-36"
                  />

                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="text-base font-normal text-center">{description}</p>
                </div>
              ))}
            </div>

            <Link
              href="/download-device"
              className="bg-teal-400 hover:bg-teal-500 active:opacity-70 text-white px-6 py-2 rounded-full text-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white px-4 text-center text-gray-800">
        <div className="bg-white px-4 py-16 md:py-24 text-center text-gray-800">
          <div className="max-w-3xl mx-auto text-left">
            <h3 className="text-2xl font-semibold text-center mb-6">
              How do I use my VPN once it has been set up?
            </h3>

            <p className="text-sm text-gray-700 mb-5 text-justify">
              Once your VPN has been set up, just pick a country and turn it on.
              The VPN runs in the background as you browse. The most noticeable
              difference is that you should have access to websites you didn't
              have access to before.
            </p>

            <p className="text-sm text-gray-700 mb-5 text-justify">
              Most VPN providers offer servers in different countries. This is
              how people regularly bypass censorship and unblock websites. If
              you're trying to access something that's blocked in your country,
              connecting to a server in another country should give you access.
            </p>
          </div>
          <Image
            src="/set-vpn-setup-img.svg"
            alt="with-seel-vpn"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full max-w-80 h-auto mx-auto my-8"
          />

          <p className="text-gray-500 text-sm italic">
            Choose a country and switch SeelVpn on, that's it!
          </p>
        </div>
      </div>
    </div>
  );
}
