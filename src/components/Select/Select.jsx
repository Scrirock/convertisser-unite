import "./Select.css";

export function Select({ name, unit, setUnit, arrayFilter, disable }) {
  const symbols = [
    "Choississez une unité",
    " m",
    "dm",
    "cm",
    "mm",
    " l",
    "dl",
    "cl",
    "ml",
  ];

  return (
    <select
      name={name}
      id={name}
      onChange={(e) => setUnit(e.target.value)}
      value={unit}
      disabled={disable}
    >
      {symbols
        .filter((symbol, index) => arrayFilter.includes(symbol))
        .map((symbol, index) => (
          <option key={index} value={symbol}>
            {symbol}
          </option>
        ))}
    </select>
  );
}
