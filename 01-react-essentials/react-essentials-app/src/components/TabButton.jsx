export default function TabButton({ label, onSelect, isSelected }) {
  console.log("TABBUTTON APP COMPONENT RENDERED");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {label}
      </button>
    </li>
  );
}
