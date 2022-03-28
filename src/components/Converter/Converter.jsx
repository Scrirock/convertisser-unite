import "./Converter.css";
import { useEffect, useState } from "react";

export function Converter() {
  const [initialValue, setInitialValue] = useState(0);
  const [convertedValue, setConvertedValue] = useState(0);
  const [unit1, setUnit1] = useState(".m");
  const [unit2, setUnit2] = useState(".m");

  useEffect(() => {
    switch (unit1) {
      case ".m":
      case ".l":
        if (unit2 === ".m" || unit2 === ".l") setConvertedValue(initialValue);
        else if (unit2 === "dm" || unit2 === "dl")
          setConvertedValue(initialValue * 10);
        else if (unit2 === "cm" || unit2 === "cl")
          setConvertedValue(initialValue * 100);
        else if (unit2 === "mm" || unit2 === "ml")
          setConvertedValue(initialValue * 1000);
        break;
      case "dm":
      case "dl":
        if (unit2 === ".m" || unit2 === ".l")
          setConvertedValue(initialValue / 10);
        else if (unit2 === "dm" || unit2 === "dl")
          setConvertedValue(initialValue);
        else if (unit2 === "cm" || unit2 === "cl")
          setConvertedValue(initialValue * 10);
        else if (unit2 === "mm" || unit2 === "ml")
          setConvertedValue(initialValue * 100);
        break;
      case "cm":
      case "cl":
        if (unit2 === ".m" || unit2 === ".l")
          setConvertedValue(initialValue / 100);
        else if (unit2 === "dm" || unit2 === "dl")
          setConvertedValue(initialValue / 10);
        else if (unit2 === "cm" || unit2 === "cl")
          setConvertedValue(initialValue);
        else if (unit2 === "mm" || unit2 === "ml")
          setConvertedValue(initialValue * 10);
        break;
      case "mm":
      case "ml":
        if (unit2 === ".m" || unit2 === ".l")
          setConvertedValue(initialValue / 1000);
        else if (unit2 === "dm" || unit2 === "dl")
          setConvertedValue(initialValue / 100);
        else if (unit2 === "cm" || unit2 === "cl")
          setConvertedValue(initialValue / 10);
        else if (unit2 === "mm" || unit2 === "ml")
          setConvertedValue(initialValue);
        break;
    }
  }, [initialValue, unit1, unit2]);

  function reset() {
    setInitialValue(0);
    setUnit1(".m");
    setUnit2(".m");
  }

  return (
    <>
      <div className="source">
        <select
          name="sourceUnit"
          id="sourceUnit"
          onChange={(e) => setUnit1(e.target.value)}
          value={unit1}
        >
          <optgroup label="Longueur">
            <option value=".m">m</option>
            <option value="dm">dm</option>
            <option value="cm">cm</option>
            <option value="mm">mm</option>
          </optgroup>
          <optgroup label="Capacité">
            <option value=".l">l</option>
            <option value="dl">dl</option>
            <option value="cl">cl</option>
            <option value="ml">ml</option>
          </optgroup>
        </select>
        <input
          type="number"
          value={initialValue}
          onChange={(e) => setInitialValue(e.target.value)}
        />
      </div>
      <div className="converted">
        <input type="text" value={convertedValue} readOnly />
        <select
          name="convertedUnit"
          id="convertedUnit"
          onChange={(e) => setUnit2(e.target.value)}
          value={unit2}
        >
          <optgroup label="Longueur" disabled={unit1.slice(1) === "l"}>
            <option value=".m">m</option>
            <option value="dm">dm</option>
            <option value="cm">cm</option>
            <option value="mm">mm</option>
          </optgroup>
          <optgroup label="Capacité" disabled={unit1.slice(1) === "m"}>
            <option value=".l">l</option>
            <option value="dl">dl</option>
            <option value="cl">cl</option>
            <option value="ml">ml</option>
          </optgroup>
        </select>
      </div>
      <button onClick={reset}>Reset</button>
    </>
  );
}
