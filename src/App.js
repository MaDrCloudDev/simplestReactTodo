import React, { useState } from 'react';
import './App.css';

function App() {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState('');

	const handleAddTodo = () => {
		if (inputValue.trim() !== '') {
			setTodos([...todos, { text: inputValue, completed: false }]);
			setInputValue('');
		}
	};

	const handleToggleTodo = (index) => {
		const updatedTodos = [...todos];
		updatedTodos[index].completed = !updatedTodos[index].completed;
		setTodos(updatedTodos);
	};

	const handleDeleteTodo = (index) => {
		const updatedTodos = todos.filter((_, i) => i !== index);
		setTodos(updatedTodos);
	};

	return (
		<div className='container'>
			<h1>simplestJsTodo</h1>
			<div className='input-wrapper'>
				<input
					type='text'
					placeholder='Add a new todo'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button
					onClick={handleAddTodo}
					className='add-todo-button'>
					Add
				</button>
			</div>
			<ul>
				{todos.map((todo, index) => (
					<li
						key={index}
						className={todo.completed ? 'completed' : ''}>
						<input
							type='checkbox'
							checked={todo.completed}
							onChange={() => handleToggleTodo(index)}
						/>
						<span>{todo.text}</span>
						<button
							onClick={() => handleDeleteTodo(index)}
							className='delete-todo-button'>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
