import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SVG from './SVG';

const InitialPage = () => {
	return (
		<StyledSection>
			<div style={{ width: '50%' }}>
				<LargeText>
					<span style={{ color: '#EF6009' }}>No worries,</span> we’ve got you covered!
				</LargeText>
				<SmallText>
					Where <span style={{ color: '#EF6009' }}>Growth</span> is Priority
				</SmallText>
				<Buttons>
					<button>Top plans</button>
					<button>Apply now</button>
				</Buttons>
			</div>
			<div style={{ width: '50%' }}>
				<SVG />
			</div>
		</StyledSection>
	);
};
const StyledSection = styled(motion.section)`
    display: flex;
    justify-content: space-between;
    min-height: 88vh;
    padding: 0rem 5rem;
    padding-top: 8rem;
`;
const LargeText = styled(motion.div)`
    font-size: 2.4rem;
    font-weight: bold;
    color: #4A4A4A;
    padding-top: 5rem;
`;
const SmallText = styled(motion.div)`
    font-size: 1.4rem;
    font-weight: lighter;
    padding-top: 1.5rem;
    text-align: center;
    color: #4a4a4a;
`;

const Buttons = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding-top: 4.5rem;
    margin-left: -4rem;
     button {
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.4rem 1.8rem;
        background: transparent;
        transition: all .3s ease;
        border-radius: 0.2rem;
        border: 2px solid #6C63FF;
        background-color: #6C63FF;
        color: white;
        margin-left: 4rem;
        font-weight: lighter;
        &:hover {
            box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
        }
     }
`;
export default InitialPage;
