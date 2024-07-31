import photo2 from "../assets/img/photo-no-bg-square.png";
import ProjectItem from "../components/ProjectItem";
import Layout1 from "../components/layouting/Layout1";
import Layout2 from "../components/layouting/Layout2";
import ssWa from "../assets/img/project/wa-ss.png";
import Badge from "../components/ui/Badge";
import TechLogo from "../components/TechLogo";
import mongoLogo from "../assets/img/logo/mongodb-square.png";
import nuxtLogo from "../assets/img/logo/nuxt-square.png";
import prismaLogo from "../assets/img/logo/prisma-square.jpg";
import MyButton from "../components/ui/MyButton";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen w-screen">
      <div className="h-[100vh]">
        <Layout2
          leftContent={
            <div className="flex items-center">
              <h1 className="font-light text-3xl md:text-5xl md:pl-28 text-zinc-800 dark:text-gray-50">
                Hi, <br />
                I'm <span className="text-sky-400">Fakhri Rossi</span>, <br />A
                Fullstack Web Developer
              </h1>
            </div>
          }
          rightContent={
            <div className="w-full">
              <img className="rounded-full w-full" src={photo2} alt="" />
            </div>
          }
        />
      </div>

      <div id="aboutme" className="py-8 min-h-screen">
        <p className="font-light text-3xl md:text-4xl text-center">About Me</p>
      </div>

      <div className="py-8">
        <p className="font-light text-3xl md:text-4xl text-center">
          My Projects
        </p>
        {/* <ProjectItem /> */}
        <Layout1
          leftContent={<img className="rounded-xl w-full" src={ssWa} alt="" />}
          rightContent={
            <div className="flex flex-col gap-2 md:pl-6">
              <p className="font-light text-xl md:text-3xl">
                Social Media - Twitter Clone
              </p>
              <div>
                <Badge color="teal" text="Front End" />
                <Badge color="red" text="Back End" />
                <Badge color="blue" text="Full Stack" />
              </div>
              <div className="flex items-center gap-2">
                <TechLogo logo={nuxtLogo} label="Nuxt 3" />
                <TechLogo logo={mongoLogo} label="Mongo DB" />
                <TechLogo logo={prismaLogo} label="Prisma ORM" />
              </div>
              <p className="font-light text-sm">
                A social media like Twitter. User can create an account, login,
                create tweets, etc.{" "}
                <NavLink to="/projects/1" className="text-teal-400">
                  Selengkapnya
                </NavLink>
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
}
