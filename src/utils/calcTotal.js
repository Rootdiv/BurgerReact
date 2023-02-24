export const calcTotal = orderGoods =>
  orderGoods.reduce(
    ([totalCount, totalPrice], item) => {
      const sumCount = totalCount + item.count;
      const sumTotal = totalPrice + item.count * item.price;
      return [sumCount, sumTotal];
    },
    [0, 0],
  );
