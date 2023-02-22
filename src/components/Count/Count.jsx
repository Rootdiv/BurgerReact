import { useState } from 'react';
import style from './Count.module.css';

export const Count = props => {
  const [count, setCount] = useState(props.count);

  const addCount = () => {
    setCount(count + 1);
  };

  const removeCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className={style.count}>
      <button type="button" onClick={removeCount} disabled={count === 1} className={style.minus}>
        -
      </button>
      <p className={style.amount}>{count}</p>
      <button type="button" onClick={addCount} className={style.plus}>
        +
      </button>
    </div>
  );
};
