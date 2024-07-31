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
      <nav className="sticky top-0 flex items-center gap-4 p-4 bg-white text-zink-950 dark:bg-black/50 backdrop-blur-xl dark:text-white">
        {navMenus.map((item, i) => (
          <NavLink
            className={({ isActive }) => (isActive ? "text-sky-400" : "")}
            to={item.to}
            key={i}>
            <span className="font-light">{item.label}</span>
          </NavLink>
        ))}

        <div>
          <DarkModeToggler />
        </div>
      </nav>

      <div
        id="main-outlet"
        className="min-h-screen bg-white text-zink-950 dark:bg-transparent dark:text-white">
        <Outlet />
      </div>
    </>
  );
}
