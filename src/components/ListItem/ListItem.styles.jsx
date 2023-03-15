import styled from "styled-components";
import { BiTrash, BiEdit } from "react-icons/bi";
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
	cursor: pointer;
`;

const TaskTitle = styled.p`
	text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
	width: 70%;
	padding: 0.8rem;
`;

const EditingTaskTitle = styled.input`
	display: block;
	width: 70%;
	height: 3.6rem;
	padding: 0 0.8rem;
	border: none;
	background-color: ${({ theme }) => theme.bg};
	border-radius: 0.4rem;

	&:focus {
		outline: none;
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
	color: red;
`;

const CustomBiEdit = styled(BiEdit)`
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

const Button = styled.button`
	height: 3.2rem;
	padding: 0 2.4rem;
	text-transform: uppercase;
	font-size: 1.2rem;
	background-color: white;
	border: 1px solid ${({ theme }) => theme.blue};
	border-radius: 50px;
	color: ${({ theme }) => theme.blue};
	font-weight: 600;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.blue};
		color: white;
	}
`;

export const Styled = {
	ActionsWrapper,
	TaskTitle,
	EditingTaskTitle,
	Checkbox,
	CustomBiTrash,
	CustomBiEdit,
	ListItem,
	IconWrapper,
	Button,
};
