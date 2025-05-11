import React from "react";
import styled from "styled-components";

const FeaturesSection = styled.div`
    background-color: #1a1a1a;
    color: white;
    padding: 2rem;
    text-align: center;
`;

const Feature = styled.div`
    background-color: #333;
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 1rem;
`;

const Features = () => {
    return (
        <FeaturesSection id="features">
            <h2>Why Choose Us?</h2>
            <Feature>
                <h3>Secure Transactions</h3>
                <p>We use industry standard security protocols to keep your assets safe.</p>
            </Feature>
            <Feature>
                <h3>Asset Protection</h3>
                <p>Hold your assets on your own personal non-custodial wallet.</p>
            </Feature>
            <Feature>
                <h3>Fast Processing</h3>
                <p>Experience lightning-fast transaction speeds.</p>
            </Feature>
            <Feature>
                <h3>Low Gas Fees</h3>
                <p>Enjoy competitive transaction fees with no hidden costs.</p>
            </Feature>
            <Feature>
                <h3>Live Support</h3>
                <p>Our support team is here to help you resolve issues 24/7.</p>
            </Feature>
            <Feature>
                <h3>Easy-to-Use Interface</h3>
                <p>Our platform is built for both beginners and experts.</p>
            </Feature>
        </FeaturesSection>
    );
}

export default Features;