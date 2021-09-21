import React from 'react'
import styled from 'styled-components';
import discussImage from '../Images/aboutImage.jpg'
import Slide from 'react-reveal/Slide';


const About = () => {
    return (
        <StyledSection>
           {/*  <Image>
                <img src={discussImage} alt="" />
            </Image> */}
            <AboutContent>
             <Slide bottom cascade>
                    <div className="heading">About Us</div>
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    
            </Slide>
            </AboutContent>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    min-height: 80vh;
   background-image: url(${discussImage});
    background-repeat: no-repeat;
    object-fit: cover;
    background-attachment: fixed;
          background-size: cover;
       background-position: center;
    padding: 0rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 1150px) {
		padding: 0rem 3rem;
	}
	@media (max-width: 500px) {
		padding: 0rem 1rem;
	}
    &::before {
      content: "";
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      /* background: linear-gradient(to right, rgba(0,0,0,0.0),rgba(0,0,0,0.2)); */
    }
`


const AboutContent = styled.div`
  /*   position: absolute; */
    width: 60%;
    height: 75vh;
    background: rgba(255,255,255,0.7);
    left: 7%;
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .heading {
    text-align: center;
	color: #003478;
	font-size: 2.5rem;
	font-weight: bold;
    margin-top: 0.2rem;
    margin-bottom: 1rem;
	@media (max-width: 500px) {
		font-size: 1.6rem;
	}
    }
   

`

export default About
