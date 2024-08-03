import Layout1 from "../layouting/Layout1";
import Badge from "../ui/Badge";
import TechLogo from "../TechLogo";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function CardProjects({
  lightThumbnail,
  darkThumbnail,
  badges = [],
  techLogos = [],
  title = "",
  description,
  to = "",
}) {
  const [mode, setMode] = useState(
    document.body.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
    setMode(document.body.classList.contains("dark") ? "dark" : "light");
  }, [document.body.classList]);

  return (
    <Layout1
      leftContent={
        <img
          className="rounded-xl w-full"
          src={
            !darkThumbnail
              ? lightThumbnail
              : mode === "dark"
              ? darkThumbnail
              : lightThumbnail
          }
          alt=""
        />
      }
      rightContent={
        <div className="flex flex-col gap-2 md:pl-6">
          <p className="font-light text-xl md:text-3xl">{title}</p>
          <div>
            {badges?.map((badge, i) => (
              <Badge color={badge.color} text={badge.text} key={i} />
            ))}
          </div>
          <div className="flex items-center gap-2">
            {techLogos?.map((techLogo, i) => (
              <TechLogo logo={techLogo.logo} label={techLogo.label} key={i} />
            ))}
          </div>
          <p className="font-light text-sm">
            {description}{" "}
            <NavLink to={to} className="text-teal-400">
              Selengkapnya
            </NavLink>
          </p>

          <p>darkMode: {mode}</p>
        </div>
      }
    />
  );
}
