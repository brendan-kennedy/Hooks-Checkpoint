import ProductCard from "./ProductCard";

function ItemList({ itemList, displayCard, show}) {
    return (
      <div className="product-list">
      {itemList.map((item) => (
          <div key = {item.id} >
          <ProductCard item = {item}  displayCard ={displayCard} show = {show} />
          <button onClick = {() => displayCard(item.id,show)}> Toggle {item.name} Details </button> 
          </div> 
      ))}
      </div>
    );
  }
  
  export default ItemList;