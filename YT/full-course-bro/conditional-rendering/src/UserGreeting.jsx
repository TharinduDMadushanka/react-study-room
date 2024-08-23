import PropTypes from 'prop-types'

function UserGreeting(props){

    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }else{
    //     return <h2>Please log in to continue..!</h2>
    // }

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>;

    const logMessage = <h2 className="log-promt">Please log in to continue..!</h2>;

    /*
    return(props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2> : 
                              <h2 className="log-promt">Please log in to continue..!</h2>);
    */

    // another way to use turnery operator
    return(props.isLoggedIn ? welcomeMessage : logMessage);
}

UserGreeting.prototype = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn : false,
    username : "Guest",
}

export default UserGreeting