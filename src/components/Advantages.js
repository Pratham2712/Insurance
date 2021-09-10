import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';
//Importing images
import costSaving from '../Images/piggy-bank.png';
import Claim from '../Images/claim.png';
import policyImage from '../Images/risk-management.png';
import riskImage from '../Images/market.png';
//importing text of each
import CostSaving from './AdvantageText/CostSaving';
import ClaimText from './AdvantageText/Claim';
import PolicyCompare from './AdvantageText/PolicyCompare';
import ObjectiveRisk from './AdvantageText/ObjectiveRisk';

const Advantages = () => {
	const [ cost, setCost ] = useState(true);
	const [ claim, setClaim ] = useState(false);
	const [ policy, setPolicy ] = useState(false);
	const [ risk, setRisk ] = useState(false);
	return (
		<StyledSection>
			<Head>
				<div>Why GodSpeed Insurance</div>
			</Head>
			<Flex>
				<FirstPart>
					<Slide right cascade>
						<Tabs>
							<div
								style={{
									visibility: cost ? 'visible' : 'hidden'
								}}
							>
								<i className="fas fa-caret-left" />
							</div>
							<ButtonBox
								onClick={() => {
									setCost(true);
									setClaim(false);
									setPolicy(false);
									setRisk(false);
								}}
								style={{
									color: cost ? '#F06F27' : ''
								}}
							>
								<img src={costSaving} alt="" /> Cost Saving
							</ButtonBox>
						</Tabs>
						<Tabs>
							<div
								style={{
									visibility: claim ? 'visible' : 'hidden'
								}}
							>
								<i className="fas fa-caret-left" />
							</div>
							<ButtonBox
								onClick={() => {
									setClaim(true);
									setCost(false);
									setPolicy(false);
									setRisk(false);
								}}
								style={{
									color: claim ? '#F06F27' : ''
								}}
							>
								<img src={Claim} alt="" />Claim Assistance
							</ButtonBox>
						</Tabs>
						<Tabs>
							<div
								style={{
									visibility: policy ? 'visible' : 'hidden'
								}}
							>
								<i className="fas fa-caret-left" />
							</div>
							<ButtonBox
								onClick={() => {
									setPolicy(true);
									setCost(false);
									setClaim(false);
									setRisk(false);
								}}
								style={{
									color: policy ? '#F06F27' : ''
								}}
							>
								<img src={policyImage} alt="" />Accurate Policy Comparison
							</ButtonBox>
						</Tabs>
						<Tabs>
							<div
								style={{
									visibility: risk ? 'visible' : 'hidden'
								}}
							>
								<i className="fas fa-caret-left" />
							</div>
							<ButtonBox
								onClick={() => {
									setRisk(true);
									setCost(false);
									setClaim(false);
									setPolicy(false);
								}}
								style={{
									color: risk ? '#F06F27' : ''
								}}
							>
								<img src={riskImage} alt="" /> Objective Risk Assessment
							</ButtonBox>
						</Tabs>
					</Slide>
				</FirstPart>
				<SecondPart>
					{cost && <CostSaving />}
					{claim && <ClaimText />}
					{policy && <PolicyCompare />}
					{risk && <ObjectiveRisk />}
				</SecondPart>
			</Flex>
		</StyledSection>
	);
};

const StyledSection = styled(motion.div)`
    background: #F6F7FB;
    padding: 0rem 5rem;
    padding-bottom: 3rem;
	padding-top: 2rem;
	height: 80vh;
    @media (max-width: 1150px) {
		padding: 0rem 3rem;
		height: 56vh;
		padding-top: 2rem;
	}
	@media (max-width: 500px) {
		padding: 0rem 1rem;
		height: 66vh;
		padding-top: 1rem;
	}
`;

const Head = styled.div`
	text-align: center;
	color: #003478;
	margin-bottom: 4rem;
	font-size: 2.5rem;
	font-weight: bold;
	@media (max-width: 500px) {
		margin-bottom: 2rem;
		font-size: 1.6rem;
	}
`;

const Flex = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	@media (max-width: 1150px) {
		flex-direction: column;
	}
`;

const FirstPart = styled(motion.div)`
    display: flex;
    flex-direction: column;
	width: 35%;
	 @media (max-width:1150px){
		 flex-direction: row;
		 width: 100%;
		 justify-content: space-evenly;
	 }
`;

const SecondPart = styled.div`
	width: 60%;

	@media (max-width: 1150px) {
		width: 100%;
	}
`;
const Tabs = styled.div`
	position: relative;
	i {
		position: absolute;
		font-size: 4rem;
		color: #ffcc83;
		top: 5%;
		right: 101%;
		@media (max-width: 1150px) {
			font-size: 3rem;
			transform: rotate(-91deg);
			top: 81%;
			right: 34%;
		}
	}
`;
const ButtonBox = styled(motion.div)`
    font-weight: bold;
    font-size: 1.5rem;
    border: 2px solid black;
    padding: 1rem 1.7rem;
    margin-bottom: 1rem;
    color: #0493F1;
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
        margin-right: 2rem;
    }
	&:hover {
		color: #F06F27;
	}
	 @media (max-width:1150px){
		 font-size: 0rem;
		 padding: 1rem 1rem;
		 img {
			 margin-right: 0rem;
		 }
	 }
`;

export default Advantages;
