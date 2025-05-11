import React from "react";
import styled from "styled-components";

const CryptocurrenciesContainer = styled.div`
    height: 100vh;
    padding: 2rem;
    background: linear-gradient(270deg, #ff7eb3, #ff758c, #ff6a6a, #ff758c);
    background-size: 400% 400%;
    animation: gradientAnimation 10s ease infinite;
    color: #333;
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
`;

const Title = styled.h1`
    font-size: 3rem;
    color: #4b0082;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const ListItem = styled.li`
    font-size: 1.5rem;
    color: #333;
    background: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 1rem;
`;


const Subtitle = styled.p`
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1.5rem;
    text-align: center;
`;


const Cryptocurrencies = () => {
    return (
        <CryptocurrenciesContainer>
            <Title>Cryptocurrencies</Title>
            <Subtitle>Currencies Currently Supported by our Platform</Subtitle>
            <List>
                <ListItem>
                        <img src="btc.webp" alt="Bitcoin" width="50" height="50"/>
                          Bitcoin
                </ListItem>
                <ListItem>
                        <img src="eth.jpg" alt="Ethereum" width="50" height="50"/>
                          Ethereum
                </ListItem>
                <ListItem>
                       < img src="usdt.png" alt="USDT" width="50" height="50"/>
                          USDT
                </ListItem>
            </List>
        </CryptocurrenciesContainer>
    );
};

export default Cryptocurrencies;