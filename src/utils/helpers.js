export const getDate = () => {
	const weekday = new Date().toLocaleDateString("en-US", { weekday: "long" });
	const numericDay = new Date().toLocaleDateString("en-US", { day: "numeric" });
	const month = new Date().toLocaleDateString("en-US", { month: "long" });
	const currentDate = `${weekday}, ${numericDay} ${month}`;

	return currentDate;
};
