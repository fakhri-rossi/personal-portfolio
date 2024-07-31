import Photo from "../assets/img/project/wa-ss.png";
import Badge from "./ui/Badge";

export default function ProjectItem() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 py-5">
      <div className="w-full md:w-[40%]">
        <img className="rounded-xl w-full" src={Photo} alt="" />
      </div>

      <div className="w-[60%] flex flex-col gap-2">
        <p className="font-light text-3xl">Text Utama</p>

        {/* badge */}
        <div>
          <Badge color="teal" text="Front End" />
          <Badge color="red" text="Back End" />
          <Badge color="blue" text="Full Stack" />
        </div>
        <p>Icon Tech Stack</p>
        <p className="font-light text-xl">Desc</p>
      </div>
    </div>
  );
}
