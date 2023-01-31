import Button from '../Button';
import Watch from './Watch';
import style from './Timer.module.scss';
import { timeForSeconds } from '../../common/utils/time';
import { ITask } from '../../types/task';
import { useEffect, useState } from 'react';

interface Props {
  selected: ITask | undefined;
  endTask: () => void;
}

export default function Timer({ selected, endTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeForSeconds(selected.time));
    }
  }, [selected]);

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regressive(counter - 1);
      }
      endTask();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch time={time} />
      </div>
      <Button onClick={() => regressive(time)}>Adicionar</Button>
    </div>
  );
}
