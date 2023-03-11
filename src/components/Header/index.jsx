import { Styled } from "./Header.styles";

const Header = ({ title, currentDate }) => {
	return (
		<header>
			<Styled.Title>{title}</Styled.Title>
			<Styled.DateParagraph>{currentDate}</Styled.DateParagraph>
		</header>
	);
};

export default Header;
