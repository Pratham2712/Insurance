import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logosvg from '../Images/logo.svg';
import Insurance from './Insurance';

const Nav = () => {
	const [ toggle, setToggle ] = useState(false);

	useEffect(() => {
		const back = document.querySelector('.back');
		document.addEventListener('click', function(event) {
			if (event.target === back) {
				setToggle(false);
			}
		});
	}, []);
	/* const [ height, setHeight ] = useState(false);
	const ourRef = useRef(null);
 */
	/* useLayoutEffect(() => {
		const topPosition = ourRef.current.getBoundingClientRect().top;
		const onScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight;
			if (topPosition < scrollPosition) {
				setHeight(!height);
			}
		};

		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []); */

	return (
		<StyledNav>
			<Image>
				<img src={logosvg} alt="GodSpeed" />
			</Image>
			<div>
				<Ul
					style={{
						transform: toggle ? 'translateX(0%)' : ''
					}}
					className="back"
				>
					<Li className="dropbtn">
						<a href="/">Insurance</a>

						<div className="insurance-content">
							<Insurance />
						</div>
					</Li>
					<Li>
						<a href="/">Renewals</a>
					</Li>
					<Li>
						<a href="/">Claim</a>
					</Li>
					<Li>
						<a href="/">Blog</a>
					</Li>
					<Li>
						<a href="/">Contact</a>
					</Li>
					<Li>
						<a href="/">Become POS</a>
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
    min-height: 10vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 100;
    width: 100%;
	top: 8vh;
    position: fixed;
    padding: 0rem 5rem;
	transition: min-height .3s ease-in;
	background-color: rgba(255,255,255,0.8);
	box-shadow: 0 8px 6px -6px grey;
	
	@media (max-width: 1150px) {
		padding: 0rem 3rem;
	}
	@media (max-width: 500px) {
		padding: 0rem 1rem;
	}
   
	a {
		color: #4A4A4A;
		text-decoration: none;
        cursor: pointer;
		@media (max-width: 1150px){
			color: white;
		}
	}
    #login {
		font-size: 1.2rem;
        cursor: pointer;
        margin-left: 1.5rem;
        padding: 0.1rem 0.4rem;
        background: transparent;
        margin-top: -7px;
        transition: all .3s ease;
        border-radius: 0.2rem;
        border: 2px solid #0493F1;
        background-color: #0493F1;
        color: white;
        &:hover {
			color: black;
            border: 2px solid #0493F1;
            background-color: white;
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
	}
	
	.insurance-content {
		opacity: 0;
		position: absolute;
		display: none;
		background-color: rgba(255,255,255,0.8);
		top: 100%;
		width: 10rem;
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
	font-weight: bold;
	@media (max-width: 1150px) {
		padding: 1rem 0rem;
		padding-left: 1.5rem;
		width: 60%;
		background-color: #282828;
		transition: all .3s ease;
	}
	&:hover {
		transform: scale(0.96);
		a {
			color: #ef6009;
			text-decoration: underline;
		}
		@media (max-width: 1150px) {
			transform: scale(1);
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
		padding-bottom: 1rem;
		top: 3%;
		width: 25%;
		@media (max-width: 500px) {
			width: 50%;
		}
		@media (max-width: 1150px) {
			top: 9%;
			width: 41%;
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
