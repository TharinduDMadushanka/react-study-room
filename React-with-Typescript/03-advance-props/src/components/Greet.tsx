// define the name's data type
type GreetProps = {
    name: string
    // now unnessecary to define messageCount
    messageCount?: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) =>{

    const {messageCount = 0} = props

    return(
        <div>
            <h2>

                {
                    props.isLoggedIn
                    ? `Welcome ${props.name}! You have ${props.messageCount} unread messages`
                    : 'Welcome Guest!'
                }

                
            </h2>
        </div>

    );
}