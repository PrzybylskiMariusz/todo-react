import ListItem from "../ListItem";
import { StyledList } from "./List.styles";

const List = ({ list }) => {
	const renderTasksList = () =>
		list.map(({ id, title, done }) => (
			<ListItem key={id} title={title} isDone={done} />
		));
	return <StyledList>{renderTasksList()}</StyledList>;
};

export default List;
