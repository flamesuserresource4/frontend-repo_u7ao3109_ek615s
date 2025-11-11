import { motion } from 'framer-motion'
import { Code, Sparkles, Palette } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Design & Development',
    description: 'Conversion-focused, performant websites built with modern stacks.',
  },
  {
    icon: Sparkles,
    title: 'AI Development',
    description: 'Custom AI solutions that automate work and unlock new opportunities.',
  },
  {
    icon: Palette,
    title: 'Digital Branding',
    description: 'Bold, consistent visual identities that build trust and recognition.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          What we do
        </motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(139,92,246,0.25)] transition-all"
            >
              <Icon className="h-6 w-6 text-[#8B5CF6]" />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-gray-300">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
