import Card from "./Card"
import data from "./data/travel"

function Content(){
    const content = data.map(card => {
        return <Card 
            card = {card}
        />
})

    return(

        <div className="content">
            {content}
        </div>
    )
}

export default Content