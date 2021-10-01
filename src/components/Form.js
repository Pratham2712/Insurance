import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import contact from '../Images/contact-page.jpg';
import { pageAnimation } from '../Animation';


const Form = () => {
	//User data object
	const [Inputdata, setInputData] = useState({
		UserName: "",
		Email: "",
		PhoneNumber: "",
		Message: "",
	});
    
	//input validation confirmation
	const [NameCheck, setNameCheck] = useState(false);
	const [EmailCheck, setEmailCheck] = useState(false);
	const [PhoneNumberCheck, setPhoneNumberCheck] = useState(false);
	const [MessageCheck, setMessageCheck] = useState(false);
	
	//Data posting
	useEffect(() => {
		if (EmailCheck && PhoneNumberCheck && NameCheck && MessageCheck) {
			console.log(Inputdata);
			setInputData({
				UserName: "",
				Email: "",
				PhoneNumber: "",
				Message: "",
			});
			setEmailCheck(false);
			setPhoneNumberCheck(false);
			setNameCheck(false);
			setMessageCheck(false);
		}
	}, [EmailCheck,PhoneNumberCheck,NameCheck,MessageCheck]);
    
	//Checking validation on submit
	function Submit(e) {
		e.preventDefault();
		const username = document.getElementById('username');
		const email = document.getElementById('email');
		const phone = document.getElementById('phone');
		const message = document.getElementById('message');
		checkInputs(username, email, phone, message);
	}
	
	//main function
	function checkInputs(username, email, phone, message) {
		// trim to remove the whitespaces
		const usernameValue = username.value.trim();
		const emailValue = email.value.trim();
		const phoneValue = phone.value.trim();
		const messageValue = message.value;
		if (usernameValue === '') {
			setErrorFor(username, 'Name is Mandatory');
		} else {
			setSuccessFor(username);
			setNameCheck(true);
		}
		
		if (emailValue === '') {
			setErrorFor(email, 'Email is Mandatory');
		} else if (!isEmail(emailValue)) {
			setErrorFor(email, 'Invalid email');
		} else {
			setSuccessFor(email);
			setEmailCheck(true);
	
		}

		if (phoneValue === '') {
			setErrorFor(phone, 'phone number is Mandatory');
		} else if (isNaN(phoneValue)) {
			setErrorFor(phone, 'Invalid phone number');
		} else if (!isPhone(phoneValue)) {
			setErrorFor(phone, 'phone is less than 10 digits');
		} else {
			setSuccessFor(phone);
			setPhoneNumberCheck(true);
	
		}

		if (messageValue === '') {
			setErrorFor(message, 'Message is Mandatory');
		} else {
			setSuccessFor(message);
			setMessageCheck(true);
		}

	}
	
	//Error message
	function setErrorFor(input, message) {
		const formControl = input.parentElement;
		const small = formControl.querySelector('small');
		formControl.className = 'form-control error';
		small.innerText = message;
		setTimeout(() => {
			small.innerText = "";
		}, 2000);
	}
	
	//Success 
	function setSuccessFor(input) {
		const formControl = input.parentElement;
		formControl.className = 'form-control success';
	}
            //Email regex test
			function isEmail(email) {
				return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
			
			}

	//phone number regex test
	function isPhone(phone) {
		return /^\d{10}$/.test(phone);
	}
	return (
		<StyledSection variants={pageAnimation} initial="hidden" animate="show" exit="exit">
			<Heading>
				<div>Contact</div>
			</Heading>
			<Flex>
				<FormPart>
					<div className="container">
						<div className="header">
							<h2>Get Expert Solution . Ask anything</h2>
						</div>
						<form id="form" className="form" onSubmit={Submit}>
							<div className="form-control">
								<label for="username">Name</label>
								<input type="text" value={Inputdata.UserName} id="username" onChange={(e) => setInputData({ ...Inputdata, UserName: e.target.value })} />
								<small>Error message</small>
							</div>
							<div className="form-control">
								<label for="email">Email</label>
								<input type="email" value={Inputdata.Email} onChange={(e) => setInputData({ ...Inputdata, Email: e.target.value })} id="email" />
								<small>Error message</small>
							</div>
							<div className="form-control">
								<label for="phone">Phone</label>
								<input type="tel" value={Inputdata.PhoneNumber} maxLength="10" id="phone" onChange={(e) => setInputData({ ...Inputdata, PhoneNumber: e.target.value })} />
								<small>Error message</small>
							</div>
							<div className="form-control">
								<label for="message" className="message">Message</label>
								<textarea id="message" value={Inputdata.Message} name="message" rows="7" cols="52" onChange={(e) => setInputData({ ...Inputdata, Message: e.target.value })} />
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
	padding-bottom: 20px;
    margin-bottom: 10px;
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
	padding: 5px 10px ;
	width: 100%;
}

.form-control input:focus {
	outline: 0;
	border-color: var(--dark-blue);
}

.form-control.success input {
	/* border-color: #2ecc71; */
}

.form-control.error input {
	/* border-color: #e74c3c; */
}
.form-control.success textarea {
	/* border-color: #2ecc71; */
}

.form-control.error textarea {
	/* border-color: #e74c3c; */
}

/* .form-control i {
	visibility: hidden;
	position: absolute;
	top: 25px;
	right: 10px;
}

.form-control.success i.fa-check-circle {
	color: #2ecc71;
	visibility: visible;
}

.form-control.error i.fa-exclamation-circle {
	color: #e74c3c;
	visibility: visible;
} */

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
	background-color: #BF3DB7;
	border: 2px solid #BF3DB7;
	border-radius: 4px;
	color: #fff;
	display: block;
	font-family: inherit;
	font-size: 16px;
	padding: 10px;
	margin-top: 20px;
	width: 100%;
	cursor: pointer;
	&:focus {
		outline: none;
	}
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
        @media (max-width: 1150px){
			width: 100%;
			min-height: 48vh;
		}
        @media (max-width: 500px){
			width: 100%;
			min-height: 40vh;
		}
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
