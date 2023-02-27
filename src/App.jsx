import { GlobalStyles } from "./styles/GlobalStyles";
import { getDate } from "./utils/helpers";
import { BiTrash } from "react-icons/bi";
import Wrapper from "./components/Wrapper";
import Heading from "./components/Heading";
import DateParagraph from "./components/DateParagraph";
import Input from "./components/Input";
import List from "./components/List";
import ListItem from "./components/ListItem";
import IconWrapper from "./components/IconWrapper";
import ActionsWrapper from "./components/ActionsWrapper";

function App() {
	return (
		<>
			<GlobalStyles />
			<Wrapper>
				<header>
					<Heading title="My tasks" />
					<DateParagraph currentDate={getDate()} />
				</header>
				<form>
					<Input type="text" placeholder="+ Add your new task..." />
				</form>
				<List>
					<ListItem>
						<p>Fake task</p>
						<ActionsWrapper>
							<IconWrapper>
								<BiTrash />
							</IconWrapper>
							<input type="checkbox" />
						</ActionsWrapper>
					</ListItem>
					<ListItem>
						<p>Fake task</p>
						<ActionsWrapper>
							<IconWrapper>
								<BiTrash />
							</IconWrapper>
							<input type="checkbox" />
						</ActionsWrapper>
					</ListItem>
				</List>
			</Wrapper>
		</>
	);
}

export default App;
