import React, { useState } from 'react';
import { ITask } from '../../types/task';
import Button from '../Button';
import style from './Forms.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}
function Forms({ setTasks }: Props) {
  const [task, setTask] = useState('');
  const [time, setTime] = useState('00:00');
  function addTask(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      {
        task,
        time,
        selected: false,
        complete: false,
        id: uuidv4(),
      },
    ]);
    setTask('');
    setTime('00:00');
  }
  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={task}
          onChange={(evento) => setTask(evento.target.value)}
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={time}
          onChange={(evento) => setTime(evento.target.value)}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}

export default Forms;
