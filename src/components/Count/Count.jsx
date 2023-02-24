import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from 'store/order/orderSlice';
import style from './Count.module.css';

export const Count = ({ count, id }) => {
  const dispatch = useDispatch();

  const addCount = () => {
    dispatch(addProduct({ id }));
  };

  const removeCount = () => {
    dispatch(removeProduct({ id }));
  };
  return (
    <div className={style.count}>
      <button type="button" onClick={removeCount} className={style.minus}>
        -
      </button>
      <p className={style.amount}>{count}</p>
      <button type="button" onClick={addCount} className={style.plus}>
        +
      </button>
    </div>
  );
};
