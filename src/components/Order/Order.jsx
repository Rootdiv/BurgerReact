import classNames from 'classnames';
import { OrderGoods } from 'components/OrderGoods/OrderGoods';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from 'store/modalDelivery/modalDeliverySlice';
import { orderRequestAsync } from 'store/order/orderSlice';
import style from './Order.module.css';

export const Order = () => {
  const [openOrder, setOpenOrder] = useState(false);
  const { totalCount, totalPrice, orderList, orderGoods } = useSelector(state => state.order);
  const dispatch = useDispatch();

  const handlerOpen = () => {
    setOpenOrder(!openOrder);
  };

  useEffect(() => {
    dispatch(orderRequestAsync());
  }, [orderList.length]);

  return (
    <div className={classNames(style.order, openOrder ? style.order_open : '')}>
      <section className={style.wrapper}>
        <div className={style.header} tabIndex="0" role="button" onClick={handlerOpen}>
          <h2 className={style.title}>Корзина</h2>
          <span className={style.count}>{totalCount}</span>
        </div>
        <div className={style.wrap_list}>
          <ul className={style.list}>
            {orderGoods.map(item => (
              <OrderGoods key={item.id} {...item} />
            ))}
          </ul>
          <div className={style.total}>
            <p>Итого</p>
            <p>
              <span className={style.amount}>{totalPrice}</span>
              <span className="currency">&nbsp;&#8381;</span>
            </p>
          </div>
          <button className={style.submit} disabled={orderGoods.length === 0} onClick={() => dispatch(openModal())}>
            Оформить заказ
          </button>
          <div className={style.appeal}>
            <p className={style.text}>Бесплатная доставка</p>
            <button className={style.close} onClick={handlerOpen}>
              Свернуть
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
