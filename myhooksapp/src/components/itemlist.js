function ItemList({ itemList }) {
    return (
      <div className="product-list">
      {itemList.map((item) => (
          <div key = {item.id} >
          <button> {item.name} </button>
          </div> 
      ))}
      </div>
    );
  }
  
  export default ItemList;