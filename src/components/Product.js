import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { productAnim } from '../Animation';
import { useScroll } from '../UseScroll';

const Product = ({ data }) => {
	const { title, url } = data;
	const [ element, controls ] = useScroll();
	return (
		<Card variants={productAnim} animate={controls} ref={element} initial="hidden">
			<div style={{ textAlign: 'center' }}>
				<img src={url} alt="" />

				<h1>{title}</h1>
			</div>
			<button>Enroll Now</button>
		</Card>
	);
};

const Card = styled(motion.div)`
    width: 20%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0rem;
    margin-right: 3rem;
    border-radius: 0.3rem;
    padding: 1rem 1rem;
    align-items: center;
    transition: all .3s ease;
    box-shadow: var(--box-shadow);
    &:hover {
        img {
            transform: scale(0.9);
        }
    }
    @media (max-width: 1150px){
        width: 32%;
        margin-right: 0.5rem;

    }
    @media (max-width: 500px){
        width: 48%;
        margin-right: 0.4rem;

    }
    img {
        width: 80%;
        object-fit: cover;
        transition: all 0.3s ease;

         @media (max-width: 500px){
            height: 4.3rem;
    width: 100%;
         }

    }
    button {
        font-size: 1rem;
        cursor: pointer;
        padding: 0.2rem 0.9rem;
        transition: all .3s ease;
        border-radius: 0.2rem;
        border: 2px solid var(--light-blue);
        font-weight: bold;
        margin-bottom: 1.5rem;
        margin-top: 2rem;
        background-color: var(--light-blue);
        color: white;
        &:hover {
            background: transparent;
            color: var(--light-black);
        }
    }
    `;

export default Product;
