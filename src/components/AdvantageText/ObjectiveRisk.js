import React from 'react';
import tag from '../../Images/checked.png';
import Fade from 'react-reveal/Fade';
import { Box } from './Style';

const ObjectiveRisk = () => {
	return (
		<Fade left>
			<Box>
				<h2>Objective Risk Assessment</h2>
				<p>
					<img src={tag} alt="" />
					We simplify the process of choosing Insurance for you.
				</p>
				<p>
					<img src={tag} alt="" />
					GodSpeed helps you to know what levels of coverage are right for your situation.
				</p>
				<p>
					<img src={tag} alt="" />
					Based on our experience & training, we analyse the risks and liabilities you face then, with these
					objective risk.
				</p>
			</Box>
		</Fade>
	);
};

export default ObjectiveRisk;
