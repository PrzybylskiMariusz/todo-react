import { Styled } from "./ListItem.styles";
import { useState } from "react";

const ListItem = ({
	task,
	handleEditTaskTitle,
	handleChangeTaskStatus,
	deleteTask,
}) => {
	const [editing, setEditing] = useState(false);

	const handleEditing = () => {
		setEditing((prevEditing) => !prevEditing);
	};

	let viewMode = {};
	let editMode = {};
	if (editing) {
		viewMode.display = "none";
	} else {
		editMode.display = "none";
	}

	const handleUpdatedDone = (event) => {
		if (event.key === "Enter") {
			setEditing(false);
		}
	};

	return (
		<Styled.ListItem>
			<Styled.TaskTitle isDone={task.done} style={viewMode}>
				{task.title}
			</Styled.TaskTitle>
			<Styled.EditingTaskTitle
				onChange={(e) => handleEditTaskTitle(e.currentTarget.value, task.id)}
				value={task.title}
				type="text"
				style={editMode}
				onKeyDown={handleUpdatedDone}
			/>
			<Styled.ActionsWrapper>
				<Styled.IconWrapper>
					<Styled.CustomBiTrash onClick={() => deleteTask(task.id)} />
				</Styled.IconWrapper>
				<Styled.IconWrapper>
					<Styled.CustomBiEdit onClick={handleEditing} />
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
