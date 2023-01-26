import Button from '../Button';
import Watch from './Watch';
import style from './Timer.module.scss';
import { timeForSeconds } from '../../common/utils/time';
import { ITask } from '../../types/task';
import { useEffect, useState } from 'react';

interface Props {
  selected: ITask | undefined;
}

export default function Timer({ selected }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeForSeconds(selected.time));
    }
  }, [selected]);

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch time={time} />
      </div>
      <Button texto="Começar!" />
    </div>
  );
}
