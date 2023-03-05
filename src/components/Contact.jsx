import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-gray-800 '>Contact</h1>
        <form action={import.meta.env.VITE_FORM_KEY} method='POST' encType="multipart/form-data">
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2' htmlFor="name">Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="name" id="name" />
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2' htmlFor="phone">Phone</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="phone" id="phone" />
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2' htmlFor="email">Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name="email" id="email" />
            </div>
            <div className='flex flex-col py-2'> 
                <label className='uppercase text-sm py-2' htmlFor="subject">Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="subject" id="subject" />
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2' htmlFor="message">Message</label>
                <textarea className="border-2 rounded-lg p-3 border-gray-300 resize-none" rows={10} name="message" id="message" ></textarea>
            </div>
            <button className='bg-gray-800 text-gray-300 mt-4 w-full p-4 rounded-lg'>
                Send Message
            </button>
        </form>
    </div>
  )
}

export { Contact }