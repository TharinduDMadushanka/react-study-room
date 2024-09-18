// array props
type PersonListProps = {
    names: {
        first: string
        last: string
    }[]
}

export const PersonLis = (props: PersonListProps) => {
    return(
        <div>
            {/* <h2>Bruce Wayn</h2>
            <h2>Bruce Kent</h2>
            <h2>Tdm Wayn</h2> */}
            {props.names.map(name => {
                return(
                    <h2 key={name.first}>
                        {name.first} {name.last}
                    </h2>
                )
            })}
        </div>
    );
}