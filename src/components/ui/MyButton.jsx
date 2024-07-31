export default function MyButton({ text, onButtonClick }) {
  return (
    <button
      className="bg-teal-500 text-white dark:text-black rounded-full px-2 py-1"
      onClick={onButtonClick}>
      {text}
    </button>
  );
}
