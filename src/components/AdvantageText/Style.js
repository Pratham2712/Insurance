import styled from 'styled-components';

export const Box = styled.div`
	overflow-y: hidden;
	height: 53vh;
	h2 {
		text-align: center;
		margin-top: 2rem;
		margin-bottom: 2.5rem;
		letter-spacing: 2px;
		word-spacing: 3px;
		color: var(--light-blue);
		@media (max-width: 500px) {
			margin-top: 1rem;
			margin-bottom: 1.5rem;
			font-size: 1.3rem;
		}
	}
	p {
		display: flex;
		align-items: center;
		font-size: 1.3rem;
		margin-bottom: 3rem;
		
		@media (max-width: 500px) {
			margin-bottom: 1rem;
			font-size: 1rem;
		}
	}
	img {
		margin-right: 1rem;
	}
`;
