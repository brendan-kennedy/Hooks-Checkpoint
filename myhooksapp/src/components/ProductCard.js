
function ProductCard({ item , displayCard, show }) {
    return (
      <div className="product-card">
       <h2 className="product-name">{item.name}</h2>
       <button onClick = {() => displayCard(show)}> Toggle {item.name} Details </button> 
      
       <div className = 'body of card'>
        {show?<div className="product-id">{item.id}</div> : ''}
       {show?<div className="product-slogan">{item.slogan}</div> : ''}
       {show?<div className="product-description">{item.description}</div> : ''}
       {show?<div className="product-default_price">{item.default_price}</div> : ''}
       </div>
      </div> 
    );
  }
  
  export default ProductCard;