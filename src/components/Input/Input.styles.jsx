import styled from "styled-components";

export const StyledInput = styled.input`
	display: block;
	width: 100%;
	font-family: "Mulish", sans-serif;
	font-size: 1.2rem;
	padding: 1.6rem;
	border: none;
	background-color: #f3f3f3;
	border-bottom: 1px solid #969696;
	border-top-left-radius: 0.8rem;
	border-top-right-radius: 0.8rem;

	&:focus {
		outline: none;
		background-color: #eeeeee;
		border-bottom: 1px solid #0860fb;
	}
`;
