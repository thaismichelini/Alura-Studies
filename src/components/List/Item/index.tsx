import { ITask } from '../../../types/task';
import style from './Item.module.scss';

interface Props extends ITask {
  selectTask: (taskSelected: ITask) => void;
}

export default function Item({
  task,
  time,
  selected,
  complete,
  id,
  selectTask,
}: Props) {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelected : ''} ${
        complete ? style.itemCompleted : ''
      }`}
      onClick={() =>
        !complete &&
        selectTask({
          task,
          time,
          selected,
          complete,
          id,
        })
      }>
      <h3>{task}</h3>
      <span>{time}</span>
      {complete && (
        <span className={style.completed} aria-label="tarefa completada"></span>
      )}
    </li>
  );
}
