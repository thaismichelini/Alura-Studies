import React, { useState } from 'react';
import Time from '../components/Timer';
import Forms from '../components/Forms';
import List from '../components/List';
import { ITask } from '../types/task';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(taskSelected: ITask) {
    setSelected(taskSelected);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: task.id === taskSelected.id ? true : false,
      }))
    );
  }
  return (
    <div className={style.AppStyle}>
      <Forms setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Time />
    </div>
  );
}

export default App;
