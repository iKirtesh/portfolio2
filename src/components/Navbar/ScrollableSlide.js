// ScrollableSlide.js
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ScrollableSlide = ({ children, className }) => {
    const slideRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (slideRef.current) {
                const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
                const maxScrollLeft = slideRef.current.scrollWidth - slideRef.current.clientWidth;
                slideRef.current.scrollLeft = scrollPercentage * maxScrollLeft;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            ref={slideRef}
            className={`relative rounded-xl p-4 drop-shadow-sm overflow-x-auto ${className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollableSlide;
