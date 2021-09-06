import React from 'react';
import tag from '../../Images/checked.png';
import Fade from 'react-reveal/Fade';
import { Box } from './Style';

const Claim = () => {
	return (
		<Fade left>
			<Box>
				<h2>Claim Assistance</h2>
				<p>
					<img src={tag} alt="" />
					Claim is become very easy with GodSpeed.
				</p>
				<p>
					<img src={tag} alt="" />
					Coverage of a policyholder is our priority and we make sure that process should be done as quick as
					possible.
				</p>
				<p>
					<img src={tag} alt="" />
					Compensation means Easy, Quick, Trustable.
				</p>
			</Box>
		</Fade>
	);
};

export default Claim;
