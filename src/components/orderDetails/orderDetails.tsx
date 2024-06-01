import React from 'react';
import '../../components.css'
interface Props {
    img: string;
    name: string;
    count: number;
    price: number;
}
const OrderDetails:React.FC<Props> = (props) => {
    return (
        <div className="orderDetails">
            <h2 className='orderDetailsH2'>Order Datails</h2>
            <p>{props.count} {props.name} {props.price}</p>
        </div>
    );
};

export default OrderDetails;