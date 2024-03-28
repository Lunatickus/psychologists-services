import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserIsLoggedIn } from '../../redux/auth/auth.selectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} replace /> : Component;
};

export default PrivateRoute;