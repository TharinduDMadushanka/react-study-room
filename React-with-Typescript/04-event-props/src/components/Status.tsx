type StatusProps = {
    // status: string
    // only these can be a prop
    status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {

    let message;
    if (props.status === 'loading'){
        message = 'Loading..'
    }else if (props.status === 'success'){
        message = 'Data fetched succesfully!'
    }else if (props.status === 'error'){
        message = 'Error fetching data!'
    }

    return(
        <div>
            {/* <h2>Loading..</h2>
            <h2>Data fetched succesfully!</h2>
            <h2>Error fetching data</h2> */}
            <h2>Status - {message}</h2>
        </div>
    );
}