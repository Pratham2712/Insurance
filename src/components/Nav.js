import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../Images/logo.PNG';
import LazyLoad from 'react-lazyload';

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
				<LazyLoad effect="blur">
					<img src={logo} alt="GodSpeed" />
				</LazyLoad>
			</Image>
			<div>
				<ul
					style={{
						transform: toggle ? 'translateX(0%)' : ''
					}}
					className="back"
				>
					<li>
						<a href="#">Products</a>
					</li>
					<li>
						<a href="#">Renewals</a>
					</li>
					<li>
						<a href="#">Claim</a>
					</li>
					<li>
						<a href="#">Blog</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
					<li>
						<a href="#">Become POS</a>
					</li>
					<li id="login-btn">
						<button id="login">
							Login <i className="fas fa-long-arrow-alt-right" />
						</button>
					</li>
				</ul>
			</div>
			<StyledBurger onClick={() => setToggle(!toggle)}>
				<i className="fas fa-bars" />
			</StyledBurger>
		</StyledNav>
	);
};

const StyledNav = styled(motion.nav)`
    min-height: 10vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
    top: 0;
	z-index: 100;
    width: 100%;
    position: fixed;
    padding: 0rem 5rem;
	transition: min-height .3s ease-in;
	background-color: white;
	box-shadow: 0 8px 6px -6px grey;
	@media (max-width: 1150px) {
		padding: 0rem 3rem;
	}
	@media (max-width: 500px) {
		padding: 0rem 1rem;
	}
    ul {
		display: flex;
        font-size: 1.2rem;
		transition: all .3s ease;

        @media (max-width: 1150px){
			position: absolute;
			top: 100%;
			flex-direction: column;
			width: 100%;
			height: 100vh;
			background-color: rgba(0,0,0,0.5);
			right: 0;
			align-items: flex-end;
			transform: translateX(100%);
            transition: transform .2s ease;
		}
	}
    li {
		list-style-type: none;
        padding-right: 1.3rem;
        transition: all .3s ease;
        transition: transform color .1s ease;
		@media (max-width: 1150px){
			padding: 1rem 0rem;
			padding-left: 1.5rem;
			width: 60%;
			background-color: #282828;
			transition: all .3s ease;

			}
			&:hover {
				transform: scale(0.96);
				a {
					color: #EF6009;
					text-decoration: underline;
				}
				@media (max-width: 1150px){
					transform: scale(1);

				}

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
        border: 2px solid #6C63FF;
        background-color: #6C63FF;
        color: white;
        &:hover {
			color: black;
            border: 2px solid #6C63FF;
            background-color: white;
		}
    
}
	`;

const Image = styled.div`
	background-color: inherit;
	img {
		width: 17rem;
		height: 10vh;
		object-fit: cover;
		cursor: pointer;
		background-color: white;
		@media (max-width: 500px) {
			width: 12rem;
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