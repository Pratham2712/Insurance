import React from 'react';
import styled from 'styled-components';
import SVG from './SVG';
import mailing from '../Images/mailing.png';
import phoneCall from '../Images/phone-call.png';
import LazyLoad from 'react-lazyload';
import LightSpeed from 'react-reveal/LightSpeed';

const contact = () => {
	return (
		<StyledSection>
			<Head>Feel Free To Contact</Head>
			<Flex>
				<Container>
					<LightSpeed left>
						<Box>
							<div>
								<LazyLoad>
									<img src={mailing} alt="" />
								</LazyLoad>
							</div>
							<div>
								<div>Drop us an Email</div>
								<h3>test@gmail.com</h3>
							</div>
						</Box>
						<Box>
							<div>
								<LazyLoad>
									<img src={phoneCall} alt="" />
								</LazyLoad>
							</div>
							<div>
								<div>Call Us</div>
								<h3>+1800-000-0000</h3>
							</div>
						</Box>
					</LightSpeed>
				</Container>
				<LightSpeed right>
					<SVG />
				</LightSpeed>
			</Flex>
		</StyledSection>
	);
};
const StyledSection = styled.section`
	min-height: 60vh;
	padding: 0rem 5rem;
	padding-top: 4rem;
	padding-bottom: 2rem;
	@media (max-width: 1150px) {
		padding: 0rem 3rem;
		padding-top: 4rem;
		padding-bottom: 2rem;
	}
	@media (max-width: 500px) {
		padding: 0rem 1rem;
		padding-top: 2rem;
		padding-bottom: 2rem;
	}
`;

const Head = styled.div`
	font-size: 2.5rem;
	font-weight: bold;
	color: var(--dark-blue);
	@media (max-width: 500px) {
		font-size: 1.6rem;
	}
`;

const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 1150px) {
		flex-direction: column-reverse;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 3rem;
	@media (max-width: 500px) {
		padding-top: 0rem;
	}
`;
const Box = styled.div`
	border-radius: 0.5rem;
	border: 2px solid grey;
	padding: 1rem 3rem;
	text-align: center;
	margin-top: 2rem;
	display: flex;
	background: #f1f0ff;
	img {
		margin-right: 1rem;
	}
	div {
		color: black;
		font-size: 1.2rem;
	}
	h3 {
		margin-top: 0.5rem;
		color: black;
		@media (max-width: 500px) {
			font-size: 1.2rem;
		}
	}
	@media (max-width: 500px) {
		margin-top: 1rem;
	}
`;
export default contact;
