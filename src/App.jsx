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
  const [{ color, background }, setColor] = useState({
    color: "red",
    background: "bleu",
  });

  const res = useWindowWidth();
  useEffect(() => {
    console.log("mounting");
  }, []);
  useEffect(() => {
    console.log("chaque render");
  });
  useEffect(() => {
    console.log("mounting & updating");
  }, [color]); // executer a chaque modif

  //  const hello = (e)=> {
  // return <p> Hello World {e}</p>
  //  }
  //  let
  // name = "Jane Doe"
  // const element = <h1> Hello, { name } </h1>
  // const tab =
  // [ {  name: "TWIN3", module : "REACT"},
  // { name: "TWIN3", module : "EXPRESS"}]
  // const fctTest = ()=> {
  //  return  tab.map( (e,i) => {
  //     return <li key={i}> {e.name} & {e.module} </li>
  //    })
  // }

  return (
    <>
      {/* <Unmouting /> */}
      <input
        type="text"
        onChange={(e) => setColor((c) => ({ ...c, color: e.target.value }))}
      />
      <p>
        {" "}
        the color is : {color} {background}
      </p>
      {res.width} {res.height}
    </>
  );
}

export default App;
