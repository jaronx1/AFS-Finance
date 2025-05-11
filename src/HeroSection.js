import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeroSection = styled(motion.section)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(to bottom, blue, black);
    color: white;
    text-align: center;
    padding: 1.5rem;
`;

const HeroTitle = styled(motion.h1)`
    font-size: 5rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

const HeroText = styled(motion.p)`
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
`;

const HeroButton = styled(motion.button)`
    background-color: purple;
    color: white;
    font-weight: bold;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-size: 1.25rem;
    &:hover {
        background-color: #4b0082;
    }
`;

const Hero = () => {
    const [buttonText, setButtonText] = useState("Get Started");

    const handleClick = () => {
        setButtonText("Loading...");
        setTimeout(() => {
            setButtonText("Get Started");
        }, 2000);
    };

    return (
        <HeroSection>
            <HeroTitle
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Buy, Store, and Trade Crypto Securely
            </HeroTitle>
            <HeroText
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                A seamless way to manage your digital assets. Quick, secure, and beginner-friendly
            </HeroText>
            <HeroButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClick}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                {buttonText}
            </HeroButton>
        </HeroSection>
    );
};

export default Hero;
