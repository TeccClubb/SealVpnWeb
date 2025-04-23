'use client';

import CheckoutPage from '@/components/checkOut/checkout';
import FAQSection from '@/components/homeSections/frequentQuestionSection';
import Image from 'next/image';

export default function Checkout() {
    
    return (
       <div>
        <CheckoutPage></CheckoutPage>
        <FAQSection></FAQSection>
       </div>
    );
}
