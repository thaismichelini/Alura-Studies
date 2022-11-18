import React from 'react';
import Item from './Item';
import style from './List.module.scss';

function List() {
  const tasks = [
    {
      task: 'React',
      time: '02:00:00',
    },
    {
      task: 'JavaScript',
      time: '01:00:00',
    },
    {
      task: 'TypeScript',
      time: '03:00:00',
    },
  ];
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudo do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} task={item.task} time={item.time} /> // mesmo que {... item}
        ))}
      </ul>
    </aside>
  );
}
export default List;
