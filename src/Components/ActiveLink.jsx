import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-orange-900 border-b-2 border-orange-900 lg:border-orange-500 lg:text-orange-500 transition cursor-pointer text-xl font-bold"
          : "text-xl font-bold"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
