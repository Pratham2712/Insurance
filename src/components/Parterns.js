import React from 'react'
import styled from 'styled-components';
import citi from '../Images/citi.png'

const Parterns = () => {
    return (
        <StyledSection>
            <Heading>Our Partners</Heading>
            <Slider>
                <div className="slide-track">
                    <div className="slide">
                        <img src={citi} alt="" />
                    </div>
                    <div className="slide">
                        <img src={citi} alt="" />
                    </div>
                    <div className="slide">
                        <img src={citi} alt="" />
                    </div>
                    <div className="slide">
                        <img src={citi} alt="" />
                    </div>
                    <div className="slide">
                        <img src={citi} alt="" />
                    </div>
                    <div className="slide">
                        <img src={citi} alt="" />
                    </div>
                    <div className="slide">
                        <img src={citi} alt="" />
                    </div>
                    <div className="slide">
                        <img src={citi} alt="" />
                    </div>
                    <div className="slide">
                        <img src={citi} alt="" />
                    </div>
                </div>
            </Slider>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    padding: 3rem 5rem;
    @media (max-width: 1150px) {
		padding: 3rem 3rem;
	}
	@media (max-width: 500px) {
		padding: 3rem 1rem;
	}
`

const Heading = styled.div`
 
	color: #003478;
	font-size: 2.5rem;
	font-weight: bold;
    margin-top: 0.2rem;
    /* margin-bottom: 1rem; */
	@media (max-width: 500px) {
		font-size: 1.6rem;
	}

`
const Slider = styled.div`
    overflow: hidden;
    .slide-track {
         display: flex;
         width: calc(250px * 9);
         animation: scroll 40s linear infinite;
         &:hover {
             animation-play-state: paused;
         }
    }
    .slide {
        display: flex;
        align-items: center;
        padding-top: 1.5rem;
        margin-right: 4rem;
        @media (max-width: 500px) {
		margin-right: 2rem;
	}
       
    }
    img {
        padding: 0rem 5rem;
        background: rgba(0,0,0,0.1);
        transition: all 0.2s ease-in-out;
        @media (max-width: 500px) {
		padding: 0rem 2rem;
        width: 90%;
	}
    &:hover {
        transform: scale(0.95);
    }
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-250px * 4.5));
        }
    }
`
export default Parterns
