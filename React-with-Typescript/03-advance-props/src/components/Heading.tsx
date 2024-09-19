type HeadingProps = {
    children : string
}

export const Heading = (props: HeadingProps) => {
    // return <h2>Placeholder text</h2>
    return <h2>{props.children}</h2>
}