import styled from "styled-components";

const Wrapper = styled.div`
	height: 10rem;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Paragraph = styled.p`
	font-size: 1.4rem;
	color: ${({ theme }) => theme.blue};
`;

export const Styled = { Wrapper, Paragraph };
