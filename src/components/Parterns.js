import React from 'react'
import styled from 'styled-components';
//import icon
import bajaj from '../Images/Parterns/bajaj.png'
import icici from '../Images/Parterns/icici.png'
import digit from '../Images/Parterns/digit.png'
import reliance from '../Images/Parterns/reliance.png'
import kodak from '../Images/Parterns/kodak.png'
import edelweiss from '../Images/Parterns/edelweiss.png'
import aditya from '../Images/Parterns/aditya.png'
import lic from '../Images/Parterns/lic.png'
import star from '../Images/Parterns/star.png'
import maxlife from '../Images/Parterns/maxlife.png'
import care from '../Images/Parterns/care.png'
import starunion from '../Images/Parterns/star-union.png'
import manipal from '../Images/Parterns/manipal.png'
import indiaFirst from '../Images/Parterns/indiaFirst.png'
import royal from '../Images/Parterns/royal.png'
import edelweissTokio from '../Images/Parterns/edelweissTokio.png'
import raheja from '../Images/Parterns/raheja.png'
import hdfcLife from '../Images/Parterns/hdfcLife.png'
import tataAig from '../Images/Parterns/tataAig.png'
import iffcoTokio from '../Images/Parterns/iffcoTokio.png'
import iciciPrudential from '../Images/Parterns/iciciPrudential.png'
import universal from '../Images/Parterns/universal.png'
import hdfcErgo from '../Images/Parterns/hdfcErgo.png'
import magma from '../Images/Parterns/magma.png'
import future from '../Images/Parterns/future.png'
import national from '../Images/Parterns/national.png'
import unitedIndia from '../Images/Parterns/unitedIndia.png'

const Parterns = () => {
    const icon = [bajaj, digit, edelweiss, icici, kodak, reliance,aditya,lic,star,maxlife,care,starunion,manipal,indiaFirst,royal,edelweissTokio,raheja, hdfcLife,tataAig, iffcoTokio,iciciPrudential, universal,hdfcErgo, magma, future, national, unitedIndia ];
    return (
        <StyledSection>
            <Heading>Our Partners</Heading>
            <Slider>
                <div className="slide-track">

                    <div className="slide">
                        {icon.map((icons) => (
                           
                            <img src={icons} alt="" key={ Math.random() * 52}/>
                           
                        ))}
                        {icon.map((icons) => (
                            
                            <img src={icons} alt="" key={ Math.random() * 52}/>
                 
                        ))}
                    </div>
                </div>
            </Slider>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    padding: 0rem 5rem;
    @media (max-width: 1150px) {
		padding: 0rem 3rem;
	}
	@media (max-width: 500px) {
		padding: 0rem 1rem;
	}

`

const Heading = styled.div`
 
	color: var(--dark-blue);
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
    margin-top: 3rem;
    @media (max-width: 500px) {
        margin-top: 1rem;
    }
    .slide-track {
         display: flex;
         align-items: center;
         width: calc(250px * 52);
         animation: scroll 90s linear infinite;
  
         &:hover {
             animation-play-state: paused;
         }
    }
    .slide {
        display: flex;
        align-items: center;
        width: 250px;
        height:25vh;
      
        @media (max-width: 500px) {
            width: 150px;
            height: 15vh;
        }
        
        img {
        margin: 0rem 2rem;
        padding: 0.5rem 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
        transition: all 0.2s ease-in-out;
        width: 100%;
        height: 80%;
        object-fit: contain;
        @media (max-width: 500px) {
		  margin: 0rem 0.5rem;
        padding: 0.2rem 0.2rem;
	}
    &:hover {
        transform: scale(1.1);
    }
    }
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-250px * 40));
        }
    }
`
export default Parterns
