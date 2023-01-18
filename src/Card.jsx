import Ping from "./assets/ping.svg"

function Card(props){
    const card = props.card
    
    return(
        <div className="card">
            <img src={card.imageUrl}></img>
            <div>
                <div>
                    <img src={Ping}/>
                    <span>{card.location}</span>
                    <a> View on Google Maps</a>
                </div>
                <h1>{card.title}</h1>
                <p>{card.startDate} - {card.endDate}</p>
                <p>{card.description}</p>
            </div>
            
        </div>
    )
}

export default Card