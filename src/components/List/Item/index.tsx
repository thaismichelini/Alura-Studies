import { ITask } from '../../../types/task';
import style from '../List.module.scss';

export default function Item({ task, time, select, complete, id }: ITask) {
  console.log('===============', { task, time, select, complete, id });
  return (
    <li className={style.item}>
      <h3> {task}</h3>
      <span> {time}</span>
    </li>
  );
}
