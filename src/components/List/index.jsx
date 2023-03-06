import ListItem from "../ListItem";
import { StyledList } from "./List.styles";

const List = ({ tasks, changeTaskStatus, deleteTask }) => {
	const renderTasksList = () =>
		tasks.map((task, index) => (
			<ListItem
				key={crypto.randomUUID()}
				task={task}
				handleChangeTaskStatus={changeTaskStatus}
				deleteTask={deleteTask}
			/>
		));
	return <StyledList>{renderTasksList()}</StyledList>;
};

export default List;
