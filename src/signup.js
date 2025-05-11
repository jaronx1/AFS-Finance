import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
    width: 100%;
    max-width: 300px;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const SubmitButton = styled.button`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #fff;
    background-color: #4b0082;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #3a0066;
    }
`;

const Message = styled.p`
    font-size: 0.9rem;
    color: green;
`;

const SignUpForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username.trim() || !email.trim() || !password.trim()) {
            setMessage("Please fill out all fields.");
            return;
        }

        // Save username, email, and password to localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        setMessage("Sign-up successful! We will contact you when afs goes live!");
        setUsername("");
        setEmail("");
        setPassword("");
    };

    return (
        <FormContainer>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <SubmitButton type="submit">Sign Up</SubmitButton>
            </form>
            {message && <Message>{message}</Message>}
        </FormContainer>
    );
};

export default SignUpForm;