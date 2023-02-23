import { useEffect } from 'react';
import style from './Catalog.module.css';
import { Container } from 'components/Container/Container';
import { Order } from 'components/Order/Order';
import { CatalogProduct } from 'components/CatalogProduct/CatalogProduct';
import { useSelector, useDispatch } from 'react-redux';
import { productRequestAsync } from 'store/product/productSlice';

export const Catalog = () => {
  const { products } = useSelector(state => state.product);
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
          <div className={style.wrap_list}>
            {products.length !== 0 ? (
              <ul className={style.list}>
                {products.map(product => (
                  <li key={product.id} className={style.item}>
                    <CatalogProduct product={product} />
                  </li>
                ))}
              </ul>
            ) : (
              <h3>К сожалению товаров данной категории нет</h3>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
