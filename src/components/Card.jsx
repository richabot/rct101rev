import "../App.css"

const Card=({show=[]})=>{

    return (

        <div data-testid="data-list">
            {show.map((item)=>{
                console.log(1)
                console.log(item,"data")
                return(
                    <div data-testid="superhero-list">
                     <div className="border">
                     <div>{item.name}</div>

                     <div>{item.height}</div>
                     </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card;
