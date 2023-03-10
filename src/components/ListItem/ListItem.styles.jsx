import styled from "styled-components";
import { BiTrash } from "react-icons/bi";
import checkIcon from "../../assets/todo.svg";

const ActionsWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.8rem;
`;

const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 3.2rem;
	height: 3.2rem;
	color: red;
	cursor: pointer;
`;

const TaskTitle = styled.input`
	text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
	width: 70%;
	padding: 0.8rem;
	border: none;
	background-color: none;
	border-radius: 0.4rem;

	&:focus {
		outline: none;
		background-color: ${({ theme }) => theme.bg};
	}
`;

const Checkbox = styled.input`
	appearance: none;
	width: 2.4rem;
	height: 2.4rem;
	border: 1px solid ${({ theme }) => theme.grey};
	border-radius: 50%;
	cursor: pointer;

	&:checked {
		background-image: url(${checkIcon});
		background-size: 120%;
		background-position: center;
		border: none;
	}
`;

const CustomBiTrash = styled(BiTrash)`
	width: 2.2rem;
	height: 2.2rem;
`;

const ListItem = styled.li`
	background-color: white;
	padding: 2.4rem 3.2rem 2.4rem 2.4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 0.8rem;
	box-shadow: 0px 0px 10px -2px rgba(8, 96, 251, 0.12);
`;

export const Styled = {
	ActionsWrapper,
	TaskTitle,
	Checkbox,
	CustomBiTrash,
	ListItem,
	IconWrapper,
};
