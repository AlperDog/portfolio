import React, { useState } from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: input.trim(), completed: false }
    ]);
    setInput('');
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="p-4" style={{ background: 'rgba(30, 30, 40, 0.95)', borderRadius: 16, boxShadow: '0 4px 32px #0008', maxWidth: 400, margin: '0 auto' }}>
      <h4 className="text-white mb-4 text-center" style={{ letterSpacing: 1 }}>Task Manager</h4>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control bg-dark text-white border-secondary"
          placeholder="Add a new task..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTask()}
        />
        <button className="btn btn-custom" type="button" onClick={addTask}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <ul className="list-group list-group-flush">
        {tasks.length === 0 && (
          <li className="list-group-item bg-transparent text-secondary text-center">No tasks yet!</li>
        )}
        {tasks.map(task => (
          <li
            key={task.id}
            className="list-group-item d-flex align-items-center justify-content-between bg-transparent"
            style={{
              borderBottom: '1px solid #333',
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? '#888' : '#fff',
              background: 'none',
              transition: 'all 0.2s'
            }}
          >
            <span
              style={{ cursor: 'pointer', flex: 1 }}
              onClick={() => toggleTask(task.id)}
              title="Mark as complete"
            >
              {task.text}
            </span>
            <button
              className="btn btn-sm btn-outline-danger ms-2"
              onClick={() => deleteTask(task.id)}
              title="Delete"
            >
              <i className="fas fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager; 