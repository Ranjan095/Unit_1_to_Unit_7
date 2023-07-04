/** @format */

function RestaurantCard({
  name,
  image,
  type,
  rating,
  price_starts_from,
  number_of_votes,
}) {
  return (
    <div
      data-testid="restaurant-card"
      style={{
        border: "1px solid black",
        display: "flex",
        padding: "5px",
        gap: "10px",
      }}
    >
      <div>
        {" "}
        <img data-testid="restaurant-card-image" src={image} alt="" />
      </div>
      <div>
        <h3 data-testid="restaurant-card-name">{name}</h3>
        <p data-testid="restaurant-card-type">{type}</p>
        <p data-testid="restaurant-card-rating">{rating}</p>
        <h4 data-testid="restaurant-card-votes">{number_of_votes}</h4>
        <h4 data-testid="restaurant-card-price">{price_starts_from}</h4>
      </div>

      {/* display the props */}
    </div>
  );
}

export default RestaurantCard;
