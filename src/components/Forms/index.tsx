import React from 'react';
import { ITask } from '../../types/task';
import Button from '../Button';
import style from './Forms.module.scss';
import { v4 as uuidv4 } from 'uuid';

class Forms extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}> {
  state = {
    task: '',
    time: '00:00',
  };
  addTask(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTasks((oldTasks) => [
      ...oldTasks,
      {
        ...this.state,
        selected: false,
        complete: false,
        id: uuidv4(),
      },
    ]);
    this.setState({
      task: '',
      time: '00:00',
    });
  }
  render(): React.ReactNode {
    return (
      <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            value={this.state.task}
            onChange={(evento) =>
              this.setState({ ...this.state, task: evento.target.value })
            }
            id="tarefa"
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
            value={this.state.time}
            onChange={(evento) =>
              this.setState({ ...this.state, time: evento.target.value })
            }
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button type="submit" texto="Adicionar" />
      </form>
    );
  }
}
export default Forms;
