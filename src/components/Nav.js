import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logosvg from '../Images/logo.svg';
import Insurance from './Insurance';
import { Link } from 'react-router-dom';

const Nav = () => {
	const [ toggle, setToggle ] = useState(false);
	const [ colorChange, setColorchange ] = useState(false);
	
	
	const close = () => {
		setToggle(false);
	}

	useEffect(() => {
		const back = document.querySelector('.back');
		document.addEventListener('click', function(event) {
			if (event.target === back) {
				setToggle(false);
			}
		});
	}, []);
	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setColorchange(true);
		} else {
			setColorchange(false);
		}
	};

	window.addEventListener('scroll', changeNavbarColor);

	

	return (
		<StyledNav
			style={{
				backgroundColor: colorChange ? 'var(--nav-bg)' : '',
				boxShadow: colorChange ? '0 8px 6px -6px grey' : '',
			
			}}
		
		>
			<Image>
				<Link to="/">
				<img src={logosvg} alt="GodSpeed" />
				</Link>
			</Image>
			<div>
				<Ul
					style={{
						transform: toggle ? 'translateX(0%)' : ''
					}}
					className="back"
				>
					<Li className="dropbtn">
						<a>Insurance</a>
						<span>
							<i className="fas fa-angle-down" />
						</span>

						<div className="insurance-content">
							<Insurance toggle={toggle} setToggle={setToggle}/>
						</div>
					</Li>
					<Li onClick={close}>
						<a href="#">Renewals</a>
					</Li>
					<Li onClick={close}>
						<a href="#">Claim</a>
					</Li>
					<Li onClick={close}>
						<a href="#">Blog</a>
					</Li>
					<Li onClick={close}>
						<Link to="/contact">Contact</Link>
					</Li>
					<Li onClick={close}>
						<a href="#">Become POS</a>
					</Li>
					<Li id="login-btn">
						<button id="login">
							Login <i className="fas fa-long-arrow-alt-right" />
						</button>
					</Li>
				</Ul>
			</div>
			<StyledBurger onClick={() => setToggle(!toggle)}>
				{!toggle ? <i className="fas fa-bars" /> : <i class="fas fa-times" />}
			</StyledBurger>
		</StyledNav>
	);
};

const StyledNav = styled(motion.nav)`
    min-height: 8vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 100;
    width: 100%;
	top: 6vh;
    position: fixed;
    padding: 0rem 5rem;
	transition: min-height .3s ease-in;
	background-color: rgba(255,255,255,0.0); 
	
	@media (max-width: 1150px) {
		padding: 0rem 3rem;
	}
	@media (max-width: 500px) {
		padding: 0rem 1rem;
	}
   
	
    #login {
		font-size: 1.2rem;
        cursor: pointer;
        margin-left: 1.5rem;
        padding: 0.3rem 0.7rem;
        background: transparent;
        margin-top: -7px;
        transition: all .3s ease;
        border-radius: 0.2rem;
		border: none;
        background-color: var(--light-blue);
        color: white;
        &:hover {
		    
            background-color: var(--dark-blue);
		}
		
	}
	@media (max-width: 1150px){
			#login-btn {
				height: 100vh;
				margin-left: 0rem;
				#login {
					margin-left: 0rem;
				}
			}
		}
	.dropbtn {
		position: relative;
		span {
			margin-left: 0.3rem;
			
		}
	}
	
	.insurance-content {
		opacity: 0;
		position: absolute;
		display: none;
		top: 100%;
		width: 10rem;
		left: -20%;
		@media (max-width: 1150px){
			top: 0%;
			left: -67%;
			height: 100vh;
		}
	}
	.dropbtn:hover .insurance-content {
		opacity: 1;
		display: block;
	}
	`;

const Ul = styled.ul`
	display: flex;
	font-size: 1.2rem;
	transition: all .3s ease;

	@media (max-width: 1150px) {
		position: absolute;
		top: 100%;
		flex-direction: column;
		width: 100%;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.5);
		right: 0;
		align-items: flex-end;
		transform: translateX(100%);
		transition: transform .2s ease;
	}
`;

const Li = styled.li`
	list-style-type: none;
	padding-right: 1.3rem;
	transition: all .3s ease;
	transition: transform color .1s ease;
	font-weight: lighter;
	@media (max-width: 1150px) {
		padding: 1rem 0rem;
		padding-left: 1.5rem;
		width: 60%;
		background-color: black;
		transition: all .3s ease;
		span {
			color: white;
		}
	}
	a {
		text-decoration: none;
		cursor: pointer;
		color: black;
		@media (max-width: 1150px) {
			color: white;
		}
	}
	&:hover {
		transform: scale(0.96);
		a {
			color: var(--logo-orange);
			text-decoration: underline;
		}
		@media (max-width: 1150px) {
			transform: scale(1);
		}
		span {
			color: var(--logo-orange);
		}
	}
`;

const Image = styled.div`
	background: rgba(255, 255, 255, 0.0);
	position: relative;
	img {
		position: fixed;
		object-fit: cover;
		cursor: pointer;
		top: 0%;
		width: 25%;
		@media (max-width: 1150px) {
			top: 5%;
			width: 50%;
		}
		@media (max-width: 500px) {
			top: 6%;
    width: 54%;
    height: 7vh;
		}
	}
`;

const StyledBurger = styled(motion.div)`
    display: none;
	font-size: 1.5rem;
	cursor: pointer;
	padding: 0.3rem 0.3rem;
	transition: all .3s ease;
	@media (max-width: 1150px) {
		display: block;
	}
`;

export default Nav;
