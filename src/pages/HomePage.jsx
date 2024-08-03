import photo2 from "../assets/img/photo-no-bg-square.png";
import Layout2 from "../components/layouting/Layout2";
import twitterLight from "../assets/img/project/wireframe-twitter-clone-light.png";
import twitterDark from "../assets/img/project/wireframetwitter-clone-dark.png";
import mongoLogo from "../assets/img/logo/mongodb-square.png";
import nuxtLogo from "../assets/img/logo/nuxt-square.png";
import prismaLogo from "../assets/img/logo/prisma-square.jpg";
import CardProjects from "../components/card/CardProjects";
import Highlight from "../components/text/Highlight";

export default function HomePage() {
  return (
    <div className="min-h-screen w-screen">
      <div className="h-[100vh]">
        <Layout2
          leftContent={
            <div className="flex items-center pt-5">
              <h1 className="font-light text-3xl mt-5 md:mt-0 text-center md:text-start md:text-5xl md:pl-28 text-zinc-800 dark:text-gray-50">
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

      <div id="aboutme" className="py-8 my-20 mb-40">
        <p className="font-light text-3xl md:text-4xl text-center">About Me</p>
        <p className="font-light text-lg text-center px-10 md:px-40 mt-4">
          Have <Highlight text="experience" /> in building self-project{" "}
          <Highlight text="Full Stack" /> Web App that could handle User{" "}
          <Highlight
            text="Authentication & Authorization, Cloud File Uploading,
          and CRUD Operation"
          />
          . My methodical way at building a Web App: Requirements Engineering,
          Designing, Coding, Testing, and maintaining, brings me to build a Web
          App by <Highlight text="30% more efficient and directed." />
        </p>
      </div>

      <div className="py-8">
        <p className="font-light text-3xl md:text-4xl text-center">
          My Projects
        </p>

        {/* Twitter clone */}
        <CardProjects
          lightThumbnail={twitterLight}
          darkThumbnail={twitterDark}
          to="projects/"
          title="Social Media - Twitter Clone"
          description="A social media like Twitter. User can create an account, login, create tweets, etc."
          badges={[
            {
              color: "teal",
              text: "Front End",
            },
            {
              color: "red",
              text: "Back End",
            },
            {
              color: "blue",
              text: "Full Stack",
            },
          ]}
          techLogos={[
            {
              logo: nuxtLogo,
              label: "Nuxt 3",
            },
            {
              logo: mongoLogo,
              label: "Mongo DB",
            },
            {
              logo: prismaLogo,
              label: "Prisma ORM",
            },
          ]}
        />
      </div>
    </div>
  );
}
