import React, {useState} from "react";
import './App.css'
import OrderDetails from "./components/orderDetails/orderDetails.tsx";
import AddItems from "./components/addItems/addItems.tsx";
const App = () => {
    const [foods, setFoods] = useState([
        {img:'https://cdn-icons-png.flaticon.com/512/1046/1046784.png', name: 'Hunburger', price: 80 },
        {img:'https://cdn-icons-png.flaticon.com/512/590/590836.png', name: 'Coffee', price: 70 },
        {img:'https://cdn-icons-png.flaticon.com/512/2674/2674087.png', name: 'Cheeseburger', price: 90 },
        {img:'https://cdn-icons-png.flaticon.com/512/5012/5012493.png', name: 'Tea', price: 50 },
        {img:'https://cdn-icons-png.flaticon.com/512/1057/1057509.png', name: 'Fries', price: 45 },
        {img:'https://cdn-icons-png.flaticon.com/512/1149/1149912.png', name: 'Cola', price: 40 }
    ]);
    const [count, setCount] = useState(0);
    const edit = (index) =>{
        console.log(index)
    }
  return (
      <div className="app">
          <div className='block'>
              <OrderDetails name={'ddd'} price={count} count={count}></OrderDetails>
          </div>
          <div className='block'>
              {foods.map((food, index) => (
                  <AddItems img={food.img} key={index} name={food.name} price={food.price} click={() => edit(index)} />
              ))}
          </div>


      </div>
  )
}

export default App
