import style from './Watch.module.scss';

interface Props {
  time: number | undefined;
}
export default function Watch({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteTen, minuteUnity] = String(minutes).padStart(2, '0');
  const [secondTen, secondeUnity] = String(seconds).padStart(2, '0');

  return (
    <>
      <span className={style.relogioNumero}>{minuteTen}</span>
      <span className={style.relogioNumero}>{minuteUnity}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondTen}</span>
      <span className={style.relogioNumero}>{secondeUnity}</span>
    </>
  );
}
