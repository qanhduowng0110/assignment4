import React from 'react'
import { Link } from 'react-router-dom'

import reentrancy from '/images/projectsImages/ERC721-reentrancy.png'
import collision from '/images/projectsImages/Storage-Collision.png'
import owntoken from '/images/projectsImages/My-Own-Token.png'
import basicsever from '/images/projectsImages/basic-web-sever.png'
import todo from '/images/projectsImages/Basic-Todo-List.png'
import flashloan from '/images/projectsImages/FlashLoan-Security.webp'
import slackbot from '/images/projectsImages/SLACKBOT-Age-Calculator.png'
import parkinglot from '/images/projectsImages/ParkingLot.png'
import aibasic from '/images/projectsImages/Simple-AI-assistant.png'
import aiadvanced from '/images/projectsImages/Advanced-AI-Chatbot.png'
import assignment2 from '/images/projectsImages/assignment2.webp'
import assignment4 from '/images/projectsImages/assignment4.png'


const AllProjects = () => {

    const projects = [
        {
            id: 1,
            src: reentrancy,
            demo: 'https://github.com/qanhduowng0110/ERC721-reentrancy',
            code: 'https://github.com/qanhduowng0110/ERC721-reentrancy'
        },
        {
            id: 2,
            src: collision,
            demo: 'https://github.com/qanhduowng0110/Storage-Collision',
            code: 'https://github.com/qanhduowng0110/Storage-Collision'
        },
        {
            id: 3,
            src: owntoken,
            demo: 'https://github.com/qanhduowng0110/My-Own-Token',
            code: 'https://github.com/qanhduowng0110/My-Own-Token'
        },
        {
            id: 4,
            src: basicsever,
            demo: 'https://github.com/qanhduowng0110/qanhduowng0110.basic-web-sever.io',
            code: 'https://github.com/qanhduowng0110/qanhduowng0110.basic-web-sever.io'
        },
        {
            id: 5,
            src: todo,
            demo: 'https://github.com/qanhduowng0110/Basic-Todo-List',
            code: 'https://github.com/qanhduowng0110/Basic-Todo-List'
        },
        {
            
            id: 6,
            src: flashloan,
            demo: 'https://github.com/qanhduowng0110/FlashLoan-Security',
            code: 'https://github.com/qanhduowng0110/FlashLoan-Security'
        },
        {
            id: 7,
            src: slackbot,
            demo: 'https://github.com/qanhduowng0110/SLACKBOT-Age-Calculator',
            code: 'https://github.com/qanhduowng0110/SLACKBOT-Age-Calculator'
        },
        {
            id: 8,
            src: parkinglot,
            demo: 'https://github.com/qanhduowng0110/ParkingLot',
            code: 'https://github.com/qanhduowng0110/ParkingLot'
        },
        {
            id: 9,
            src: aibasic,
            demo: 'https://github.com/qanhduowng0110/Simple-AI-assistant',
            code: 'https://github.com/qanhduowng0110/Simple-AI-assistant'
        },
        {
            id: 10,
            src: aiadvanced,
            demo: 'https://github.com/qanhduowng0110/Advanced-AI-Chatbot',
            code: 'https://github.com/qanhduowng0110/Advanced-AI-Chatbot'
        },
        {
            id: 11,
            src: assignment2,
            demo: 'https://github.com/qanhduowng0110/assignment2',
            code: 'https://github.com/qanhduowng0110/assignment2'
        },
        {
            id: 12,
            src: assignment4,
            demo: 'https://github.com/qanhduowng0110/assignment4',
            code: 'https://github.com/qanhduowng0110/assignment4'
        },

    ]

    const handleClickDemo = (demoUrl) => {
        const newWindow = window.open(demoUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    }

    const handleClickCode = (codeUrl) => {
        const newWindow = window.open(codeUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    }
    

    return (
        <section name="Projects" className='relative w-full text-white md:min-h-screen mt-24 mb-10'>
        
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl'>Projects</h2>
                    <p className='py-6'>Check out my best web applications here.</p>
                </div>

                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {
                        projects.map(({ id, src, demo, code }) => (
                                <div key={id} className='shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto'>
                                    <img loading='lazy' src={src} alt="project card" className='rounded-md duration-200 hover:scale-105' />
                                    <div className='flex items-center justify-center'>
                                        <button onClick={() => handleClickDemo(demo)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Demo</button>
                                        <button onClick={() => handleClickCode(code)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Code</button>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex justify-center'>
                <Link to='/' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300'>
                    <span className=''><i className='bx bx-home-heart mr-2'></i></span>
                    Go back
                </Link>
            </div>
        </section>
    )
}

export default AllProjects
