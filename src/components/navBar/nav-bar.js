import { css } from "@emotion/css";
import { FaUserAlt } from "react-icons/fa";
import { RiStarFill, RiSearchFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { colors } from "../../styles";

function NavBar() {
  return (
    <nav
      className={css`
        position: absolute;
        bottom: 0;
        border-top: 1px solid rgb(0 0 0 / 25%);
      `}
    >
      <ul
        className={css`
          margin: 0;
          width: 360px;
          display: flex;
          justify-content: space-around;
          font-size: 50px;
          padding: 0.5rem;
        `}
      >
        <NavLink
          to="/profile"
          style={({ isActive }) => {
            if (!isActive)
              return {
                color: colors.gray.light,
              };
            return {
              color: colors.gray.medium,
            };
          }}
        >
          <FaUserAlt />
        </NavLink>

        <NavLink
          to="/search"
          style={({ isActive }) => {
            if (!isActive)
              return {
                color: colors.gray.light,
              };
            return {
              color: colors.gray.medium,
            };
          }}
        >
          <RiSearchFill />
        </NavLink>

        <NavLink
          to="/favorites"
          style={({ isActive }) => {
            if (!isActive)
              return {
                color: colors.gray.light,
              };
            return {
              color: colors.gray.medium,
            };
          }}
        >
          <RiStarFill />
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
