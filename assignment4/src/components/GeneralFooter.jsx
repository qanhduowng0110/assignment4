import React from 'react'

const GeneralFooter = () => {
    return (
        <footer className='relative mt-auto flex flex-col items-center text-gray-300 mb-6 gap-2 md:flex-row md:justify-evenly'>
            
            <div className='flex gap-x-4 md:order-last'>
                <a className='text-4xl hover:text-primary-color hover:animate-bounce' target='_blank' href="https://github.com/qanhduowng0110">
                    <i className='bx bxl-github' ></i>
                </a>

                <a className='text-4xl hover:text-primary-color hover:animate-bounce' target='_blank' href="https://www.linkedin.com/in/quang-anh-duong-2993931b0/">
                    <i className='bx bxl-linkedin-square' ></i>
                </a>

                <a className='text-4xl hover:text-primary-color hover:animate-bounce' target='_blank' href="https://ask.fm/">
                    <i className='bx bx-question-mark' ></i>
                </a>
            </div>

            <p className='md:order-2'>&copy; {new Date().getFullYear()} | All rights reserved.</p>
            <p>@anthony.duong</p>
        </footer>
    )
}

export default GeneralFooter
