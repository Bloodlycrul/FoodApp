// Resturantant Component
const ResturantentCard = ({name, cusine, image, rating, delivery, costForTwo})=>{
  return(<>
    <div className="restaurant">
    <img src={image} alt={name} />
    <div>
      <h1 className="text-2xl my-5">{name}</h1>
      <h4 className="my-5 truncate">{cusine}</h4>
      <h4 className="my-4">{costForTwo}</h4>
      <div className="line-card">
        <h4 className="rating">{rating} Stars</h4>
        <h4><li>{delivery}</li></h4>
      </div>
    </div>
  </div>
    </>)
}


// What is Higher order component // A Higher order function is just a JS component that retruns an another compontents

export const PromotedResturantentCard = (ResturantentCard)=>{
  return (props)=>{
    return (<>
      <label className="font-bold text-black">Promopted</label>
      <ResturantentCard {...props}/>
      </>)
  }
}

export default ResturantentCard;