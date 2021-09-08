import React from 'react';
import styled from 'styled-components';
import marketAnalysis from '../Images/market-analysis.png';
import support from '../Images/support.png';
import dance from '../Images/dance.png';
import money from '../Images/money.png';

const Benefits = () => {
	let BenefitData = [
		{
			title: 'Best Price',
			image: marketAnalysis
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
				{BenefitData.map(({ title, image }) => (
					<Card>
						<div>
							<img src={image} alt="" />
						</div>
						<h4>{title}</h4>
					</Card>
				))}
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
	@media (max-width: 500px) {
		font-size: 1.6rem;
		padding-top: 2rem;
	}
`;

const SubText = styled.div`
	text-align: center;
	font-size: 1.3rem;
	color: white;
	padding-top: 1rem;
	font-weight: lighter;
	@media (max-width: 500px) {
		font-size: 1rem;
		padding-top: 2rem;
	}
`;

const Flex = styled.div`
	display: flex;
	justify-content: center;
	position: absolute;
	top: 76%;
	left: 30%;
	right: 30%;
`;

const Card = styled.div`
	background-color: white;
	padding: 0.1rem 1.5rem;
	margin: 0rem 3rem;
	border-radius: 1rem;
	border: 1px solid grey;
	text-align: center;
	font-weight: bold;
	font-size: 1.1rem;
	h4 {
		margin-top: 0.5rem;
	}
`;
export default Benefits;
