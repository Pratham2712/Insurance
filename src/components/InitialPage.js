import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SVG from './SVG';
import picture from '../Images/family4.jpg';
import Fade from 'react-reveal/Fade';

const InitialPage = () => {
	return (
		<StyledSection>
			<div className="part1">
				<Fade left>
					<LargeText>
						<span style={{ color: '#F06F27' }}>No worries,</span> we’ve got you covered!
					</LargeText>
				</Fade>
				<Fade right>
					<SmallText>
						Where <span style={{ color: '#F06F27' }}>Service</span> is Priority
					</SmallText>
				</Fade>
				<Buttons>
					<Fade>
						<button>Top plans</button>
						<button>Apply now</button>
					</Fade>
				</Buttons>
			</div>
			{/* <div className="part2">
				<SVG />
			</div> */}
		</StyledSection>
	);
};
const StyledSection = styled(motion.section)`
    display: flex;
    justify-content: space-between;
    min-height: 85vh;
    padding: 0rem 5rem;
    padding-top: 8rem;
     background-image: url(${picture});
      background-size: cover;
       background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
    border-bottom-right-radius: 5%;
    border-bottom-left-radius: 5%;
    position: relative;
    @media (max-width:1150px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 5rem;
        padding-bottom: 0rem;
        .part1 {
            width: 100%;
        }
        .part2 {
            width: 100%;
        }
    }
    @media (max-width: 500px){
        padding: 0rem 1rem;
        padding-top: 5rem;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      /* background-color: rgba(0,0,0,0.5); */
      background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.0));
       border-bottom-right-radius: 5%;
    border-bottom-left-radius: 5%;
    }
`;
const LargeText = styled(motion.div)`
    font-size: 2.4rem;
    font-weight: bold;
    color: white;
    text-align: center;
    padding-top: 5rem;
    opacity: 1;
    @media (max-width:500px){
        font-size: 1.8rem;
    }
`;
const SmallText = styled(motion.div)`
    font-size: 1.5rem;
    font-weight: lighter;
    padding-top: 1.5rem;
    text-align: center;
    opacity: 1;
    color: white;
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
        border: 2px solid #0493F1;
        background-color: #0493F1;
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
