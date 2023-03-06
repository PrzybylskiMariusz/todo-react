import styled from "styled-components";

export const StyledInput = styled.input`
	display: block;
	width: 100%;
	font-size: 1.2rem;
	padding: 1.6rem;
	border: none;
	background-color: ${({ theme }) => theme.darkerBg};
	border-bottom: 1px solid ${({ theme }) => theme.grey};
	border-top-left-radius: 0.8rem;
	border-top-right-radius: 0.8rem;

	&:focus {
		outline: none;
		background-color: #eeeeee;
		border-bottom: 1px solid ${({ theme }) => theme.blue};
	}
`;
