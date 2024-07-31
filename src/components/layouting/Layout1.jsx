export default function Layout1({ leftContent, rightContent }) {
  return (
    <div className={`w-full px-4 md:px-8 py-8 md:grid md:grid-cols-5 md:gap-2`}>
      {/* left content */}
      <div className="col-span-2 flex">{leftContent}</div>

      {/* right content */}
      <div className="col-span-3 mt-5 ">{rightContent}</div>
    </div>
  );
}
