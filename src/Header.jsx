import world from "./assets/world.svg"


function Header(){
    return (
        <div className="header">
            <img src={world}></img>
            <h2>My Travel Journal</h2>
        </div>
    )
}

export default Header