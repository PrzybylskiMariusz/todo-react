import { StyledInput } from "./Input.styles";

const Input = ({ placeholder, type, value, onChange }) => {
	return (
		<StyledInput
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};

export default Input;
