import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Features from "./Features";
import PaymentMethod from "./PaymentMethod";
import About from "./About";
import Cryptocurrencies from "./Cryptocurrencies";
import styled from "styled-components";
import AfterburnerX from "./AfterburnerX";
import Footer from "./footer";
import SignUpForm from "./signup";

const PaymentMethodsSection = styled.div`
    background-color: #fff;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    border-top: 2px solid #ddd;
`;

const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    border-radius: 8px;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;

const Afterburner = () => {
    const [showSignUp, setShowSignUp] = useState(false);

    const paymentMethods = [
        { src: "/Multi%20Card%20Checkout%20Logo.png", alt: "Card Networks", width: 150, height: 45 },
        { src: "/Apple%20Pay.jpg", alt: "Apple Pay", width: 75, height: 55 },
        { src: "/Google%20Pay.png", alt: "Google Pay", width: 70, height: 45 }
    ];

    return (
        <Router>
            <Navbar onSignUpClick={() => setShowSignUp(true)} />
            <Routes>
                <Route exact path="/" element={
                    <>
                        <HeroSection />
                        <Features />
                        <PaymentMethodsSection>
                            {paymentMethods.map((method, index) => (
                                <PaymentMethod key={index} method={method} />
                            ))}
                        </PaymentMethodsSection>
                    </>
                } />
                <Route path="/about" element={<About />} />
                <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                <Route path="/afterburnerx" element={<AfterburnerX />} />
            </Routes>
            <Footer />
            {showSignUp && (
                <>
                    <Overlay onClick={() => setShowSignUp(false)} />
                    <Modal>
                        <SignUpForm />
                        <button onClick={() => setShowSignUp(false)}>Close</button>
                    </Modal>
                </>
            )}
        </Router>
    );
};

export default Afterburner;