import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Nav = styled(motion.nav)`
    position: sticky;
    top: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background-color: black;
    color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 2px solid #4b0082; 
    border-radius: 8px; 
    margin: 0.5rem; 
`;

const Title = styled(motion.h1)`
    font-size: 2rem;
    font-weight: bold;
`;

const NavList = styled(motion.ul)`
    display: flex;
    gap: 1.5rem;
`;

const NavItem = styled(motion.li)`
    position: relative;

    a {
        color: white;
        text-decoration: none;
        position: relative;
        &:hover {
            color: gray;
        }

        &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 0;
            height: 2px;
            background-color: gray;
            transition: width 0.3s ease;
        }

        &:hover::after {
            width: 100%;
        }
    }
`;

const SignUpButton = styled(motion.button)`
    background: linear-gradient(45deg, #6a0dad, #4b0082);
    color: white;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    }
`;

const Navbar = ({ onSignUpClick }) => {
    return (
        <Nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <Title
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                AFS (coming soon)
            </Title>
            <NavList
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}
            >
                {[
                    { to: "/#features", label: "Features" },
                    { to: "/about", label: "About" },
                    { to: "/cryptocurrencies", label: "Cryptocurrencies" },
                    { to: "/afterburnerx", label: "AfterburnerX" },
                ].map((item) => (
                    <NavItem
                        key={item.label}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link to={item.to}>{item.label}</Link>
                    </NavItem>
                ))}
            </NavList>
            <SignUpButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onSignUpClick}
            >
                Sign Up
            </SignUpButton>
        </Nav>
    );
};

export default Navbar;