import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Button({ children }) {
  //   const data = useContext(ThemeContext);
  const { theme, setTheme } = useContext(ThemeContext);
  //   console.log(data);
  return (
    <div>
      {/* Button - {data} */}
      Active theme - {theme}
      <br />
      {/* Button - {children} */}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
}

export default Button;