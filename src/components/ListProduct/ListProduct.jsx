import { API_URI } from 'const';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from 'store/order/orderSlice';
import style from './ListProduct.module.css';

export const ListProduct = () => {
  const { products } = useSelector(state => state.product);
  const dispatch = useDispatch();

  if (!products.length) {
    return <h3>К сожалению товаров данной категории нет</h3>;
  }

  return (
    <ul className={style.list}>
      {products.map(product => (
        <li key={product.id} className={style.item}>
          <article className={style.product}>
            <img src={`${API_URI}/${product.image}`} alt={product.title} className={style.image} />
            <p className={style.price}>
              {product.price}
              <span className="currency">&#8381;</span>
            </p>
            <h3 className={style.title}>
              <button className={style.detail}>{product.title}</button>
            </h3>
            <p className={style.weight}>{product.weight}г</p>
            <button className={style.add} type="button" onClick={() => dispatch(addProduct({ id: product.id }))}>
              Добавить
            </button>
          </article>
        </li>
      ))}
    </ul>
  );
};
