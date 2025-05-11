import React, { useState } from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: #fff;
    color: #333;
    padding: 2rem;
    text-align: center;
    font-family: "Roboto", sans-serif;
    border-top: 1px solid #ddd;
`;

const Trademark = styled.p`
    font-size: 1rem;
    margin-bottom: 1rem;
`;

const DiscussionBox = styled.div`
    margin-top: 1rem;
`;

const CommentForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`;

const TextArea = styled.textarea`
    width: 100%;
    max-width: 500px;
    height: 100px;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
`;

const SubmitButton = styled.button`
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

const CommentsList = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 1rem;
`;

const CommentItem = styled.li`
    background-color: #f8f8f8;
    color: #333;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 0.5rem;
`;

const Footer = () => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            setComments([...comments, comment]);
            setComment("");
        }
    };

    return (
        <FooterContainer>
            <Trademark>© Jaron Boodhramsingh 2025</Trademark>
            <DiscussionBox>
                <h3>Feel free to leave us any concerns and recommendations</h3>
                <CommentForm onSubmit={handleSubmit}>
                    <TextArea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Write your comment here..."
                        required
                    />
                    <SubmitButton type="submit">Submit</SubmitButton>
                </CommentForm>
                <CommentsList>
                    {comments.map((c, index) => (
                        <CommentItem key={index}>{c}</CommentItem>
                    ))}
                </CommentsList>
            </DiscussionBox>
        </FooterContainer>
    );
};

export default Footer;