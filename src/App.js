import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import RT from './assets/RT.png'

const App = () => {
    const [state, setState] = useState("Timbi")
    return (
        <div>
            <h1 style={{ color: "red" }}>HELLO FROM APpgerfwP{state}</h1>
            <img src={RT} />
            <button onClick={() => setState("Rogha")}>CHANGE</button>
        </div>
    )
}

export default hot(App);