import Image from 'next/image';

export default function AccountOverview() {
  return (
    <div className=" montserrat-page  bg-white">
      <div className='flex justify-center items-center'>

      <div className="w-full md:w-1/2 max-w-md ">
        <h1 className=" text-neutral-600 text-2xl font-bold font-['Montserrat'] leading-10 ">Free SealVPN</h1>

        <div className="border border-red-300 bg-red-50 text-red-700 px-4 py-3 mt-4 rounded">
          <p>
            <span className='text-neutral-600 text-base  leading-snug font-bold'>
            Yikes! You're out of free data!  
            </span> <span>  </span>
            <span className='text-neutral-500 text-base font-bold font-["Montserrat"] leading-normal'>
         Your browsing is no longer secure. To continue protecting your online
            privacy,<span>  </span>
            </span>
            <span className=" text-lime-800 text-base font-bold font-['Montserrat'] leading-normal">upgrade now</span>.
          </p>
        </div>

        <div className="text-sm text-gray-600 mt-4">
          <span className="text-neutral-600 text-base font-normal">
             <span className='text-red-500'>

            <img src="/accountOverview/dangericon.png" alt="Warning" className="inline-block w-4 h-4 mr-1" />
            </span>
             Free data refreshes in </span>
          <span className="text-neutral-600 text-base font-extrabold">30 days</span>
          <div className="mt-1 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-red-500  opacity-30 w-1/12"></div>
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-gray-800 font-medium">gontatudor@gmail.com</p>
            </div>
            <button className="text-lime-800 text-base font-normal">Change</button>
          </div>

          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="text-sm text-gray-500">Password</p>
              <p className="text-gray-800 font-medium">••••••••</p>
            </div>
            <button className="text-lime-800 text-base font-normal">Change</button>
          </div>
        </div>

        <button className="w-full bg-teal-400 mt-4 hover:bg-teal-500 text-white py-3 rounded-full font-semibold transition">
          Upgrade to unlimited data
        </button>
      </div>

      <div className="hidden md:flex md:w-1/2 justify-center">
        <div className="relative w-64 h-64">
          <Image src="/dogzzz.png" alt="Sleeping bear" layout="fill" objectFit="contain" />
        </div>
      </div>
      </div>
    </div>
  );
}
