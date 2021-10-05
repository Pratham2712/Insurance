import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Insurance = () => {
	return (
		<Types>
			<ul>
				<li>
					<Link style={{ color: '#4a4a4a', textDecoration: 'none' }} to="/Car-Insurance">
						Car Insurance
					</Link>
				</li>
				<li>
					<Link style={{ color: '#4a4a4a', textDecoration: 'none' }} to="/Bike-Insurance">
						Bike Insurance
					</Link>
				</li>
				<li>
					<Link style={{ color: '#4a4a4a', textDecoration: 'none' }} to="/Health-Insurance">
						Health Insurance
					</Link>
				</li>
				<li>
					<Link style={{ color: '#4a4a4a', textDecoration: 'none' }} to="/Life-Insurance">
						Life Insurance
					</Link>
				</li>
				<Li>
					<Link style={{ color: '#4a4a4a', textDecoration: 'none' }} to="/Travel-Insurance">
						Travel Insurance
					</Link>
				</Li>
			</ul>
		</Types>
	);
};

const Types = styled.div`
	background: var(--logo-light-orange);
	width: 12rem;
	border-radius: 0.5rem;
	li {
		list-style-type: none;
		padding: 0.5rem 1rem;
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
