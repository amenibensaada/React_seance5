
import React from 'react';


export default class ClassComponent 
        extends React.Component { 
            state = { 
                val : "Hello val state 1",
                obj : {
                    valobj : 10
                }   }
    render(){
        return (<>
     <h1> Class Component {this.props.name} </h1>
     <p>{this.state.val} & {this.state.obj.valobj}</p>
     </>)
    }
}
