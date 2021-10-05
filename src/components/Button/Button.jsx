export default function Button({ text, type, onClick }) {
  return (
    <button type={type} name={text} onClick={onClick}>
      {text[0].toUpperCase() + text.slice(1)}
    </button>
  );
}
