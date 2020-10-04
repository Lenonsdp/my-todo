import React, {useState} from 'react';
import './App.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
	return (
		<div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
			{todo.text}
			<div>
				<button onClick={() => completeTodo(index)}>Complete</button>
				<button onClick={() => removeTodo(index)}>x</button>
			</div>
		</div>
	);
}

function App() {
	
	const [todos, setTodos] = useState([
		{ text: "Aprender sobre o React", isCompleted: false },
		{ text: "Encontrar um amigo para o almoço", isCompleted: false },
		{ text: "Passar no supermercado", isCompleted: false }
	]);

	const addTodo = info => {
		const newTodos = [...todos, { text: info, isCompleted: false }];
		setTodos(newTodos);
	};

	const completeTodo = index => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = true;
		setTodos(newTodos);
	};

	const removeTodo = index => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<div className="app">
			<div className="todo-list">
				{todos.map((todo, index) => (
					<Todo key={index}
						index={index}
						todo={todo}
						completeTodo={completeTodo}
						removeTodo={removeTodo}
					/>
				))}
			</div>
			<div>
				<button onClick={() => addTodo("Mais um item")}>
					Adicione um item
				</button>
			</div>
		</div>
	);
}

export default App;