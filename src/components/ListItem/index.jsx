import { StyledListItem } from "./ListItem.styles";
import { BiTrash } from "react-icons/bi";
import ActionsWrapper from "../ActionsWrapper";
import IconWrapper from "../IconWrapper";

const ListItem = ({ title, isDone }) => {
	return (
		<StyledListItem>
			<p>{title}</p>
			<ActionsWrapper>
				<IconWrapper>
					<BiTrash />
				</IconWrapper>
				<input type="checkbox" defaultChecked={isDone} />
			</ActionsWrapper>
		</StyledListItem>
	);
};

export default ListItem;
