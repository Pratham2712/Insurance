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
				<li>
					<a href="/">Travel Insurance</a>
				</li>
			</ul>
		</Types>
	);
};

const Types = styled.div`
	li:hover {
		a {
			color: black;
		}
	}
`;

export default Insurance;
