function ProductCard({ item }) {
    return (
      <div className="product-card">
       <h1 className="product-name">{item.name}</h1>
       <div className="product-id">{item.id}</div>
       <div className="product-slogan">{item.slogan}</div>
       <div className="product-description">{item.description}</div>
       <div className="product-default_price">{item.default_price}</div>
      </div> 
    );
  }
  
  export default ProductCard;