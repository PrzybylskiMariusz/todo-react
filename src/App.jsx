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

	const changeTaskStatus = (id) => {
		setTasks((prevTasks) => {
			return prevTasks.map((task) => {
				if (id === task.id) {
					return {
						...task,
						done: !task.done,
					};
				}
				return task;
			});
		});
	};

	const addTask = (task) => {
		setTasks([task, ...tasks]);
	};

	const deleteTask = (id) => {
		const filteredTasks = tasks.filter((task) => task.id !== id);
		setTasks([...filteredTasks]);
	};

	const [formValue, setFormValue] = useState({
		id: crypto.randomUUID(),
		title: "",
		done: false,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		addTask(formValue);
		setFormValue({ id: crypto.randomUUID(), title: "", done: false });
	};

	return (
		<>
			<GlobalStyles />
			<Wrapper>
				<header>
					<Heading title="My tasks" />
					<DateParagraph currentDate={getDate()} />
				</header>
				<form onSubmit={handleSubmit}>
					<Input
						type="text"
						placeholder="+ Add your new task..."
						value={formValue.title}
						onChange={(e) =>
							setFormValue({ ...formValue, title: e.target.value })
						}
					/>
				</form>
				<List
					tasks={tasks}
					changeTaskStatus={changeTaskStatus}
					deleteTask={deleteTask}
				/>
			</Wrapper>
		</>
	);
}

export default App;
