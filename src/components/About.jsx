/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
)

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Intro</p>
        <h2 className={styles.sectionHeadText}>This is me</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className={`mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]`}
      >
        Hey, I&apos;m a JavaScript Ninja 🥷 with a passion for web tech.
        Started my ninja path @ 11yo.
        <br />
        💻 Web apps, hybrid solutions, and immersive experiences are my specialties.
        Working with HTML5, CSS3, JavaScript, MongoDB, ExpressJS, ReactJS, and NodeJS (MERN Stack) gets my creative juices flowing.
        Let&apos;s bring your ideas to life! 🚀
        <br />
        I&apos;m also that weird guy who works with Linux 🐧 and develop scripts with bash.
        <br />
        What can I say? Linux makes me look like a pro hacker 👨🏻‍💻
        <br />
        🎨 Visual wizard with Three.js & OpenAI API enthusiast 🤖
        Fast learner, fueled by my love for technology.
        Oh, and did I mention I&apos;m a big Naruto fan?
        Let&apos;s create something extraordinary together!
      </motion.p>

      {/* Keep in mind the justify-center - not decided yet */}
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div>
    </>
  )
}


export default SectionWrapper(About, 'about')