const Feedback = ({good,neutral,bad,total,possitive})=>{
    return total === 0 ?
    (<p>No feedback yet</p>):
    (
        <div>{}
            <p>Good : {good}</p>
            <p>Neutral :{neutral}</p>
            <p>Bad : {bad}</p>
            <p>Total : {total}</p>
            <p>Possitive : {possitive}%</p>           
        </div>
    )
    

}

export default Feedback