import React from 'react';
import '../../components.css'
interface Props {
    name: string;
    count: number;
    price: number;
    delete: ()=>void;
}
const OrderDetails:React.FC<Props> = (props) => {
    return (
        <div className='mini_blocks'>
            <p>{props.name}  x{props.count} - {props.price} KGS</p>
            <div className='delete' onClick={props.delete}>detele</div>
        </div>
    );
};

export default OrderDetails;