export default function TechLogo({ logo, label }) {
  return (
    <div className="flex items-center gap-2">
      <div className="aspect-square h-6 rounded-full p-0">
        <img className="rounded-full" src={logo} alt="" />
      </div>

      {/* <div className="text-lg font-semibold">{label}</div> */}
    </div>
  );
}
