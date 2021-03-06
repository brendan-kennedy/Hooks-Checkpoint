import { useState, useEffect } from 'react';
import ItemList from './components/itemlist'
import './App.css'

function App() {

const [itemList, setitemList] = useState(null)
const [show, setShow] = useState(false)

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

function displayCard (item, id)  {
  
  setShow(!show)
  console.log(item[id])

}

return (
  <div className="App">
    <h1 className = {'title'} >Store Stuff</h1>
   <p>  {itemList && <ItemList itemList = {itemList} displayCard = {displayCard} show = {show} />} </p> 
   <p>  </p>
  </div>
);
}
export default App;
