import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import LazyLoad from 'react-lazyload';
//Importing images
import bestPrice from '../Images/best-price.png';
import support from '../Images/support.png';
import dance from '../Images/dance.png';
import money from '../Images/money.png';

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
			<MainText>
				<span style={{ color: '#F06F27' }}>Godspeed</span> Ensure Professional Insurance Services.
			</MainText>
			<SubText>
				Making best use of market, we provide the best insurance and
				<div> protect the future of the clients.</div>
			</SubText>
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
		</StyledSection>
	);
};

const StyledSection = styled.div`
	min-height: 50vh;
	background: #003478;
	padding: 0rem 5rem;
	padding-bottom: 3rem;
	margin-bottom: 5rem;
	position: relative;
	@media (max-width: 1150px) {
		padding: 0rem 3rem;
		min-height: 30vh;
	}
	@media (max-width: 500px) {
		padding: 0rem 1rem;
	}
`;

const MainText = styled.div`
	text-align: center;
	font-size: 2.5rem;
	color: white;
	padding-top: 4rem;
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
	position: absolute;
	bottom: -24%;
	left: 50%;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
	@media (max-width: 1150px) {
		bottom: -25%;
	}
	@media (max-width: 500px) {
		bottom: -35%;
	}
`;

const Card = styled.div`
	background-color: white;
	text-align: center;
	border: 1px solid gray;
	padding: 0.9rem 0rem;
	margin: 0rem 2rem;
	width: 10rem;
	height: 9rem;
	border-radius: 1rem;
	@media (max-width: 1150px) {
		margin: 0rem 1rem;
		padding: 1rem 0.3rem;
		width: 9rem;
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
		@media (max-width: 500px) {
			font-size: 0.7rem;
			margin-top: 0.5rem;
		}
	}
`;
export default Benefits;
