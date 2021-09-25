import React from 'react'
import styled from 'styled-components';
import discussImage from '../Images/aboutImage.jpg'
import google from '../Images/google.svg'
import star from '../Images/star.png'
import aboutContent from '../Images/about-content.jpg'


const About = () => {
    return (
        <StyledSection>
            <AboutContent>
             
                    <div className="heading">About Us</div>
                   
                    <div style={{display:"flex",justifyContent: "space-evenly",alignItems: "center"}}>
            <Image>
                <img src={aboutContent} alt="" />
            </Image>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fugiat iste illum dolores nesciunt ad? Facere illo a sequi nobis perferendis dignissimos voluptatibus optio.</Text>
                    </div>
                    <Flex>
                        <div>
                        <span className="title" > 27+ </span> <br />
                        <span className="subTitle">insurers</span>
                        </div>
                        <div>
                            <span className="title">500+</span> <br />
                           <span className="subTitle"> statisfied customers </span>
                        </div>
                        <div>
                            <img src={google} alt="" /> <br/>
                           <span  className="subTitle"> 5 <span><img src={star} alt="" /></span> ratings</span>
                        </div>
                    </Flex>
                <Contact>
                    <button>Contact</button>
                    </Contact>
       
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
      background: linear-gradient(to right, rgba(0,0,0,0.0),rgba(0,0,0,0.4));
    }
`

const Image = styled.div`
text-align: center;
    img {
        width: 20rem;
        height: 20rem;
        @media (max-width: 500px) {
		width: 10rem;
		height: 10rem;
	}
    }
`


const AboutContent = styled.div`
    z-index: 1;
    width: 60%;
    height: 75vh;
    background: white;
    padding: 1rem 2rem;
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .heading {
    text-align: center;
	color: #003478;
	font-size: 2.5rem;
	font-weight: bold;
    margin-top: 0.2rem;
    /* margin-bottom: 1rem; */
	@media (max-width: 500px) {
		font-size: 1.6rem;
	}
}
@media (max-width: 1150px) {
    width: 100%;
}
   @media (max-width: 500px) {
		padding: 1rem 1rem;
	}
    `
const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    margin-top: -2rem;
    div {
        padding-right: 0.1rem;
    }
    .title {
        font-size: 1.7rem;
        color:  #F06F27;
        font-weight: bold;
        letter-spacing: 2px;
        @media (max-width: 500px) {
		font-size: 1.3rem;
	}
    }
    .subTitle {
        font-size: 1.3rem;
        color: #003478;
        letter-spacing: 1px;
        @media (max-width: 500px) {
		font-size: 1rem;
	}
    }
    `
const Text = styled.div`
    font-size: 1rem;
    /* padding-bottom: 1rem; */
    @media (max-width: 500px) {
		font-size: 0.8rem;
	}
`
const Contact = styled.div`
    text-align: center;
    padding-top: 0.5rem;
  
    button {
        font-size: 1.3rem;
        cursor: pointer;
        width: 25%;
        padding: 0.5rem 0rem;
        background: transparent;
        transition: all .3s ease;
        border-radius: 0.2rem;
        letter-spacing: 3px;
		border: none;
        background-color: #0493F1;
        color: white;
        @media (max-width: 500px) {
		font-size: 1rem;
        width: 50%;
	}
        &:hover {
		    
            background-color: #003478;
		}
    }
`
export default About
