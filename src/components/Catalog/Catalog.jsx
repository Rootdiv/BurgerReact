import { useEffect } from 'react';
import style from './Catalog.module.css';
import { Container } from 'components/Container/Container';
import { Order } from 'components/Order/Order';
import { ListProduct } from 'components/ListProduct/ListProduct';
import { useSelector, useDispatch } from 'react-redux';
import { productRequestAsync } from 'store/product/productSlice';

export const Catalog = () => {
  const { category, activeCategory } = useSelector(state => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    if (category.length) {
      dispatch(productRequestAsync(category[activeCategory].title));
    }
  }, [category, activeCategory]);

  return (
    <section className={style.catalog}>
      <Container className={style.container}>
        <Order />
        <div className={style.wrapper}>
          <h2 className={style.title}>{category[activeCategory]?.rus}</h2>
          <ListProduct />
        </div>
      </Container>
    </section>
  );
};
