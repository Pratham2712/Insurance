import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import LazyLoad from 'react-lazyload';
//Importing images
import bestPrice from '../Images/Benefits/best-price.png';
import support from '../Images/Benefits/support.png';
import dance from '../Images/Benefits/dance.png';
import money from '../Images/Benefits/money.png';

const Benefits = () => {
	let BenefitData = [
		{
			title: 'Best Price',
			image: bestPrice
		},
		{
			title: 'Stress-free Claims',
			image: dance
		},
		{
			title: 'Customer Help',
			image: support
		},
		{
			title: 'Money Protection',
			image: money
		}
	];
	return (
		<StyledSection>
			<div>
			<MainText>
				<span style={{ color: 'var(--logo-orange)' }}>Godspeed</span> Ensure Professional Insurance Services.
			</MainText>
			<SubText>
				Making best use of market, we provide the best insurance and
				<div> protect the future of the clients.</div>
			</SubText>
			</div>
			<div>
			<Flex>
				<Fade bottom cascade>
					{BenefitData.map(({ title, image }) => (
						<Card key={Math.random() * BenefitData.length}>
							<div>
								<LazyLoad effect="blur">
									<img src={image} alt="" />
								</LazyLoad>
							</div>
							<h4>{title}</h4>
						</Card>
					))}
				</Fade>
			</Flex>
			</div>
		</StyledSection>
	);
};

const StyledSection = styled.div`
	min-height: 50vh;
	background: var(--dark-blue);
	padding: 0.5rem 5rem;
	margin-bottom: 4rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media (max-width: 1150px) {
		padding: 0.5rem 3rem;
	
	}
	@media (max-width: 500px) {
		padding: 0.5rem 1rem;
		min-height: 40vh;
		margin-bottom: 2.5rem;
	}
	
`;

const MainText = styled.div`
	text-align: center;
	font-size: 2.5rem;
	color: white;
	padding-top: 0rem;
	font-weight: bold;
	@media (max-width: 1150px) {
		font-size: 2.5rem;
		padding-top: 1.5rem;
	}
	@media (max-width: 500px) {
		font-size: 1.4rem;
		padding-top: 1rem;
	}
`;

const SubText = styled.div`
	text-align: center;
	font-size: 1.3rem;
	color: white;
	padding-top: 1rem;
	font-weight: lighter;

	@media (max-width: 500px) {
		font-size: 0.8rem;
		padding-top: 0.9rem;
	}
`;

const Flex = styled.div`
	display: flex;
    align-items: center;
	justify-content: center;
	
	`

const Card = styled.div`
    display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	background-color: white;
	text-align: center;
    border-bottom: 3px solid var(--logo-orange);
	padding: 0.9rem 0rem;
	margin: 0rem 2rem;
	width: 10rem;
	height: 9rem;
	border-radius: 0.3rem;
	box-shadow: var(--box-shadow);
	@media (max-width: 1150px) {
		margin: 0rem 1rem;
		padding: 1rem 0.3rem;
		width: 10rem;
		height: 11rem;
	}
	@media (max-width: 500px) {
		margin: 0rem 0.2rem;
		width: 5rem;
		height: 6rem;
		padding: 0.3rem 0rem;
	}
	img {
		width: 6rem;
		height: 12vh;
		object-fit: contain;
		@media (max-width: 1150px) {
			width: 4rem;
			height: 8vh;
		}
		@media (max-width: 500px) {
			width: 2rem;
			height: 6vh;
		}
	}
	h4 {
		margin-top: 1rem;
	    color: var(--dark-blue);
		@media (max-width: 500px) {
			font-size: 0.7rem;
			margin-top: 0.5rem;
		}
		
	}
`;
export default Benefits;
