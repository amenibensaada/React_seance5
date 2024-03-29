import React, { Suspense, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import useWindowWidth from './CustomHooks/useWindowWidth'

import "./App.css";
// import ClassComponent from "./Composants/ClassComponent";
// import FunctionalComponent from "./Composants/FunctionalComponent";
import Mouting from "./lifeCycle[CC]/Mounting";
import { Update } from "./lifeCycle[CC]/Update";
import Unmouting from "./lifeCycle[CC]/Unmounting";
import { Route, Routes } from 'react-router-dom';
// import FcLifeCycle from './lifeCycle[FC]/FcLifeCycle';
// import NotFound from './Composants/NotFound';
const FcLifeCycle = React.lazy(()=> import("./lifeCycle[FC]/FcLifeCycle"))
const FunctionalComponent = React.lazy(()=> import("./Composants/FunctionalComponent"))
const NotFound = React.lazy(()=> import("./Composants/NotFound"))
const ClassComponent = React.lazy(()=> import("./Composants/ClassComponent"))

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
  {/* <input type="text"
   onChange={e=> setColor(c=> ({...c, color: e.target.value}))}   />
  <p> the color is : {color} {background}</p> 

    {res.width } {res.height} */}
      <Suspense fallback={<p> Waiting server </p>}>
      <Routes>
        <Route path="/routes">
          <Route index element={<FunctionalComponent/>}/>
          
        <Route path="updating/:id" element={<FcLifeCycle />} />
          <Route path="classComponent" element={<ClassComponent />} />
        </Route>
        <Route path="*" element={ <NotFound/>} />
        </Routes>
        </Suspense>
    </>
  );
}

export default App;
