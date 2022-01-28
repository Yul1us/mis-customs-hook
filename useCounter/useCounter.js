// import React from 'react'

import { useState } from "react"

// export const useCounter = (initialState = 10) => {

export const useCounter = (initialState = 10) => {
    // return (
    //     <div>
            
    //     </div>
    // )
    const [state, setstate] = useState(initialState);  //10 por defecto

    // const increment = () => {
    //     setstate( state + 1 );

    // }

    // const decrement = () => {
    //     setstate( state - 1 );

    const increment = ( factor = 1 ) => {
        setstate( state + factor );

    }

    const decrement = ( factor = 1 ) => {
        setstate( state - factor );

    }

    const reset = (  ) => {
        setstate( initialState );

    }

    return {
        state,
        increment,
        decrement,
        reset,

    }

}
