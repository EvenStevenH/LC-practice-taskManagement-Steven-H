import "./App.css";
import { Routes, Route } from "react-router";
import TaskDetail from "./components/TaskDetail";
import TaskList from "./components/TaskList";

const tasks = [
	{ id: 1, title: "Task 1", description: "Complete Practice 4." },
	{ id: 2, title: "Task 2", description: "Drink water!" },
	{ id: 3, title: "Task 3", description: "Start Unit 1 Project." },
];

export default function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<TaskList tasks={tasks} />}
			/>

			<Route
				path="/task/:taskId"
				element={<TaskDetail tasks={tasks} />}
			/>
		</Routes>
	);
}
