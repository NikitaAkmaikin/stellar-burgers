import { ProfileOrdersUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/store';
import { getApiOrders } from '../../services/slices/orderSlices';

export const ProfileOrders: FC = () => {
  const dispatch = useDispatch();
  /** TODO: взять переменную из стора */
  const orders: TOrder[] = useSelector((state) => state.orders.orders);

  useEffect(() => {
    dispatch(getApiOrders());
  }, []);

  return <ProfileOrdersUI orders={orders} />;
};
