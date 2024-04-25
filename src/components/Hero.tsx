// import React from 'react'
import Asset1 from '../assets/asset1.png'
const Hero = () => {
  return (
    <div className="px-8 md:px-24">
    <header className='flex flex-col justify-center md:flex-row md:items-center md:space-x-4 mt-10 md:mt-1/2'>
        <div className="md:w-1/2">
            <h1 className='text-4xl md:text-7xl text-green-500 mt-8 md:mt-0 md:ml-24'>Eat Healthy</h1>
            <h1 className='text-4xl md:text-7xl text-green-500 md:ml-28 mb-4'>Live Happy</h1>
            <p className='text-lg md:text-3xl md:ml-28 mb-4'>Order a healthy and well-balanced meal. It’s all homemade… "Ghar ka khana just the way you want."</p>
            <div className="flex justify-center md:justify-start">
                <button className='bg-green-500 text-slate-950 px-6 py-2 rounded-full text-lg md:text-xl ml-0 md:ml-28 hover:bg-lime-500'>Check Meals</button>
            </div>
        </div>
        <div className="md:w-1/2">
            <img src={Asset1} alt="image" className='md:h-[400px] md:w-[400px] mt-8 md:mt-0 mr-8 md:mr-12'/>
        </div>
    </header>

    <section className='flex flex-col gap-4 md:gap-0 items-center mt-10'>
        <p className='font-poppins text-lg md:text-xl text-teal-950 mb-4'>āyuḥ-sattva-balārogya- sukha-prīti-vivardhanāḥ- rasyāḥsnigdhāḥsthirāhṛdyā- āhārāḥsāttvika-priyāḥ.</p>
        <p className='font-poppins text-lg md:text-xl text-teal-950 mb-4'>Foods dear to those in the mode of goodness increase the duration of life, purify one’s existence and give strength,</p>
        <p className='font-poppins text-lg md:text-xl text-teal-950 mb-4'>health, happiness and satisfaction. Such foods are juicy, fatty, wholesome, and pleasing to the heart.</p>
    </section>
</div>





  )
}

export default Hero
