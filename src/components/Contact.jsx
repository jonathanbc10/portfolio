/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'


const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_h8uxr7e',
      'template_5ll8ipm',
      {
        from_name: form.name,
        to_name: 'Jonathan',
        from_email: form.email,
        to_email: 'hydrogntm@gmail.com',
        message: `From: ${form.name} (${form.email})\n\n${form.message}`
      },
      'cH9ROXcFJ4YKXnCRE'
    ).then(
      () => {
        setLoading(false)
        alert('Thanks for contacting me! I will reply back ASAP!')

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (err) => {
        setLoading(false)
        console.log(err)
        alert('Oops! Something went wrong. Please try again later!')
      }
    )
  }

  return (
    <div className='xl:mt-12 xl:flex-row 
    flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={`${styles.sectionSubText}`}>
          Get in touch
        </p>
        <h3 className={`${styles.sectionHeadText}`}>Contact me!</h3>

        <form ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Your name goes here...'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your mail</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='And your email in here'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your message</span>
            <textarea
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Don&apos;t forget to write your message'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold
            shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')