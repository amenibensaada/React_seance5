import { useState } from "react";



export default function FunctionalComponent(props) {
    const [state1, setState1]=useState(0);

// eslint-disable-next-line react/prop-types
return <h3> Functional Component {props.test} ,
 the value of the state {state1}</h3> ;
}