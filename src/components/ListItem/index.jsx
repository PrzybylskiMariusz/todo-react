import { StyledListItem } from "./ListItem.styles";
import { BiTrash } from "react-icons/bi";
import styled from "styled-components";
import ActionsWrapper from "../ActionsWrapper";
import IconWrapper from "../IconWrapper";

const Paragraph = styled.p`
	text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
`;

const ListItem = ({ task, index, handleChangeTaskStatus }) => {
	return (
		<StyledListItem>
			<Paragraph isDone={task.done}>{task.title}</Paragraph>
			<ActionsWrapper>
				<IconWrapper>
					<BiTrash />
				</IconWrapper>
				<input
					type="checkbox"
					defaultChecked={task.done}
					onChange={() => handleChangeTaskStatus(index)}
				/>
			</ActionsWrapper>
		</StyledListItem>
	);
};

export default ListItem;
