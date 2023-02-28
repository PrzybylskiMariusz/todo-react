import { GlobalStyles } from "./styles/GlobalStyles";
import { getDate } from "./utils/helpers";
import { useState } from "react";
import Wrapper from "./components/Wrapper";
import Heading from "./components/Heading";
import DateParagraph from "./components/DateParagraph";
import Input from "./components/Input";
import List from "./components/List";

function App() {
	const [tasks, setTasks] = useState([
		{ id: 1, title: "Fake task from state", done: false },
		{ id: 2, title: "Fake task from state", done: true },
	]);

	const changeTaskStatus = (index) => {
		tasks[index].done = !tasks[index].done;
		setTasks([...tasks]);
	};

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
				<List tasks={tasks} changeTaskStatus={changeTaskStatus} />
			</Wrapper>
		</>
	);
}

export default App;
