import { useDispatch, useSelector } from "react-redux";
import { ImUser } from "react-icons/im";
import { IoIosLogOut } from "react-icons/io";

import { getIsLogged } from "../../redux/Games/GamesSelectors";
import css from "./Icons.module.css";
import { changeToken } from "../../redux/Games/GamesSlice";

export const Icons = () => {
  const token = useSelector(getIsLogged);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(changeToken());
  };

  return (
    <div className={css.iconsWrap}>
      <button className={css.btn}>
        <ImUser className={css.icon} />
      </button>
      {token && (
        <button className={css.btn} onClick={handleLogout}>
          <IoIosLogOut className={css.icon} />
        </button>
      )}
    </div>
  );
};
