import profilePic from "./assets/prop.PNG"
function Card(){
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Hedmon Achacha</h2>
            <p className="card-text">I love codying in react</p>
        </div>
    )
}
export default Card;