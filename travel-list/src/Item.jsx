/* eslint-disable react/prop-types */
export function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        <span style={{ marginRight: "5px" }}>{item.quantity}</span>

        {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)} style={{ color: "red" }}>
        &times;
      </button>
    </li>
  );
}
