import ListItem from "../ListItem";
import { StyledList } from "./List.styles";

const List = ({ tasks, changeTaskStatus }) => {
	const renderTasksList = () =>
		tasks.map((task, index) => (
			<ListItem
				key={crypto.randomUUID()}
				task={task}
				index={index}
				handleChangeTaskStatus={changeTaskStatus}
			/>
		));
	return <StyledList>{renderTasksList()}</StyledList>;
};

export default List;
