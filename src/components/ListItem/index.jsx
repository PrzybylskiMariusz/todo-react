import { StyledListItem } from "./ListItem.styles";
import { BiTrash } from "react-icons/bi";
import checkIcon from "../../assets/todo.svg";
import styled from "styled-components";
import ActionsWrapper from "../ActionsWrapper";
import IconWrapper from "../IconWrapper";

const Paragraph = styled.p`
	text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
`;

const StyledCheckbox = styled.input`
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

const StyledBiTrash = styled(BiTrash)`
	width: 2.2rem;
	height: 2.2rem;
`;

const ListItem = ({ task, handleChangeTaskStatus, deleteTask }) => {
	return (
		<StyledListItem>
			<Paragraph isDone={task.done}>{task.title}</Paragraph>
			<ActionsWrapper>
				<IconWrapper>
					<StyledBiTrash onClick={() => deleteTask(task.id)} />
				</IconWrapper>
				<IconWrapper>
					<StyledCheckbox
						type="checkbox"
						defaultChecked={task.done}
						onChange={() => handleChangeTaskStatus(task.id)}
					/>
				</IconWrapper>
			</ActionsWrapper>
		</StyledListItem>
	);
};

export default ListItem;
