import React from "react";

interface Props {
    total:number;
}
const Amount:React.FC<Props> = (props) => {
    return (
        <div>
            <p>total price: {props.total}</p>
        </div>
    );
};

export default Amount;