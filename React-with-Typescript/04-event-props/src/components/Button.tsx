// click event

import React from "react"

type ButtonPops = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button = (props: ButtonPops) => {
    return <button onClick={event => props.handleClick(event, 1)}>Click</button>
}