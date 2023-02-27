import { GlobalStyles } from "./styles/GlobalStyles";
import Wrapper from "./components/Wrapper";
import Heading from "./components/Heading";
import DateParagraph from "./components/DateParagraph";

function App() {
	const weekday = new Date().toLocaleDateString("en-US", { weekday: "long" });
	const numericDay = new Date().toLocaleDateString("en-US", { day: "numeric" });
	const month = new Date().toLocaleDateString("en-US", { month: "long" });
	const currentDate = `${weekday}, ${numericDay} ${month}`;

	return (
		<>
			<GlobalStyles />
			<Wrapper>
				<header>
					<Heading title="My tasks" />
					<DateParagraph currentDate={currentDate} />
				</header>
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
			</Wrapper>
		</>
	);
}

export default App;
