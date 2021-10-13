import ProductCard from "./ProductCard";

function ItemList({ itemList, displayProductCard, show}) {
    return (
      <div className="product-list">
      {itemList.map((item) => (
          <div key = {item.id} >
          <ProductCard item = {item} displayProductCard = {displayProductCard}  show = {show} />
        
          </div> 
      ))}
      </div>
    );
  }
  
  export default ItemList;