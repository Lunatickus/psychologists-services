import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as UserIcon } from "../../icons/user.svg";
import { selectUserName } from "../../redux/auth/auth.selectors";
import { UserMenuWrapper } from "./UserMenu.styled";
import { LogOut } from "../../redux/auth/authOperations";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  return (
    <UserMenuWrapper>
      <div className="user-wrapper">
        <UserIcon />
        <p className="user-name">{name}</p>
      </div>
      <button type="button" className="log-out-button" onClick={() => dispatch(LogOut())}>
        Log Out
      </button>
    </UserMenuWrapper>
  );
};
