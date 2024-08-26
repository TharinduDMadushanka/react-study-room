
function ProfilePicture(){

    const imgUrl = './src/assets/img.jpg';

    // const handleClick = () => console.log("Ouch!");
    // when click img image dissapier
    const handleClick = (e) => e.target.style.display = 'none';

    return(
        <img onClick={(e) => handleClick(e)} src={imgUrl}></img>
    );
}

export default ProfilePicture