import React, {useState} from 'react';

function Counter(props) {

    const [count, setCount] = useState(props.num);

    const countChangePlusHandler = () => {
        setCount(count + 1);
        props.totalCount(1);
    };

    const countChangeMinusHandler = () => {
        setCount(count - 1);
        props.totalCount(- 1);
    };

return (
    <div>
        <button onClick={countChangeMinusHandler}>-</button>
        {count}
        <button onClick={countChangePlusHandler}>+</button>
    </div>
);
}

export default Counter;
