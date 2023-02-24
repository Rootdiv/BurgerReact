import { API_URI } from 'const';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from 'store/modalProduct/modalProductSlice';
import { addProduct } from 'store/order/orderSlice';
import style from './ListProduct.module.css';

export const ListProduct = () => {
  const { products, loaded } = useSelector(state => state.product);
  const dispatch = useDispatch();

  if (!products.length && loaded) {
    return <p className={style.empty}>К сожалению товаров данной категории нет</p>;
  }

  return (
    <ul className={style.list}>
      {products.map(product => (
        <li key={product.id} className={style.item}>
          <article className={style.product}>
            <img src={`${API_URI}/${product.image}`} alt={product.title} className={style.image} />
            <p className={style.price}>
              {product.price}
              <span className="currency">&nbsp;&#8381;</span>
            </p>
            <h3 className={style.title}>
              <button className={style.detail} onClick={() => dispatch(openModal(product.id))}>
                {product.title}
              </button>
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
