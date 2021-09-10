import React from 'react';
import styled from 'styled-components';

const Insurance = () => {
	return (
		<Types>
			<ul>
				<li>
					<a style={{ color: '#4a4a4a', textDecoration: 'none' }} href="/">
						Car Insurance
					</a>
				</li>
				<li>
					<a style={{ color: '#4a4a4a', textDecoration: 'none' }} href="/">
						Bike Insurance
					</a>
				</li>
				<li>
					<a style={{ color: '#4a4a4a', textDecoration: 'none' }} href="/">
						Health Insurance
					</a>
				</li>
				<li>
					<a style={{ color: '#4a4a4a', textDecoration: 'none' }} href="/">
						Life Insurance
					</a>
				</li>
				<Li>
					<a style={{ color: '#4a4a4a', textDecoration: 'none' }} href="/">
						Travel Insurance
					</a>
				</Li>
			</ul>
		</Types>
	);
};

const Types = styled.div`
	background: white;
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
