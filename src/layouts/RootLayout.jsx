import { Outlet, NavLink } from "react-router-dom";

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
      <div className="flex items-center gap-4 bg-gray-950 text-white p-4">
        {navMenus.map((item, i) => (
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-400" : "")}
            to={item.to}
            key={i}>
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className="min-h-screen bg-gray-900 text-white  no-scrollbar">
        <Outlet />
      </div>
    </>
  );
}
