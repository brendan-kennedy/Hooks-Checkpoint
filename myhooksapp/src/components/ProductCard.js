
function ProductCard({ item , displayProductCard }) {
    return (
      <div className="product-card">
       <h2 className="product-name">{item.name}</h2>
       <div className="product-id">{item.id}</div>
       <div className="product-slogan">{item.slogan}</div>
       <div className="product-description">{item.description}</div>
       <div className="product-default_price">{item.default_price}</div>
       <button onClick = {displayProductCard}> Show {item.name} </button> 
      </div> 
    );
  }
  
  export default ProductCard;