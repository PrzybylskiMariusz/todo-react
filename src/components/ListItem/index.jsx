import { Styled } from "./ListItem.styles";

const ListItem = ({
	task,
	handleEditTaskTitle,
	handleChangeTaskStatus,
	deleteTask,
}) => {
	return (
		<Styled.ListItem>
			<Styled.TaskTitle
				onChange={(e) => handleEditTaskTitle(e.currentTarget.value, task.id)}
				isDone={task.done}
				value={task.title}
				type="text"
			/>
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
