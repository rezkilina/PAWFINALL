import React from "react";

function TaskList({ tasks, onRemoveTask, onUpdateTask }) {
  const handleEdit = (index, newTask) => {
    const updatedTask = { ...tasks[index], task: newTask };
    onUpdateTask(index, updatedTask);
  };

  return (
    <div className="task-list">
      <h3>My Tasks</h3>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <div className="task-details">
              <input
                type="checkbox"
                onClick={() => onRemoveTask(index)}
              />
              <input
                type="text"
                value={item.task}
                onChange={(e) => handleEdit(index, e.target.value)}
              />
              <span className={`priority ${item.priority.toLowerCase()}`}>
                {item.priority}
              </span>
              <span className="deadline">{item.deadline}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

  