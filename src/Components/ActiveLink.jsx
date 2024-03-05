import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "text-fuchsia-900 border-b-2 border-fuchsia-900 lg:border-fuchsia-500 lg:text-fuchsia-500 transition cursor-pointer text-xl font-bold"
            : "text-xl font-bold"
        }
      >
        {children}
      </NavLink>
    );
};

export default ActiveLink;