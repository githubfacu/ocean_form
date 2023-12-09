import { useState } from "react"

const useInput = (type , setShow) => {

    const [value, setValue] = useState('')

    const onChange = (event) => {
        setValue(event.target.value.trim())
        setShow(false)
    }

    return{ value , onChange , type }
} 


export default useInput