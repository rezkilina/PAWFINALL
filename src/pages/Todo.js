import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import Notes from "../components/Notes";
import Reminders from "../components/Reminders";
import Goals from "../components/Goals";


import "../App.css";

function Todo() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // État pour l'authentification
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const updateTask = (index, updatedTask) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? updatedTask : task
    );
    setTasks(updatedTasks);
  };


  return (
    
     
          <>
            <Sidebar />
            <div className="content">
              <div className="partieAdd">
                <AddTask onAddTask={addTask} />
              </div>
              <div className="listeT">
                <TaskList
                  tasks={tasks}
                  onRemoveTask={removeTask}
                  onUpdateTask={updateTask}
                />
              </div>
              <div className="sections-container">
                <Goals />
                <Reminders />
                <Notes />
              </div>
            </div>
          </>
        )};
      
  
  

export default Todo;

