import { GlobalStyles } from "./styles/GlobalStyles";
import { getDate } from "./utils/helpers";
import { useState, useCallback } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
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

	const handleEditTaskTitle = (newTitleValue, id) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === id ? { ...task, title: newTitleValue } : task
			)
		);
	};

	const addTask = (task) => {
		setTasks([task, ...tasks]);
	};

	const deleteTask = (id) => {
		const filteredTasks = tasks.filter((task) => task.id !== id);
		setTasks([...filteredTasks]);
	};

	const defaultFormValue = { id: crypto.randomUUID(), title: "", done: false };

	const [formValue, setFormValue] = useState(defaultFormValue);

	const handleSubmit = (e) => {
		e.preventDefault();
		addTask(formValue);
		setFormValue(defaultFormValue);
	};

	const hanldeFormChange = useCallback(
		(e) => {
			setFormValue({ ...formValue, title: e.target.value });
		},
		[formValue]
	);

	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Wrapper>
					<Header title="My tasks" currentDate={getDate()} />
					<form onSubmit={handleSubmit}>
						<Input
							type="text"
							placeholder="+ Add your new task..."
							value={formValue.title}
							onChange={hanldeFormChange}
						/>
					</form>
					<List
						tasks={tasks}
						changeTaskStatus={changeTaskStatus}
						handleEditTaskTitle={handleEditTaskTitle}
						deleteTask={deleteTask}
					/>
				</Wrapper>
			</>
		</ThemeProvider>
	);
}

export default App;
