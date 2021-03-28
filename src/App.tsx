import React, { useState } from 'react';
import RT from './assets/RT.png'
import { hola } from './hj';

type HeaderProps = { name: string }

const Header = ({name}: HeaderProps) => (<h2>{name}</h2>)

const App = () => {
    const [state, setState] = useState("Timbi")
    return (
        <div>
            <h1>Hello, World!</h1>
            <h2>{hola()}</h2>
            <Header name="Title" />
            <h1 style={{ color: "red" }}>HOLA FROM APpgerfwP{state}</h1>
            <img src={RT} />
            <button onClick={() => setState("Rogha")}>CHANGE</button>
        </div>
    )
}

export default App;