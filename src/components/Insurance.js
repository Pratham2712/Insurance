import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageAnimation } from '../Animation';

import Fade from 'react-reveal/Fade';

const Insurance = ({toggle,setToggle}) => {
	const close = () => {
		setToggle(false);
	}
	return (
	    <Fade left>
		<Types variants={pageAnimation} initial="hidden" animate="show" >
			<ul>
				<li >
					<Link style={{ color: 'black', textDecoration: 'none' }}  to="/Car-Insurance" onClick={close}>
						Car Insurance
					</Link>
				</li>
				<li>
					<Link style={{ color: 'black', textDecoration: 'none' }}  to="/Bike-Insurance" onClick={close}>
						Bike Insurance
					</Link>
				</li>
				<li>
					<Link style={{ color: 'black', textDecoration: 'none' }} to="/Health-Insurance" onClick={close}>
						Health Insurance
					</Link>
				</li>
				<li>
					<Link style={{ color: 'black', textDecoration: 'none' }} to="/Life-Insurance" onClick={close}>
						Life Insurance
					</Link>
				</li>
				<Li>
					<Link style={{ color: 'black', textDecoration: 'none' }} to="/Travel-Insurance" onClick={close}>
						Travel Insurance
					</Link>
				</Li>
			</ul>
			</Types>
			</Fade>
	);
};

const Types = styled(motion.div)`
	background: var(--logo-light-orange);
	width: 12rem;
	border-radius: 0.5rem;
	@media (max-width: 1150px){
		width: 9.5rem;
		border-radius: 0rem;
		height: 100vh;
	}
	li {
		list-style-type: none;
		padding: 0.5rem 1rem;
		@media (max-width: 1150px){
		padding: 0.5rem 0.5rem;
		padding-bottom: 2rem;
	}
	}
	a {
		transition: all .2s ease;
		&:hover {
			text-decoration: underline;
			padding-left: 1rem;
		}
	}
`;

const Li = styled.li`color: black;`;
export default Insurance;
