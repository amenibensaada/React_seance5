import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"

export default function FcLifeCycle(props) {
    const params = useParams();
    console.log(params.id)
    // we can also do this 
    const {id} = useParams();
    console.log(id)
    const [name,setName]=useSearchParams({name:"Default name"})
    const [count, setCount] = useState(0)
    const [test,setTest] = useState(0)
    
    useEffect(() => {
        console.log('I m rendering 1')
        console.log(count)
        return ()=> { console.log("I m unmouting")}
    }, [])

    useEffect(() => {
        console.log('I m rendering 2')
        console.log(count)
    }, [count])
    
    useEffect(() => {
        console.log('I m rendering 3')
        console.log(count)
    })

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count-1)
    }
    

    console.log(count)
    console.log(props)
    return (
        <>
             <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <p> le parametre envoye :  </p> {id}
            <p> le nom est :  </p> {name.get("name")}
            {count}
        </>
    )
}