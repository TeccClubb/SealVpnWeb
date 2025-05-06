import Image from 'next/image';

export default function Billinghistory() {
  return (
    <div className="flex montserrat-page  bg-white p-12">
       <div>
        <div>
            <span className=' text-neutral-600 text-4xl font-bold font-["Montserrat"] leading-10'>
            Two-Factor Authentication
            </span>
        </div>
        <div className='mt-4 w-xl border-bottom border-neutral-300'>
            <span className='text-neutral-500 text-base font-normal font-["Montserrat"] leading-normal'>
            Use an additional code to protect your account when logging in. Learn more about Two-Factor Authentication.
            </span>
        </div>
       </div>
       
    </div>
  );
}
