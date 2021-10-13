import ProductCard from "./ProductCard";

function ItemList({ itemList}) {
    return (
      <div className="product-list">
      {itemList.map((item) => (
          <div key = {item.id} >
          <ProductCard item = {item} />
        
          </div> 
      ))}
      </div>
    );
  }
  
  export default ItemList;