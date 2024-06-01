import {useState} from "react";
import './App.css'
import OrderDetails from "./components/orderDetails/orderDetails.tsx";
import AddItems from "./components/addItems/addItems.tsx";
import Amount from "./components/amountBlock/amount.tsx";
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
    const [totalPrice, setTotalPrice] = useState(0);

    const select = (index:number) => {
        const food = foods[index];
        const findFood = orders.find(order => order.name === food.name);
        if (findFood) {
            const update = orders.map((order)=> {
                if(order.name === food.name){
                    const count:number = order.count + 1
                    const amount:number = food.price * count;
                    return {...order, price: amount, count: count};
                }
                return order;
            });
            const total = update.reduce((sum, order) => sum + (order.price), 0);
            setTotalPrice(total);
            setOrders(update);
        } else {
            const newOrder = { ...food, count: 1 };
            const updatedOrders = [...orders, newOrder];
            const total = updatedOrders.reduce((sum, order) => sum + (order.price), 0);
            setTotalPrice(total);
            setOrders(updatedOrders);
        }
    };
    const deleteFood = (index:number) =>{
        const copyFoods = [...orders]
        const delFood = copyFoods.splice(index,1);
        const total = copyFoods.reduce((sum, order) => sum + (order.price), 0);
        setTotalPrice(total);
        setOrders(copyFoods)
    }
  return (
      <div className="app">
          <div className='block orderDetails'>
              <h2 className='orderDetailsH2'>Order Datails</h2>
              {orders.map((order, index) => (
                  <OrderDetails key={index} name={order.name} count={order.count} price={order.price} delete={()=>deleteFood(index)}></OrderDetails>
              ))}
              <Amount total={totalPrice}></Amount>
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
