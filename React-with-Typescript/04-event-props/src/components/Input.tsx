// input change
import { ChangeEvent } from "react"

type InputProps = {
    value: string
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    return <input type="text" value={props.value} onChange={props.handleChange}/>
}