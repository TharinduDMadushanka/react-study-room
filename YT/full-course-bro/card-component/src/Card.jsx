import profilePic from './assets/profile.jpg'

function Card(){

    return(
        <div className="card">
            <img className='card-img' src={profilePic} alt="profile pic"></img>
            <h2 className='card-title'>TDM SHANKAR</h2>
            <p className='card-text'>I am a Student and play video games</p>
        </div>
    );

}

export default Card