import React from "react";
import styled from "styled-components";

const PaymentMethodContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
    padding: 0.5rem;
    background-color: #f8f8f8;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const PaymentMethodImage = styled.img`
    max-width: 100%;
    height: auto;
`;

const PaymentMethod = ({ method }) => {
    return (
        <PaymentMethodContainer>
            <PaymentMethodImage
                src={method.src}
                alt={method.alt}
                width={method.width}
                height={method.height}
            />
        </PaymentMethodContainer>
    );
};

export default PaymentMethod;