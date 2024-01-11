import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/usersSlice";

export const useUserAuth = () => {
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => {
    return state.customers.user;
  });

  const setAuthenticatedUser = (userData) => {
    dispatch(setUser(userData));
  };

  const clearAuthenticatedUser = () => {
    dispatch(setUser([]));
  };

  return {
    userAuth,
    setAuthenticatedUser,
    clearAuthenticatedUser,
  };
};
