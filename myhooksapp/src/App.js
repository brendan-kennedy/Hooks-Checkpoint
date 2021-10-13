import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard'
import ItemList from './components/itemlist'

function App() {

const [itemList, setitemList] = useState(null)

useEffect(() => {
  fetch('http://52.26.193.201:3000/products/list')
  .then(res => {
    return res.json()
  })
  .then((data => { 
    console.log (data)
    setitemList (data)
  }))
}, [])


 








return (
  <div className="App">
    <h1 className = {'title'} >Store Stuff</h1>
    {itemList && <ItemList itemList = {itemList} />} 
  </div>
);
}
export default App;
