import { useEffect, useState } from "react";
import "./App.css";
import Paper from "./component/paper";
import { calcTimeRemaining } from "./utils/date-utils";
import { Fireworks } from "fireworks-js";

function App() {
	const [countDown, setCountDown] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
		done: false,
	});
	const [flag, setFlag] = useState(true);

	useEffect(() => {
		if (countDown.done && flag) {
			const container = document.getElementById("firework-container");

			if (container) {
				const fireworks = new Fireworks(container);
				fireworks.start();
			}
			setFlag((prev) => !prev);
		}
	}, [countDown]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCountDown(calcTimeRemaining("2025-03-28T11:30:00"));
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div id="firework-container"></div>
			<h2>Contagem Regressiva para o fim do SIFEX 🔥</h2>
			<div className="countdown-container">
				<div>
					<Paper>{countDown.days.toString().padStart(2, "0")[0]}</Paper>
					<Paper>{countDown.days.toString().padStart(2, "0")[1]}</Paper>
					<span className="days-text">D</span>
				</div>
				<div>
					<Paper>{countDown.hours.toString().padStart(2, "0")[0]}</Paper>
					<Paper>{countDown.hours.toString().padStart(2, "0")[1]}</Paper>
					<span>H</span>
				</div>
				<div>
					<Paper>{countDown.minutes.toString().padStart(2, "0")[0]}</Paper>
					<Paper>{countDown.minutes.toString().padStart(2, "0")[1]}</Paper>
					<span>:</span>
					<Paper>{countDown.seconds.toString().padStart(2, "0")[0]}</Paper>
					<Paper>{countDown.seconds.toString().padStart(2, "0")[1]}</Paper>
				</div>
			</div>
		</>
	);
}

export default App;
