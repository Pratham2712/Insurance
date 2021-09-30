import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import contact from '../Images/contact-page.jpg';

const Form = () => {
    return (
		<StyledSection>
			<Heading>
				<div>Contact</div>
			</Heading>
			<Flex>
            <FormPart>
                <div className="container">
	<div className="header">
		<h2>Get Expert Solution . Ask anything</h2>
	</div>
	<form id="form" className="form">
		<div className="form-control">
			<label for="username">Name</label>
			<input type="text" id="username" />
			<i className="fas fa-check-circle"></i>
			<i className="fas fa-exclamation-circle"></i>
			<small>Error message</small>
		</div>
		<div className="form-control">
			<label for="email">Email</label>
			<input type="email" id="email" />
			<i className="fas fa-check-circle"></i>
			<i className="fas fa-exclamation-circle"></i>
			<small>Error message</small>
		</div>
		<div className="form-control">
			<label for="message" className="message">Message</label>
			<textarea id="message" name="message" rows="7" cols="52" />
			<i classNameName="fas fa-check-circle"></i>
			<i classNameName="fas fa-exclamation-circle"></i>
			<small>Error message</small>
		</div>
		<button>Submit</button>
	</form>
</div>

				</FormPart>
				<Image>
                    <img src={contact} alt="" />
				</Image>
			</Flex>
        </StyledSection>
    )
}

const StyledSection = styled(motion.section)`
    min-height: 80vh;
	padding: 0rem 5rem;
    padding-top: 8rem;
	 @media (max-width:1150px){
        padding: 0rem 3rem;
        padding-top: 12rem;
    }
	 @media (max-width: 500px){
        padding: 0rem 1rem;
        padding-top: 7rem;
    }
`
const FormPart = styled.div`
    max-width: 100%;
	.container {
	background-color: #fff;
	border-radius: 5px;
	box-shadow: var(--box-shadow);
	overflow: hidden;
	width: 500px;
	max-width: 100%;
}

.header {
	background-color: var(--light-blue);
	padding: 20px 40px;
	@media (max-width: 500px){
		padding: 10px 20px;
	}
}

.header h2 {
	margin: 0;
	color: white;
	letter-spacing: 1px;
	word-spacing: 2px;
}

.form {
	padding: 30px 40px;
	@media (max-width: 500px){
		padding: 10px 20px;
	}
}

.form-control {
	margin-bottom: 10px;
	padding-bottom: 20px;
	position: relative;
}

.form-control label {
	display: inline-block;
	margin-bottom: 0px;
	color: #BF3DB7;
	font-weight: bold;
	letter-spacing: 1px;
}


label.message {
	display: inline-block;
	margin-bottom: 25px;

}

.form-control textarea {
	display: block;
	border: 2px solid  var(--light-blue);
	padding: 10px;
    border-radius: 2px;
	width: 100%;
}

.form-control textarea:focus {
	outline: 0;
	border-color: var(--dark-blue);
}

.form-control input {
	border: none;
	border-bottom: 2px solid var(--light-blue);
	
	display: block;
	font-family: inherit;
	font-size: 14px;
	padding: 10px;
	width: 100%;
}

.form-control input:focus {
	outline: 0;
	border-color: var(--dark-blue);
}

.form-control.success input {
	border-color: #2ecc71;
}

.form-control.error input {
	border-color: #e74c3c;
}

.form-control i {
	visibility: hidden;
	position: absolute;
	top: 40px;
	right: 10px;
}

.form-control.success i.fa-check-circle {
	color: #2ecc71;
	visibility: visible;
}

.form-control.error i.fa-exclamation-circle {
	color: #e74c3c;
	visibility: visible;
}

.form-control small {
	color: #e74c3c;
	position: absolute;
	bottom: 0;
	left: 0;
	visibility: hidden;
}

.form-control.error small {
	visibility: visible;
}

.form button {
	background-color: #8e44ad;
	border: 2px solid #8e44ad;
	border-radius: 4px;
	color: #fff;
	display: block;
	font-family: inherit;
	font-size: 16px;
	padding: 10px;
	margin-top: 20px;
	width: 100%;
}
`
const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 1150px){
		flex-direction: column;
	}
`
const Image = styled.div`
	img {
		width: 50rem;
		min-height: 80vh;

	}
`

const Heading = styled.div`
	text-align: center;
	color: var(--dark-blue);
	margin-bottom: 4rem;
	font-size: 2.5rem;
	font-weight: bold;
	@media (max-width: 500px) {
		margin-bottom: 2rem;
		font-size: 1.6rem;
	}
`

export default Form
