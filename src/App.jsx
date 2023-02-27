function App() {
	const weekday = new Date().toLocaleDateString("en-US", { weekday: "long" });
	const numericDay = new Date().toLocaleDateString("en-US", { day: "numeric" });
	const month = new Date().toLocaleDateString("en-US", { month: "long" });
	const currentDate = `${weekday}, ${numericDay} ${month}`;

	return (
		<>
			<div>
				<h1>My Tasks</h1>
				<p>{currentDate}</p>
			</div>
			<form>
				<input type="text" placeholder="+ Add your new task..." />
			</form>
			<ul>
				<li>
					<label>
						<p>Fake task</p>
						<input type="checkbox" />
					</label>
				</li>
			</ul>
		</>
	);
}

export default App;
