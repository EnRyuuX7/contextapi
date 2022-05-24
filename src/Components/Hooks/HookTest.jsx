import React, { useState, useEffect, useRef } from "react";

// function HookTest() {
//     const [count, setCount] = useState(0);
//     const [calculation, setCalculation] = useState(0);

//     useEffect(() => {
//         setCalculation(() => count * 2);
//     }, [count]); // <- add the count variable here

//     return (
//         <>
//             <p>Count: {count}</p>
//             <button onClick={() => setCount((c) => c + 1)}>+</button>
//             <p>Calculation: {calculation}</p>
//         </>
//     );
// }

function HookTest() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>
        </>
    );
}

export default HookTest;