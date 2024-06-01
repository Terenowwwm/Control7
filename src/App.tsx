import {useState} from "react";
import './App.css'
import OrderDetails from "./components/orderDetails/orderDetails.tsx";
import AddItems from "./components/addItems/addItems.tsx";
interface Food{
    name:string;
    count:number;
    price:number;
}
const App = () => {

    const [foods, setFoods] = useState([
        {img:'https://cdn-icons-png.flaticon.com/512/1046/1046784.png', name: 'Hunburger', price: 80 },
        {img:'https://cdn-icons-png.flaticon.com/512/590/590836.png', name: 'Coffee', price: 70 },
        {img:'https://cdn-icons-png.flaticon.com/512/2674/2674087.png', name: 'Cheeseburger', price: 90 },
        {img:'https://cdn-icons-png.flaticon.com/512/5012/5012493.png', name: 'Tea', price: 50 },
        {img:'https://cdn-icons-png.flaticon.com/512/1057/1057509.png', name: 'Fries', price: 45 },
        {img:'https://cdn-icons-png.flaticon.com/512/1149/1149912.png', name: 'Cola', price: 40 }
    ]);
    const [orders, setOrders] = useState<Food[]>([]);
    const select = (index:number) =>{
        const copyFoods = [...foods]
        const food = copyFoods[index];
        const findFood = orders.find(order => order.name === food.name);
        if (findFood){
            const update = orders.map((order)=> {
                if(order.name === food.name){
                    return {...order, count: order.count + 1};
                }
                return order;
            })
            setOrders(update)
        }else{
            setOrders([...orders, {...food, count:1}])
        }

    }
  return (
      <div className="app">
          <div className='block orderDetails'>
              <h2 className='orderDetailsH2'>Order Datails</h2>
              {orders.map((order, index) => (
                  <OrderDetails key={index} name={order.name} count={order.count} price={order.price}></OrderDetails>
              ))}
          </div>
          <div className='block'>
              {foods.map((food, index) => (
                  <AddItems img={food.img} key={index} name={food.name} price={food.price} click={() => select(index)} />
              ))}
          </div>


      </div>
  )
}

export default App
