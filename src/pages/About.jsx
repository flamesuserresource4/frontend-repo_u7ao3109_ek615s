import { motion } from 'framer-motion'

const team = Array.from({ length: 6 }).map((_, i) => ({ id: i + 1 }))

export default function About() {
  return (
    <main className="bg-black text-white pt-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} className="text-4xl font-bold">
          About Zylix
        </motion.h1>
        <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{duration:0.6, delay:0.1}} className="mt-4 text-gray-300 max-w-2xl">
          Our vision is to be the most trusted digital partner for ambitious brands. Our mission is to design and engineer digital products that are elegant, reliable, and deliver measurable business impact.
        </motion.p>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Our Team</h2>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((m) => (
              <div key={m.id} className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-gradient-to-tr from-white/10 to-transparent"/>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Our Values</h2>
          <div className="mt-6 grid sm:grid-cols-3 gap-6">
            {[{t:'Innovation',d:'We push boundaries with curiosity and rigor.'},{t:'Trust',d:'We deliver consistently and communicate transparently.'},{t:'Professionalism',d:'We hold ourselves to the highest standards.'}].map(v => (
              <div key={v.t} className="rounded-xl border border-white/10 p-6 bg-white/5">
                <p className="text-xl font-semibold text-white">{v.t}</p>
                <p className="mt-2 text-gray-300">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
