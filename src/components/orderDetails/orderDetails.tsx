import React from 'react';
import '../../components.css'
interface Props {
    name: string;
    count: number;
    price: number;
}
const OrderDetails:React.FC<Props> = (props) => {
    return (
        <div>
            <p>{props.name}  x{props.count} - {props.price} KGS</p>
        </div>
    );
};

export default OrderDetails;