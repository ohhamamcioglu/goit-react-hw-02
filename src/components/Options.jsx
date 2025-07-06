const Options = ({good,neutral,bad,reset,total})=>{

    return(
        <div>
            <button onClick={good}> Good </button>
            <button onClick={neutral}> Neutral </button>
            <button onClick={bad}> Bad </button>
            {total > 0 && 
               <button onClick={reset}>Reset</button> }
        </div>
    )

}

export default Options