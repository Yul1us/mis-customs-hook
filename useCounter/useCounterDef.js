// import React from 'react'

import { useState } from "react"

// export const useCounter = (initialState = 10) => {

export const useCounterDef = (initialState = 10) => {
    // return (
    //     <div>
            
    //     </div>
    // )
    const [counter, setCounter] = useState(initialState);  //10 por defecto

    // const increment = () => {
    //     setstate( state + 1 );

    // }

    // const decrement = () => {
    //     setstate( state - 1 );

    const increment = (  ) => {
        setCounter( counter + 1 );

    }

    const decrement = (  ) => {
        setCounter( counter - 1 );

    }

    const reset = (  ) => {
        setCounter( initialState );

    }

    return {
        counter,
        increment,
        decrement,
        reset,

    }

}
