import "./Converter.css";
import { useEffect, useState } from "react";
import { Select } from "../Select/Select";

export function Converter() {
  const [initialValue, setInitialValue] = useState(0);
  const [convertedValue, setConvertedValue] = useState(0);
  const [unit1, setUnit1] = useState("Choississez une unité");
  const [unit2, setUnit2] = useState("Choississez une unité");
  const [arrayFilter, setArrayFilter] = useState(["Choississez une unité"]);

  useEffect(() => {
    if (unit1.slice(1) === "m") {
      setArrayFilter(["Choississez une unité", " m", "dm", "cm", "mm"]);
    } else {
      setArrayFilter(["Choississez une unité", " l", "dl", "cl", "ml"]);
    }

    switch (unit1) {
      case " m":
      case " l":
        if (unit2 === " m" || unit2 === " l") setConvertedValue(initialValue);
        else if (unit2 === "dm" || unit2 === "dl")
          setConvertedValue(initialValue * 10);
        else if (unit2 === "cm" || unit2 === "cl")
          setConvertedValue(initialValue * 100);
        else if (unit2 === "mm" || unit2 === "ml")
          setConvertedValue(initialValue * 1000);
        break;
      case "dm":
      case "dl":
        if (unit2 === " m" || unit2 === " l")
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
        if (unit2 === " m" || unit2 === " l")
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
        if (unit2 === " m" || unit2 === " l")
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
    setConvertedValue(0);
    setUnit1("Choississez une unité");
    setUnit2("Choississez une unité");
  }

  return (
    <>
      <div className="source">
        <Select
          name="sourceUnit"
          unit={unit1}
          setUnit={setUnit1}
          arrayFilter={[
            "Choississez une unité",
            " m",
            "dm",
            "cm",
            "mm",
            " l",
            "dl",
            "cl",
            "ml",
          ]}
        />
        <input
          type="number"
          value={initialValue}
          onChange={(e) => setInitialValue(parseFloat(e.target.value))}
        />
      </div>

      <div className="converted">
        <input type="text" value={convertedValue} readOnly />
        <Select
          name="convertedUnit"
          unit={unit2}
          setUnit={setUnit2}
          arrayFilter={arrayFilter}
          disable={unit1 === "Choississez une unité"}
        />
      </div>
      <button onClick={reset}>Reset</button>
    </>
  );
}
