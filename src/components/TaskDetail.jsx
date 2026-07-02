import { useParams, Link } from "react-router";

export default function TaskDetail({ tasks }) {
	const { taskId } = useParams();

	// check invalid/missing task id
	const task = tasks.find((task) => String(task.id) === taskId);
	if (!task) {
		return (
			<div>
				<p>Task not found!</p>
				<Link to={`/`}>Back</Link>
			</div>
		);
	}

	return (
		<div className="task-detail">
			<h1>{task.title}</h1>
			<p>{task.description}</p>
			<Link to={`/`}>Back</Link>
		</div>
	);
}
