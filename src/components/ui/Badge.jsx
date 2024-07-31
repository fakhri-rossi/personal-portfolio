export default function Badge({ text = "Text", color = "teal" }) {
  return (
    <span
      className={`inline-block bg-${color}-400 px-2 rounded-full mx-1 text-xs text-white dark:text-black font-medium`}>
      {text}
    </span>
  );
  // return <span className={`bg-teal-400`}>{text}</span>;
}
