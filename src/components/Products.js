import React from 'react';
import Product from './Product';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Products = () => {
	const products = [
		{
			url: 'https://www.squareinsurance.in/assets/img/car-insurance.svg',
			title: 'Car'
		},
		{
			url: 'https://www.squareinsurance.in/assets/img/health-insurance.svg',
			title: 'Health'
		},
		{
			url: 'https://www.squareinsurance.in/assets/img/bike-insurance.svg',
			title: 'Bike'
		},
		{
			url: 'https://www.squareinsurance.in/assets/img/travel-insurance.svg',
			title: 'Travel'
		},
		{
			url: 'https://www.squareinsurance.in/assets/img/travel-insurance.svg',
			title: 'Travel'
		},
		{
			url: 'https://www.squareinsurance.in/assets/img/travel-insurance.svg',
			title: 'Travel'
		},
		{
			url: 'https://www.squareinsurance.in/assets/img/travel-insurance.svg',
			title: 'Travel'
		},
		{
			url: 'https://www.squareinsurance.in/assets/img/travel-insurance.svg',
			title: 'Travel'
		}
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
    justify-content: center;
	padding-bottom: 4rem;
	@media (max-width: 1150px){
		padding: 0rem 3rem;
	}
	@media (max-width: 500px){
		padding: 0rem 1rem;
	}
`;
export default Products;
