import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Product = ({ data }) => {
	const { title, url } = data;
	return (
		<Card>
			<div style={{ textAlign: 'center' }}>
				<img src={url} alt="" />
				<h1>{title}</h1>
			</div>
			<button>View plans</button>
		</Card>
	);
};

const Card = styled(motion.div)`
    width: 20%;
    height: 45vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0.2rem;
    padding: 1rem 1rem;
    align-items: center;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
    img {
        width: 100%;
        object-fit: cover;
        height: 7rem;

    }
    button {
        font-size: 1rem;
        cursor: pointer;
        padding: 0.2rem 0.9rem;
        background: transparent;
        transition: all .3s ease;
        border-radius: 0.2rem;
        border: 2px solid #6C63FF;
        color: #4a4a4a;
        font-weight: lighter;
        margin-bottom: 1.5rem;
        &:hover {
            background-color: #6C63FF;
            color: white;
        }
     }
`;

export default Product;
