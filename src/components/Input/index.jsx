import { StyledInput } from "./Input.styles";

const Input = ({ placeholder, type }) => {
	return <StyledInput type={type} placeholder={placeholder} />;
};

export default Input;
