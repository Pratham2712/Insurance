import React from 'react';
import Product from './Product';
import styled from 'styled-components';
import { motion } from 'framer-motion';
//import icon
import carInsurance from '../Images/Products/car-insurance.png'
import health from '../Images/Products/healthcare.png'
import motor from '../Images/Products/motorcycle.png'
import travel from '../Images/Products/travel-insurance.png'
import life from '../Images/Products/life-insurance.png'

const Products = () => {
	const products = [
		{
			url: carInsurance,
			title: 'Car'
		},
		{
			url: health,
			title: 'Health'
		},
		{
			url: motor,
			title: 'Bike'
		},
		{
			url: travel,
			title: 'Travel'
		},
		{
			url: life,
			title: 'Life'
		},
		{
			url: travel,
			title: 'Travel'
		},
		{
			url: travel,
			title: 'Travel'
		},
		{
			url: travel,
			title: 'Travel'
		},
		
	];
	return (
		<StyledSection>
			{products.map((data) => <Product data={data} key={Math.random() * products.length} />)}
		</StyledSection>
	);
};
const StyledSection = styled(motion.section)`
    padding: 0rem 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
	padding-bottom: 4rem;
	@media (max-width: 1150px){
		padding: 0rem 3rem;
	}
	@media (max-width: 500px){
		padding: 0rem 1rem;
	}
`;
export default Products;
