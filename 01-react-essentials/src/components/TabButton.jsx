export default function TabButton({ label, isSelected, ...props }) {
  console.log("TABBUTTON APP COMPONENT RENDERED");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {label}
      </button>
    </li>
  );
}
