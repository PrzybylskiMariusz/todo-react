import { Styled } from "./ListItem.styles";
import { useState } from "react";

const ListItem = ({
	task,
	handleEditTaskTitle,
	handleChangeTaskStatus,
	deleteTask,
}) => {
	const [editing, setEditing] = useState(false);
	const [inputText, setInputText] = useState(task.title);

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

	const onTaskUpdate = (e) => {
		let text = e.target.value;
		setInputText(text);
	};

	return (
		<Styled.ListItem>
			<Styled.TaskTitle isDone={task.done} style={viewMode}>
				{task.title}
			</Styled.TaskTitle>
			<Styled.EditingTaskTitle
				onChange={(e) => onTaskUpdate(e)}
				value={inputText}
				type="text"
				style={editMode}
			/>
			<Styled.ActionsWrapper>
				{!editing ? (
					<>
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
					</>
				) : (
					<Styled.Button
						onClick={() => handleEditTaskTitle(inputText, task.id)}>
						Save
					</Styled.Button>
				)}
			</Styled.ActionsWrapper>
		</Styled.ListItem>
	);
};

export default ListItem;
