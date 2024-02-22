import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent from './Composants/ClassComponent'
import FunctionalComponent from './Composants/FunctionalComponent'
import Mouting from './lifeCycle[CC]/Mounting'
import { Update } from './lifeCycle[CC]/Update'
import Unmouting from './lifeCycle[CC]/Unmounting'
import useWindowWidth from './CustomHooks/useWindowWidth'
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClassComponent from "./Composants/ClassComponent";
import FunctionalComponent from "./Composants/FunctionalComponent";
import Mouting from "./lifeCycle[CC]/Mounting";
import { Update } from "./lifeCycle[CC]/Update";
import Unmouting from "./lifeCycle[CC]/Unmounting";
import useWindowWidth from "./CustomHooks/useWindowWidth";

function App() {
  const [{color , background},setColor] =
   useState({color: 'red', background :'blue'});
 const [state,setState]=useState("");
  const res =useWindowWidth();
 useEffect(()=> console.log("mounting"),[])
 useEffect(()=> console.log("chaque rerender"));
 useEffect(()=> console.log("mouting & updating"),[color]);
  return (
  <> 
  <input type="text"
   onChange={e=> setColor(c=> ({...c, color: e.target.value}))}   />
  <p> the color is : {color} {background}</p> 

    {res.width } {res.height}
    </>
  );
}

export default App;
