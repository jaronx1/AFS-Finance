import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const gradientAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

const AfterburnerXContainer = styled.div`
    height: 100vh;
    padding: 2rem;
    background: linear-gradient(270deg, #ff7eb3, #ff758c, #ff6a6a, #ff758c);
    background-size: 400% 400%;
    animation: ${gradientAnimation} 10s ease infinite;
    color: #333;
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding-top: 10vh;
`;

const Title = styled.h1`
    font-size: 3rem;
    color: #4b0082;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-bottom: 0.5rem;
`;

const Subtitle = styled.h2`
    font-size: 2rem;
    color: #4b0082;
    margin-bottom: 1rem;
`;

const Description = styled.p`
    font-size: 1.5rem;
    color: #333;
    text-align: center;
    max-width: 800px;
    line-height: 1.8;
`;

const Form = styled.form`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

const Input = styled.input`
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    width: 300px;
`;

const Button = styled.button`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #fff;
    background-color: #4b0082;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #3a0066;
    }
`;

const Message = styled.p`
    font-size: 1.5rem;
    color: #333;
    text-align: center;
    margin-bottom: 1rem;
`;

const AfterburnerX = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        console.log("Email submitted:", email);
        alert("Thank you! We will reach out to you soon.");
        setEmail("");
    };

    return (
        <AfterburnerXContainer>
            <Title>AfterburnerX</Title>
            <Subtitle>Coming Soon</Subtitle>
            <Description>
                AfterburnerX is a premium subscription service designed to help you learn directly from our expert traders. Gain exclusive insights, strategies, and techniques to maximize your profits and achieve your financial goals. Stay tuned for the launch of this transformative learning experience.
            </Description>
            <Form onSubmit={handleSubmit}>
                <Message>
                    Leave your email below, and we’ll reach out to you with updates and exclusive offers!
                </Message>
                <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Button type="submit">Submit</Button>
            </Form>
        </AfterburnerXContainer>
    );
};

export default AfterburnerX;