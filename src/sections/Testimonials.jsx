import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Ava Thompson',
    role: 'COO, Nebula Labs',
    quote:
      'Zylix rebuilt our site and conversions jumped 38% in the first month. The team is strategic and lightning fast.',
  },
  {
    name: 'Daniel Wu',
    role: 'Founder, CartAI',
    quote:
      'Their AI automation saved us hundreds of hours. Professional, reliable, and results-driven.',
  },
  {
    name: 'Sophia Martins',
    role: 'Head of Brand, OrbitX',
    quote:
      'We finally have a brand that matches our ambition. Everything feels cohesive and premium.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          What our clients say
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 text-white hover:shadow-[0_10px_40px_rgba(139,92,246,0.25)] hover:-translate-y-1 transition-all"
            >
              <p className="text-gray-300">“{t.quote}”</p>
              <div className="mt-4 text-sm text-gray-400">
                <p className="font-medium text-white">{t.name}</p>
                <p>{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
