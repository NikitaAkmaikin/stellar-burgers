import { FC, useMemo } from 'react';
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
// import { getConstructorBurger } from '../../services/slices/burgerSlices';
import { useDispatch, useSelector } from '../../services/store';
import { clearOrder } from '../../services/slices/newOrder';
import { useNavigate } from 'react-router-dom';
import { clearBurger } from '../../services/slices/burgerSlices';

export const BurgerConstructor: FC = () => {
  /** TODO: взять переменные constructorItems, orderRequest и orderModalData из стора */

  const { constructorItems } = useSelector((state) => state.burger);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orderRequest, orderModalData } = useSelector(
    (state) => state.newOrder
  );

  const onOrderClick = () => {
    if (!constructorItems.bun || orderRequest) return;
  };

  const closeOrderModal = () => {
    dispatch(clearOrder());
    navigate('/');
    dispatch(clearBurger());
  };

  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (s: number, v: TConstructorIngredient) => s + v.price,
        0
      ),
    [constructorItems]
  );

  return (
    <BurgerConstructorUI
      key={constructorItems.ingredients.length}
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={orderModalData}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
};
