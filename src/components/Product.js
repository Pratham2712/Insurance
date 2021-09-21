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
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
    box-shadow: 0 6px 16px rgb(52 105 203 / 16%);
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
             height: 4rem;
         }

    }
    button {
        font-size: 1rem;
        cursor: pointer;
        padding: 0.2rem 0.9rem;
        transition: all .3s ease;
        border-radius: 0.2rem;
        border: 2px solid #0493F1;
        font-weight: bold;
        margin-bottom: 1.5rem;
        margin-top: 2rem;
        background-color: #0493F1;
        color: white;
        &:hover {
            background: transparent;
            color: #4a4a4a;
        }
    }
    `;

export default Product;
