import React, { useState } from "react";
import "./App.css";
const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState("");
    const [editTaskId, setEditTaskId] = useState(null);

    const handleAddOrSaveTask = () => {
        if (text.trim() === "") return;

        if (editTaskId) {
            const updatedTasks = tasks.map((task) =>
                task.id === editTaskId ? { ...task, text } : task
            );
            setTasks(updatedTasks);
            setEditTaskId(null);
        } else {
            const newTask = { id: Date.now(), text, isCompleted: false };
            setTasks([...tasks, newTask]);
        }
        setText("");
    };

    const handleEditTask = (taskId) => {
        const taskToEdit = tasks.find((task) => task.id === taskId);
        if (!taskToEdit || taskToEdit.isCompleted) return;
        setEditTaskId(taskId);
        setText(taskToEdit.text);
    };

    const handleToggleComplete = (taskId) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
        );
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return (
        <div className="app-container">
            <h2>Todo List</h2>
            <div className="input-group">
                <input
                    className="todo-input"
                    placeholder={editTaskId ? "Edit Task Name" : "Enter Task Name"}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button className="add-btn" onClick={handleAddOrSaveTask}>
                    {editTaskId ? "Save Task" : "Add Task"}
                </button>
            </div>

            <div className="todo-list">
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className={`todo-item${task.isCompleted ? " completed" : ""}`}
                    >
                        <span>{task.text}</span>
                        <button className="complete-btn" onClick={() => handleToggleComplete(task.id)}>
                            {task.isCompleted ? "Undo" : "Completed Task"}
                        </button>
                        <button className="edit-btn" onClick={() => handleEditTask(task.id)} disabled={task.isCompleted}>
                            Edit
                        </button>
                        <button className="delete-btn" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Todo;