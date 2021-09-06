import React from 'react';
import tag from '../../Images/checked.png';
import Fade from 'react-reveal/Fade';
import { Box } from './Style';

const PolicyCompare = () => {
	return (
		<Fade left>
			<Box>
				<h2>Accurate Policy Comparison</h2>
				<p>
					<img src={tag} alt="" />
					Easy to research and compare Insurance plans with the assistance of GodSpeed.
				</p>
				<p>
					<img src={tag} alt="" />
					We evaluate your business and handle every aspect of your insurance coverage.
				</p>
				<p>
					<img src={tag} alt="" />
					At GodSpeed you will find the best experts and guidance.
				</p>
			</Box>
		</Fade>
	);
};

export default PolicyCompare;
