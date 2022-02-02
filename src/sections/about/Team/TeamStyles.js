import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 1504px) {
		flex-direction: column;
	}
`;

export const TextContainer = styled.div`
	max-width: 510px;
`;

export const H3 = styled.h3`
	font-family: 'Aileron', sans-serif;
	font-weight: 600;
	font-size: 36px;
	letter-spacing: -1.44px;
	color: #f5f0f0;
`;

export const P = styled.p`
	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
	font-size: 16px;
	color: #f5f0f0;
	margin: 2.5em 0;
`;

export const Button = styled.button`
	cursor: pointer;
	font-family: 'Aileron', sans-serif;
	font-weight: 400;
	font-size: 20px;
	color: #f5f0f0;
	background: #8f6453;
	padding: 1em 1.5em;
	border: none;
	border-radius: 5px;
	margin-top: 0.5em;
`;

export const Img = styled.img`
	max-width: 1200px;
	border-radius: 5px;

	@media only screen and (max-width: 2088px) {
		max-width: 1000px;
	}

	@media only screen and (max-width: 1816px) {
		max-width: 900px;
	}

	@media only screen and (max-width: 1700px) {
		max-width: 750px;
	}

	@media only screen and (max-width: 1504px) {
		max-width: 100%;
		margin-top: 5em;
	}
`;
