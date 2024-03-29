import React, { useEffect } from 'react'
import Navbar from "./homepage-comps/Navbar"
import Home from "./homepage-comps/Home"
import About from "./homepage-comps/About"
import MyProjects from "./homepage-comps/MyProjects"
import Techs from "./homepage-comps/Techs"
import Contact from "./homepage-comps/Contact"
import CertificateSlider from './homepage-comps/CertificateSlider'

const HomePage = () => {
    const certificates = [

        {image: '/images/certificates/certificate1.png'},
        {image: '/images/certificates/certificate2.png'},
        {image: '/images/certificates/certificate3.png'},
        {image: '/images/certificates/certificate4.png'},
        {image: '/images/certificates/certificate5.png'},
        {image: '/images/certificates/certificate6.png'},
        {image: '/images/certificates/certificate7.png'},
        {image: '/images/certificates/certificate8.png'},
        {image: '/images/certificates/certificate9.png'},
        {image: '/images/certificates/certificate10.png'},
        
    ];


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Navbar />
            <Home />
            <About />
            <MyProjects />
            <Techs />
            <CertificateSlider certificates={certificates} />
            <Contact />
        </>
    )
}

export default HomePage