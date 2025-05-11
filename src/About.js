import React from "react";
import styled, {keyframes} from "styled-components";

const gradientAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

const AboutContainer = styled.div`
    height: 100vh;
    padding: 2rem;
    background: linear-gradient(270deg, #ff7eb3, #ff758c, #ff6a6a, #ff758c);
    background-size: 400% 400%;
    animation: ${gradientAnimation} 10s ease infinite;
    color: #333;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
`;

const Header = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: #4b0082;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Description = styled.p`
    font-size: 1.5rem;
    color: #333;
`;

const SectionTitle = styled.h2`
    font-size: 2rem;
    color: #4b0082;
    margin-top: 1rem;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
`;

const Text = styled.p`
    font-size: 1.5rem;
    line-height: 1.6;
    color: #333;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%; 
    max-width: 800px;
`;

const About = () => {
    return (
        <AboutContainer>
            <Header>
                <Title>About Us</Title>
                <Description>
                    Learn more about our mission and what drives us to deliver the best services.
                </Description>
            </Header>

            <ContentContainer>
            <div>
                <SectionTitle>Our Mission</SectionTitle>
                <Text>
                    At AFS, our mission is to empower individuals and businesses with innovative financial solutions that drive success and growth.
                </Text>
            </div>

            <div>
                <SectionTitle>Meet the Founder</SectionTitle>
                <Text>
                    Jaron Boodhramsingh is the visionary behind AFS, dedicated to creating cutting-edge financial solutions for a better future.
                </Text>
            </div>
            </ContentContainer>
        </AboutContainer>
    );
};

export default About;


