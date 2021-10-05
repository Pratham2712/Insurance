import React from 'react';
import styled from 'styled-components';
//Importing images
import logo from '../Images/Footer/godspeed.svg';
import address from '../Images/Footer/home.png';
import email from '../Images/Footer/email.png';
import call from '../Images/Footer/call.png';
const Footer = () => {
	return (
		<StyledFooter>
			<MainContent>
				<Part>
					<img src={logo} alt="" />
					<div>
						Godspeed Insurance Broking Pvt Ltd. One of the fastest growing insurance broking company known
						for its quick and best solution for any insurance. Insurace made easy.
					</div>
				</Part>
				<Part>
					<Head>Products</Head>
					<Line1 />
					<ul>
						<li>
							<a href="/">Car Insurance</a>
						</li>
						<li>
							<a href="/">Bike Insurance</a>
						</li>
						<li>
							<a href="/">Health Insurance</a>
						</li>
						<li>
							<a href="/">Life Insurance</a>
						</li>
						<li>
							<a href="/">Travel Insurance</a>
						</li>
					</ul>
				</Part>
				<Part>
					<Head>Other Links</Head>
					<Line1 />
					<ul>
						<li>
							<a href="/">Apply for POS</a>
						</li>
						<li>
							<a href="/">Blog</a>
						</li>
						<li>
							<a href="/">About US</a>
						</li>
					</ul>
				</Part>
				<Part>
					<Head>Get In Touch</Head>
					<Line1 />
					<div className="meet">
						<span>
							<img src={address} alt="" />
						</span>
						<div>
							3023, 1 Aerocity, NIBR Corporate Park Safed Pool, Saki Naka, Andheri East, Mumbai,
							Maharashtra 400072
						</div>
					</div>
					<div className="meet">
						<span>
							<img src={email} alt="" />
						</span>
						<div>testtest@gmail.com</div>
					</div>
					<div className="meet">
						<span>
							<img src={call} alt="" />
						</span>
						<div>1800-000-0000</div>
					</div>
				</Part>
			</MainContent>
			<Line2 />
			<SubContent>
				<div>CIN NO.- U67190MH2020PTC351700 | Registration Number - 351700</div>
				<div>© Copyright 2021 Godspeed. All Rights Reserved.</div>
			</SubContent>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
	display: flex;
	flex-direction: column;
	background: var(--light-black);
	padding: 2rem 5rem;
	@media (max-width: 1150px) {
		padding: 2rem 3rem;
	}
	@media (max-width: 500px) {
		padding: 2rem 1rem;
	}
`;
const MainContent = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;
const Part = styled.div`
	li {
		list-style-type: none;
		margin-top: 0.7rem;
	}
	a {
		text-decoration: none;
		color: white;
		font-size: 1.1rem;
		&:hover {
			text-decoration: underline;
		}
	}
	padding: 0rem 0.4rem;

	&:nth-child(1) {
		color: white;
		width: 30%;
		font-size: 1.1rem;
		line-height: 23px;
		letter-spacing: 1px;
		word-spacing: 2px;
		img {
			width: 11rem;
			height: 8vh;
		}
		@media (max-width: 770px) {
			width: 50%;
		}
		@media (max-width: 500px) {
			width: 100%;
		}
	}
	&:nth-child(2) {
		@media (max-width: 770px) {
			width: 50%;
		}
		@media (max-width: 500px) {
			width: 100%;
		}
	}
	&:nth-child(3) {
		@media (max-width: 770px) {
			width: 50%;
		}
		@media (max-width: 500px) {
			width: 100%;
		}
	}
	&:nth-child(4) {
		color: white;
		width: 30%;
		img {
			margin-right: 0.5rem;
		}
		.meet {
			display: flex;
			align-items: center;
			margin-top: 0.7rem;
			font-size: 1.1rem;
		}
		@media (max-width: 770px) {
			width: 50%;
		}
		@media (max-width: 500px) {
			width: 100%;
		}
	}
`;

const Head = styled.div`
	letter-spacing: 2px;
	word-spacing: 3px;
	font-size: 1.5rem;
	color: white;
	font-weight: bold;
	margin-bottom: 0.5rem;
	@media (max-width: 770px) {
		margin-top: 1.5rem;
	}
`;

const Line1 = styled.div`
	width: 100%;
	height: 0.1rem;
	background-color: white;
	margin-bottom: 1rem;
`;
const Line2 = styled.div`
	width: 100%;
	height: 0.1rem;
	background-color: grey;
	margin-top: 2rem;
`;

const SubContent = styled.div`
	text-align: center;
	padding-top: 1rem;
	line-height: 1.5rem;
	color: white;
`;
export default Footer;
