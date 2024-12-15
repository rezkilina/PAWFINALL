import React from 'react';
import Sidebar from '../components/Sidebar';

import PomodoroTimer from '../components/PomodoroTimer';
import Musicex from '../components/Musicex';

import "../App.css";


function Dashboard() {
    return (
      <>
      <Sidebar />
      <div className="content">
       <PomodoroTimer />
       <Musicex />
      </div>
    </>
    
    );
}
export default Dashboard;
