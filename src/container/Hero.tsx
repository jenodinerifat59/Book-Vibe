import React from 'react'
import BannerImg from '@/assets/hero_img.jpg'
import Image from 'next/image'
const Hero = () => {
  return (
    <section className='container bg-gray-200 rounded-2xl p-5 mx-auto grid grid-cols-2 justify-between items-center gap-21.5'>
        <div className='pl-20'>
            <h1 className='text-4xl font-bold text-black py-2 mb-7'>Books to freshen up <br/> your bookshelf</h1>
            <button className='btn bg-success text-white'>View The List</button>
        </div>
        <Image src={BannerImg} alt='banner image ' height={500} width={400} className='py-20'/>

     
      
    </section>
  )
}

export default Hero
