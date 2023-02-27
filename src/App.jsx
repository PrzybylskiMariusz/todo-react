import { GlobalStyles } from "./styles/GlobalStyles";
import { getDate } from "./utils/helpers";
import Wrapper from "./components/Wrapper";
import Heading from "./components/Heading";
import DateParagraph from "./components/DateParagraph";
import Input from "./components/Input";

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
				<ul>
					<li>
						<p>Fake task</p>
						<input type="checkbox" />
					</li>
				</ul>
			</Wrapper>
		</>
	);
}

export default App;
