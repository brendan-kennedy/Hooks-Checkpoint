function ProductCard({ product }) {
    return (
      <div className="product-card">
        <div className="product-image">
         
        </div>
        <div className="cat-name">{product.name}</div>
      </div>
    );
  }
  
  export default ProductCard;