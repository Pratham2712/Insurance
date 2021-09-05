import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import costSaving from '../Images/piggy-bank.png';
import Claim from '../Images/claim.png';
import policyImage from '../Images/risk-management.png';
import riskImage from '../Images/market.png';
const Advantages = () => {
	const [ cost, setCost ] = useState(true);
	const [ claim, setClaim ] = useState(false);
	const [ policy, setPolicy ] = useState(false);
	const [ risk, setRisk ] = useState(false);
	return (
		<StyledSection>
			<Head>
				<h1>Why GodSpeed Insurance</h1>
			</Head>
			<Flex>
				<FirstPart>
					<ButtonBox
						onClick={() => {
							setCost(true);
							setClaim(false);
							setPolicy(false);
							setRisk(false);
						}}
					>
						<img src={costSaving} alt="" /> Cost Saving
					</ButtonBox>
					<ButtonBox
						onClick={() => {
							setClaim(true);
							setCost(false);
							setPolicy(false);
							setRisk(false);
						}}
					>
						<img src={Claim} alt="" />Claim Assistance
					</ButtonBox>
					<ButtonBox
						onClick={() => {
							setPolicy(true);
							setCost(false);
							setClaim(false);
							setRisk(false);
						}}
					>
						<img src={policyImage} alt="" />Accurate Policy Comparison
					</ButtonBox>
					<ButtonBox
						onClick={() => {
							setRisk(true);
							setCost(false);
							setClaim(false);
							setPolicy(false);
						}}
					>
						<img src={riskImage} alt="" /> Objective Risk Assessment
					</ButtonBox>
				</FirstPart>
				<div>
					{cost && <div>cost saving very</div>}
					{claim && <div>claim 3222222222222</div>}
					{policy && <div>policy</div>}
					{risk && <div>risk</div>}
				</div>
			</Flex>
		</StyledSection>
	);
};

const StyledSection = styled(motion.div)`
    padding: 0rem 5rem;
    padding-bottom: 3rem;
    @media (max-width: 1150px) {
		padding: 0rem 3rem;
	}
	@media (max-width: 500px) {
		padding: 0rem 1rem;
	}
`;

const Head = styled.div`
	text-align: center;
	color: #003478;
	margin-bottom: 4rem;
`;

const Flex = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
`;

const FirstPart = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
`;

export default Advantages;
