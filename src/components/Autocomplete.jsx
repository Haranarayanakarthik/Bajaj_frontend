import React, { useState } from "react";

const Autocomplete = ({ value, setValue, data }) => {
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
    if (val) {
      const matches = data
        .filter((d) => d.name.toLowerCase().includes(val.toLowerCase()))
        .slice(0, 3);
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div>
      <input
        data-testid="autocomplete-input"
        value={value}
        onChange={handleChange}
        onKeyDown={(e) => e.key === "Enter" && setSuggestions([])}
        placeholder="Search doctors..."
      />
      <ul>
        {suggestions.map((s, i) => (
          <li
            key={i}
            data-testid="suggestion-item"
            onClick={() => {
              setValue(s.name);
              setSuggestions([]);
            }}
          >
            {s.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
