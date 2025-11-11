import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-black text-white pt-24 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} className="text-4xl font-bold">
          Start your project
        </motion.h1>
        <p className="mt-3 text-gray-300">Tell us about your goals. We’ll get back within 24 hours.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"/>
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"/>
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows="5" required className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"/>
            </div>
            <button className="px-6 py-3 rounded-md bg-[#8B5CF6] text-white font-semibold shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:shadow-[0_0_45px_rgba(139,92,246,0.8)] transition-shadow">Send Message</button>
            {submitted && <p className="text-green-400">Thanks! We’ll be in touch shortly.</p>}
          </form>

          <div className="space-y-4 text-gray-300">
            <div className="rounded-xl border border-white/10 p-6 bg-white/5">
              <p className="text-white font-semibold">Address</p>
              <p className="mt-1">123 Innovation Drive, Suite 200, San Francisco, CA</p>
            </div>
            <div className="rounded-xl border border-white/10 p-6 bg-white/5">
              <p className="text-white font-semibold">Email</p>
              <p className="mt-1">hello@zylix.studio</p>
            </div>
            <div className="rounded-xl border border-white/10 p-6 bg-white/5">
              <p className="text-white font-semibold">Social</p>
              <div className="mt-2 flex gap-4">
                <a className="hover:text-white" href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
                <a className="hover:text-white" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="hover:text-white" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
