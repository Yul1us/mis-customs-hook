// import React from 'react'

import { useState } from "react"

export const useForm = ( initialState = { } ) => {
    
    const [values, setValues] = useState(initialState)

    //Resetear el Value
    const reset = () => {
        setValues( initialState );
    }

    //Maneja los cambios en la caja de texto o target
    const handleInputChange = ( { target } ) => {

        setValues({
            ...values,
            [ target.name ]: target.value
    
        });

    }
    return [ values, handleInputChange, reset ];
}