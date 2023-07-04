import { ProductCard } from "./ProductCard";

export const ProductList = ({products}) => {
  console.log(products)
  return (
    <div data-testid="product-list">
      {/* Map through products with ProductCard component  */}
      {products.map((ele)=><ProductCard key={ele.id} {...ele}/>)}
    </div>
  );
};
