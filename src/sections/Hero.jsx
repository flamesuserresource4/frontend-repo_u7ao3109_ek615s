import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center min-h-[80vh]">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-[0_0_30px_rgba(139,92,246,0.35)]"
          >
            Build Trust. Scale Faster. With Zylix.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-gray-300 text-lg max-w-xl"
          >
            We craft high-performing websites, intelligent AI systems, and bold digital brands that convert.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex items-center gap-4"
          >
            <Link
              to="/contact"
              className="px-6 py-3 rounded-md bg-[#8B5CF6] text-white font-semibold shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:shadow-[0_0_45px_rgba(139,92,246,0.8)] transition-shadow"
            >
              Start Your Project
            </Link>
            <a href="#services" className="text-gray-300 hover:text-white">Explore services</a>
          </motion.div>
        </div>

        <div className="pointer-events-none" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
    </section>
  )
}
