import ProductCard from "./ProductCard";

function ItemList({ itemList, displayCard, show}) {
    return (
      <div className="product-list">
      {itemList.map((item) => (
          <div key = {item.id} >
          <ProductCard item = {item}  displayCard ={displayCard} show = {show} />
        
          </div> 
      ))}
      </div>
    );
  }
  
  export default ItemList;