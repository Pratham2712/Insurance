import React, { useState } from 'react';
import styled from 'styled-components';
import LightSpeed from 'react-reveal/LightSpeed';

const UpperNav = () => {
	const [ colorChange, setColorchange ] = useState(false);

	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setColorchange(true);
		} else {
			setColorchange(false);
		}
	};

	window.addEventListener('scroll', changeNavbarColor);
	return (
		<Flex
			style={{
				backgroundColor: colorChange ? 'var(--nav-bg)' : ''
			}}
		>
			<LightSpeed left cascade>
				<Whatsapp>
					<a href="/">
						<i class="fab fa-whatsapp" />
					</a>
					+91 90909 80808
				</Whatsapp>
				<Circle>
					<a href="/">
						<i class="fab fa-facebook-f" />
					</a>
				</Circle>
				<Circle>
					<a href="/">
						<i class="fab fa-twitter" />
					</a>
				</Circle>
				<Circle>
					<a href="/">
						<i class="fab fa-youtube" />
					</a>
				</Circle>
			</LightSpeed>
		</Flex>
	);
};

const Flex = styled.nav`
	min-height: 6vh;
	display: flex;
	align-items: center;
	z-index: 100;
	width: 100%;
	padding: 0rem 5rem;
	justify-content: flex-end;
	background-color: rgba(255, 255, 255, 0.0);
	position: fixed;
	@media (max-width: 1150px) {
		padding: 0rem 3rem;
	}
	@media (max-width: 500px) {
		padding: 0rem 1rem;
	}

	i {
		font-size: 1rem;
		color: white;
		transition: all .2s ease-in;
	}
`;
const Circle = styled.div`
	width: 1.8rem;
	height: 1.8rem;
	border-radius: 50%;
	background-color: var(--light-black);
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 1rem;
	cursor: pointer;
	&:hover {
		i {
			color: var(--light-blue);
		}
	}
`;

const Whatsapp = styled.div`
	width: max-content;
	height: 2rem;
	background-color: var(--light-black);
	color: white;
	padding: 1rem 1rem;
	border-radius: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 1rem;

	@media (max-width: 500px) {
		font-size: 0.9rem;
	}
	i {
		font-size: 1.6rem;
		margin-right: .5rem;
		&:hover {
			color: var(--light-blue);
		}
	}
`;

export default UpperNav;
