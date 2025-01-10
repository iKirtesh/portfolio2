import React, { useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from "./components/Navbar/About";
import Skills from "./components/Navbar/Skills";
import Project from "./components/Navbar/Projects";
import Education from "./components/Navbar/Education";
import Contact from "./components/Navbar/Contact";
import Footer from "./components/Navbar/Footer";

function App() {
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectRef = useRef(null);
    const educationRef = useRef(null);
    const contactRef = useRef(null);

    const sectionRefs = {
        'About': aboutRef,
        'Skills': skillsRef,
        'Projects': projectRef,
        'Education': educationRef,
        'Contact': contactRef,
    };

    return (
        <div className="w-full">
            <Navbar sectionRefs={sectionRefs} />
            <div>

            </div>
            <div ref={aboutRef}><About /></div>
            <div ref={skillsRef}><Skills /></div>
            <div ref={projectRef}><Project /></div>
            <div ref={educationRef}><Education /></div>
            <div ref={contactRef}><Contact /></div>
            <Footer />
        </div>
    );
}

export default App;
