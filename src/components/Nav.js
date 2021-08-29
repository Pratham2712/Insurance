import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../Images/logo.PNG';

const Nav = () => {
	return (
		<StyledNav>
			<Image>
				<img src={logo} alt="GodSpeed" />
			</Image>
			<div>
				<ul>
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
					<li>
						<button id="login">
							Login <i class="fas fa-long-arrow-alt-right" />
						</button>
					</li>
				</ul>
			</div>
		</StyledNav>
	);
};

const StyledNav = styled(motion.nav)`
    min-height: 10vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
    top: 0;
	z-index: 10;
    width: 100%;
    border-bottom: 1px solid grey;
    position: fixed;
    padding: 0rem 5rem;
	background: white;
    ul {
		display: flex;
        font-size: 1.2rem;
        
	}
    li {
        list-style-type: none;
        padding-right: 1.3rem;
        transition: all .1s ease;
         &:hover {
             transform: scale(0.96);
             a {
                  color: #EF6009;
                  text-decoration: underline;
             }
         }
    }
    a {
	    color: #4A4A4A;
		text-decoration: none;
        cursor: pointer;
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
	img {
		width: 17rem;
		height: 10vh;
		object-fit: cover;
		cursor: pointer;
	}
`;

export default Nav;
