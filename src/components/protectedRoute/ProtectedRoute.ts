import { useLocation } from 'react-router-dom';
import { useSelector } from '../../services/store';
import { Navigate } from 'react-router';

type ProtectedRouteProps = {
  onlyUnAuth?: boolean;
  children: React.ReactElement;
};

export const ProtectedRoute = ({
  children,
  onlyUnAuth = false
}: ProtectedRouteProps) => {
  const location = useLocation();

  return children;
};
