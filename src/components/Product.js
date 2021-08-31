import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { productAnim } from '../Animation';
import { useScroll } from '../UseScroll';
import LazyLoad from 'react-lazyload';

const Product = ({ data }) => {
	const { title, url } = data;
	const [ element, controls ] = useScroll();
	return (
		<Card variants={productAnim} animate={controls} ref={element} initial="hidden">
			<div style={{ textAlign: 'center' }}>
				<LazyLoad effect="blur">
					<img src={url} alt="" />
				</LazyLoad>
				<h1>{title}</h1>
			</div>
			<button>View plans</button>
		</Card>
	);
};

const Card = styled(motion.div)`
    width: 20%;
    height: auto;
    display: flex;
    flex-direction: column;
   
    border-radius: 0.2rem;
    padding: 1rem 1rem;
    align-items: center;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
    @media (max-width: 1150px){
        width: 32%;
        margin: 0.5rem 0.1rem;
    }
    @media (max-width: 500px){
        width: 48%;
    }
    img {
        width: 100%;
        object-fit: cover;
        height: 7rem;
         @media (max-width: 500px){
             height: 4rem;
         }

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
        margin-top: 2rem;
        &:hover {
            background-color: #6C63FF;
            color: white;
        }
     }
`;

export default Product;
