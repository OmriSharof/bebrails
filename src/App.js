import Header from "./components/Header";
import Search from "./components/Search";

import React, { useEffect } from "react";
import { useTheme } from "./ThemeContext";

function App() {

   const { theme } = useTheme();

   useEffect(() => {
     document.body.className = theme;
   }, [theme]);


  return (
    <div>
      <Header />
      <Search/>
    </div>
  );
}


export default App;
