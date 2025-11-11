import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Launch',
    price: '$1,499',
    features: ['Modern landing page', 'Basic brand kit', 'Analytics setup'],
    stripePriceId: 'price_123_launch',
  },
  {
    name: 'Growth',
    price: '$4,900',
    features: ['Multipage website', 'AI automations', 'Brand system & guidelines'],
    stripePriceId: 'price_123_growth',
    highlighted: true,
  },
  {
    name: 'Scale',
    price: '$9,900',
    features: ['Custom web app', 'Advanced AI workflows', 'Dedicated success manager'],
    stripePriceId: 'price_123_scale',
  },
]

const stripeKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY

export default function Services() {
  const handleCheckout = (priceId) => {
    // For demo: redirect to a placeholder Stripe link or pricingId anchor
    // In production, create a Checkout Session on the backend and redirect here.
    const url = `https://buy.stripe.com/test_eVa3fG1Hq8aQ8wQ7ss?prefilled_promo_code=${priceId}`
    window.location.href = url
  }

  return (
    <main className="bg-[#0B0B0B] text-white pt-24 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} className="text-4xl font-bold">
          Services & Pricing
        </motion.h1>
        <p className="mt-3 text-gray-300">Choose a package that matches your goals.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <motion.div key={p.name} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} className={`relative rounded-2xl p-6 border ${p.highlighted ? 'border-[#8B5CF6] shadow-[0_0_50px_rgba(139,92,246,0.25)]' : 'border-white/10'} bg-gradient-to-b from-white/5 to-black/20`}>
              {p.highlighted && <span className="absolute -top-3 right-4 text-xs px-2 py-1 rounded bg-[#8B5CF6] text-black font-semibold">Popular</span>}
              <h3 className="text-2xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-3xl font-bold">{p.price}</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                {p.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              <button onClick={() => handleCheckout(p.stripePriceId)} className="mt-6 w-full py-3 rounded-md bg-[#8B5CF6] text-white font-semibold shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:shadow-[0_0_45px_rgba(139,92,246,0.8)] transition-shadow">Order Now</button>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
