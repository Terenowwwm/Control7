import '../../components.css';
import React from "react";

interface Props {
    img:string;
    name: string;
    price: number;
    click: () => void;
}

const AddItems: React.FC<Props> = (props) => {
    return (
        <div className="blockFood" onClick={props.click}>
            <img className="image" src={props.img} alt="logo"/>
            <div>
                <h2>{props.name}</h2>
                <p>Price {props.price} KGS</p>
            </div>
        </div>
    );
};

export default AddItems;
