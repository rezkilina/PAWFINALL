import React, { useState } from "react";

function AddTask({ onAddTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask({ task, priority, deadline });
      setTask("");   // Réinitialiser la tâche
      setPriority("Low");
      setDeadline(""); // Réinitialiser la date limite
    }
  };

  return (
    <div className="add-task">
      <h3 className="minititles">Add a Task</h3>
      <form onSubmit={handleSubmit}>
        <div className="inputcontainer">
          <input
            className="input"
            type="text"
            placeholder="I want to..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            className="dateInput"
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
        <div className="priority-buttons">
          <button
            type="button"
            className={priority === "High" ? "active" : ""}
            onClick={() => setPriority("High")}
          >
            High
          </button>
          <button
            type="button"
            className={priority === "Medium" ? "active" : ""}
            onClick={() => setPriority("Medium")}
          >
            Medium
          </button>
          <button
            type="button"
            className={priority === "Low" ? "active" : ""}
            
            onClick={() => setPriority("Low")}
          >
            Low
          </button>
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
