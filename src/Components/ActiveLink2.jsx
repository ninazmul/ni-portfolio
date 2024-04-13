import { NavLink } from "react-router-dom";

const ActiveLink2 = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-orange-900 border-l-4 rounded-none border-orange-900 transition cursor-pointer text-xl font-bold"
          : "text-xl font-bold"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink2;
