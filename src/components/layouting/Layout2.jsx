export default function Layout2({ leftContent, rightContent }) {
  return (
    <div
      className={`w-full px-4 md:px-8 py-8 flex flex-col-reverse md:grid md:grid-cols-5 md:gap-2`}>
      {/* left content */}
      <div className="col-span-3 flex">{leftContent}</div>

      {/* right content */}
      <div className="col-span-2">{rightContent}</div>
    </div>
  );
}
