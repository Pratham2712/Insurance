import React from 'react';
import styled from 'styled-components';

const Insurance = () => {
	return (
		<Types>
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
				<Li>
					<a href="/">Travel Insurance</a>
				</Li>
			</ul>
		</Types>
	);
};

const Types = styled.div`
	background: white;
	width: 12rem;
	text-align: center;
	border-radius: 0.5rem;
	li {
		list-style-type: none;
		padding: 0.5rem 1rem;
		a {
			text-decoration: none;
			color: #4a4a4a;
			transition: all .3s ease;
			&:hover {
				color: #4a4a4a;
				padding-left: 1rem;
			}
		}
	}
`;

const Li = styled.li`color: black;`;
export default Insurance;
