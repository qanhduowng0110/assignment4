import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

const AboutSectionAbout = () => {
    return (
        <section name="About" className='relative w-full h-screen'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-24 lg:py-0 lg:flex-row lg:gap-8'>
                
                <div className='flex mt-8 md:mt-0'>
                    <img src="/images/avt.jpg" alt="My profile" className='rounded-2xl mx-auto w-2/3 max-w-lg md:max-w-sm object-cover md:w-[70rem] shadow-2xl shadow-primary-color/20' style={{ filter: 'drop-shadow(0px -4px 4px rgba(0, 255, 0, 0.5))' }} />
                </div>

                <div className='flex flex-col justify-center items-center h-[85%] md:h-full'>
                    
                    <h1 className='text-4xl md:text-5xl font-bold text-white mb-2 md:mb-4'>Who I am?</h1>

                    <div className='flex items-center bg-primary-color/20 rounded-md py-2 px-4'>
                        <img className='h-[30px] w-auto mr-2' src="/icons/vietnam.png" alt="" />
                        <h2 className='text-lg sm:text-xl md:text-2xl md:py-1 font-semibold text-white'>Vietnamese - 24 years old</h2>
                    </div>
                    
                    <p className='text-md md:text-lg text-gray-300 py-4 max-x-md text-justify'>Hi there! I'm Anthony, a passionate software developer hailing from Vietnam. I graduated from the Posts and Telecommunications Institute of Technology, where I discovered my love for software development. It was during my time there that I stumbled upon Smart Contracts, and ever since then, I've been captivated by the world of programming.</p>

                    <p className='text-md md:text-lg text-gray-300 max-x-md text-justify'>I find immense joy in crafting elegant solutions to complex problems and leveraging technology to make a positive impact. Whether it's building innovative applications or diving into the intricacies of blockchain, I'm always eager to expand my skills and contribute to the ever-evolving tech landscape.</p>
                </div>
            </div>

            <ScrollLink to="Edition" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
                <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color'></i>
            </ScrollLink>
        </section>
    );
}

export default AboutSectionAbout
