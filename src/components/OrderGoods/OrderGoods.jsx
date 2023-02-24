import { Count } from 'components/Count/Count';
import { API_URI } from 'const';
import style from './OrderGoods.module.css';

export const OrderGoods = ({ id, title, weight, price, image, count }) => {
  return (
    <li className={style.item}>
      <img className={style.image} src={`${API_URI}/${image}`} alt={title} />
      <div className={style.goods}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.weight}>{weight}г</p>
        <p className={style.price}>
          {price}
          <span className="currency">&nbsp;&#8381;</span>
        </p>
      </div>
      <Count count={count} id={id} />
    </li>
  );
};
