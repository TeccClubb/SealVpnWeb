import { redirect } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function Return({ searchParams }) {
  const { session_id } = await searchParams

  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  const {
    status,
    customer_details: { email: customerEmail, name: customerName },
    amount_total,
    currency,
    line_items,
    payment_intent,
    metadata
  } = session

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
    const lineItem = line_items?.data[0]
    const planName = lineItem?.description || 'VPN Plan'
    const amount = (amount_total / 100).toFixed(2)
    const paymentId = payment_intent?.id

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Payment Successful! 🎉
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Welcome to SeelVPN! Your subscription is now active and you're ready to browse securely.
            </p>
          </div>

          {/* Payment Details Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Order Summary */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Plan:</span>
                    <span className="font-medium text-gray-800">{planName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Customer:</span>
                    <span className="font-medium text-gray-800">{customerName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium text-gray-800">{customerEmail}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Amount Paid:</span>
                    <span className="font-semibold text-green-600 text-xl">
                      ${amount} {currency?.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Payment ID:</span>
                    <span className="font-mono text-sm text-gray-500">{paymentId}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium text-gray-800">
                      {new Date().toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Confirmation Message */}
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">What's Next?</h3>
                <div className="space-y-3 text-green-700">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Confirmation email sent to {customerEmail}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Account created and ready to use</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Download apps and start browsing securely</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Link href="/Download" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl text-center transition-colors duration-200 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Apps
            </Link>
            
            <Link href="/Dashboard" 
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl text-center transition-colors duration-200 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Go to Dashboard
            </Link>
            
            <Link href="/help" 
                  className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-xl text-center transition-colors duration-200 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Need Help?
            </Link>
          </div>

          {/* Download Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Download SeelVPN Apps
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Get started by downloading our apps for all your devices
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Windows', icon: '/buttonImg/windows.svg', link: '/download-device?device=windows' },
                { name: 'macOS', icon: '/buttonImg/apple.svg', link: '/download-device?device=mac' },
                { name: 'Android', icon: '/buttonImg/android.svg', link: '/download-device?device=android' },
                { name: 'iOS', icon: '/buttonImg/ios.svg', link: '/download-device?device=ios' }
              ].map((platform) => (
                <Link key={platform.name} href={platform.link}
                      className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 group">
                  <Image src={platform.icon} alt={platform.name} width={40} height={40} 
                         className="mb-3 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium text-gray-700 group-hover:text-blue-600">
                    {platform.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Support Section */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need assistance? Our support team is here to help 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:support@seelvpn.com" 
                 className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@seelvpn.com
              </a>
              <Link href="/help" 
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Fallback for other statuses
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Payment Status Unknown</h1>
        <p className="text-gray-600 mb-6">
          We couldn't determine the status of your payment. Please contact support if you need assistance.
        </p>
        <Link href="/" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
          Go Home
        </Link>
      </div>
    </div>
  )
}