import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SVG from './SVG';
import Fade from 'react-reveal/Fade';

const InitialPage = () => {
	return (
		<StyledSection>
			<div className="part1">
				<Fade left>
					<LargeText>
						<span style={{ color: '#EF6009' }}>No worries,</span> we’ve got you covered!
					</LargeText>
				</Fade>
				<Fade right>
					<SmallText>
						Where <span style={{ color: '#EF6009' }}>Growth</span> is Priority
					</SmallText>
				</Fade>
				<Buttons>
					<Fade bottom>
						<button>Top plans</button>
						<button>Apply now</button>
					</Fade>
				</Buttons>
			</div>
			<div className="part2">
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
    z-index: -1;
    .part1{
        width: 50%;
    }
    .part2{
        width: 50%;
    }
    @media (max-width:1150px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0rem 3rem;
        .part1 {
            width: 100%;
        }
        .part2 {
            width: 100%;
        }
    }
    @media (max-width: 500px){
        padding: 0rem 1rem;
    }
`;
const LargeText = styled(motion.div)`
    font-size: 2.4rem;
    font-weight: bold;
    color: #4A4A4A;
    text-align: center;
    padding-top: 5rem;
    @media (max-width:500px){
        font-size: 1.8rem;
    }
`;
const SmallText = styled(motion.div)`
    font-size: 1.5rem;
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
         @media (max-width:500px){
            font-size: 1rem;
            padding: 0.4rem 1.2rem;
            margin-left: 2.5rem;
        }
     }
`;
export default InitialPage;
