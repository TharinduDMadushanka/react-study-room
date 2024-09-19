type OscarProps = {
    children : React.ReactNode
}


export const Oscar = (props: OscarProps) => {
    // return <div>Oscar wins TDM!</div>
    return <div>{props.children}</div>
}