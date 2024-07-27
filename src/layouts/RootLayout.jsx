import { Outlet, NavLink } from "react-router-dom";
import DarkModeToggler from "../components/DarkModeToggler";

export default function RootLayout() {
  const navMenus = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "About",
      to: "/about",
    },
    {
      label: "Projects",
      to: "/projects",
    },
  ];

  return (
    <>
      <div className="flex items-center gap-4 p-4 bg-white text-zink-950 dark:bg-black dark:text-white">
        {navMenus.map((item, i) => (
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-400" : "")}
            to={item.to}
            key={i}>
            <span className="font-semibold">{item.label}</span>
          </NavLink>
        ))}

        <div>
          <DarkModeToggler />
        </div>
      </div>

      <div className="min-h-screen bg-white text-white dark:bg-black dark:text-white">
        <Outlet />
      </div>
    </>
  );
}
