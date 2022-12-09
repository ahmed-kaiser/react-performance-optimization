import React, { useState } from 'react';

const CounterOne = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onChange={() => setCount(count + 1)}>Increment {count}</button>
        </div>
    );
};

export default CounterOne;