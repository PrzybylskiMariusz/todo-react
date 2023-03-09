import { Styled } from "./ListItem.styles";

const ListItem = ({ task, handleChangeTaskStatus, deleteTask }) => {
	return (
		<Styled.ListItem>
			<Styled.Paragraph isDone={task.done}>{task.title}</Styled.Paragraph>
			<Styled.ActionsWrapper>
				<Styled.IconWrapper>
					<Styled.CustomBiTrash onClick={() => deleteTask(task.id)} />
				</Styled.IconWrapper>
				<Styled.IconWrapper>
					<Styled.Checkbox
						type="checkbox"
						defaultChecked={task.done}
						onChange={() => handleChangeTaskStatus(task.id)}
					/>
				</Styled.IconWrapper>
			</Styled.ActionsWrapper>
		</Styled.ListItem>
	);
};

export default ListItem;
