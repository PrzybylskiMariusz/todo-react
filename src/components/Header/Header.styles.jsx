import styled from "styled-components";

const DateParagraph = styled.p`
	font-weight: 400;
	color: ${({ theme }) => theme.grey};
	margin-top: 0.4rem;
`;

const Title = styled.h1`
	font-weight: 600;
	font-size: 4rem;
`;

export const Styled = { DateParagraph, Title };
