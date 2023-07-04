const Card=({data=[]})=>{
    // console.log(data)
    return (
        <div data-testid="data-list" style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)',gap:'5px'}}>
            {data.map((item)=>{
                return(
                    <div data-testid="superhero-list" key={Math.random()} style={{border:'1px solid red'}}>
                        <h2>Hero Name: {item.name}</h2>
                        <h3>Height: {item.height}</h3>
                        <h3>Weight: {item.weight}</h3>
                        <h3>Power Level: {item.powerlevel}</h3>
                        {/*All the content of the card has to be added over here*/}
                    </div>
                )
            })}
        </div>
    )
}

export default Card;
