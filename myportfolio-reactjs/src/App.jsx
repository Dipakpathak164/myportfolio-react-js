import React, { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/header/Header";
export const ThemeContext =createContext(null);

const App = () => {
  const [theme,setTheme] =useState("dark")
  const toggleTheme = ()=>{
    setTheme((curr)=>(curr=== "light"?"dark":"light"))
  }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      <div className="App" id={theme}>
         <Header />
         <div className="switch text-center">
          <ReactSwitch onChange={toggleTheme} checked={theme==="dark"}/>
          <label className="d-block">{theme==="light"?"Light Mode":"Dark Mode"}</label>
         </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
