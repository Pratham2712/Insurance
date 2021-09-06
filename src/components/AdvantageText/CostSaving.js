import React from 'react';
import tag from '../../Images/checked.png';
import Fade from 'react-reveal/Fade';
import { Box } from './Style';

const CostSaving = () => {
	return (
		<Fade left>
			<Box>
				<h2>Cost Saving</h2>
				<p>
					<img src={tag} alt="" />
					Lower rates on insurance for you.
				</p>
				<p>
					<img src={tag} alt="" />
					We offer you a range of different insurance products for more options to fit your needs.
				</p>
				<p>
					<img src={tag} alt="" />
					GodSpeed guides to choose the best price from several insurance which suites you.
				</p>
			</Box>
		</Fade>
	);
};

export default CostSaving;
