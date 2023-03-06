import { StyledListItem } from "./ListItem.styles";
import { BiTrash } from "react-icons/bi";
import styled from "styled-components";
import ActionsWrapper from "../ActionsWrapper";
import IconWrapper from "../IconWrapper";

const Paragraph = styled.p`
	text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
`;

const ListItem = ({ task, handleChangeTaskStatus, deleteTask }) => {
	return (
		<StyledListItem>
			<Paragraph isDone={task.done}>{task.title}</Paragraph>
			<ActionsWrapper>
				<IconWrapper>
					<BiTrash onClick={() => deleteTask(task.id)} />
				</IconWrapper>
				<input
					type="checkbox"
					defaultChecked={task.done}
					onChange={() => handleChangeTaskStatus(task.id)}
				/>
			</ActionsWrapper>
		</StyledListItem>
	);
};

export default ListItem;
