import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import Productlist from './ProductList';
import './App.css';

// function App() {
    
//     const [count,setCount]=useState(0)

//     useEffect(() => {
//         console.log("Akshita");
//     })

//     useEffect(() => {
//         console.log("Jiya");
//     }, [])

//     useEffect(() => {
//         console.log("Siya");
//     }, [count])

//     return (
//         <div>
//             <h1>Lorem ipsum dolor sit amet.</h1>
//             <button onClick ={()=>setCount(count+1)}>Click Me</button>
//         </div>
//     )
// }


function App(){
    const [count,setCount]=useState(0)
    const [products,setProducts]=useState([])

    useEffect(()=>{
        async function APIcall() {
            console.log("inside async function");

            let response = await fetch(
                "https://simple-full-stack-application.onrender.com/api/products"
            );

            let data = await response.json();
            console.log(data);
            setProducts(data);
        }

        APIcall();
    },[])

    return (
        <div className="app">
            <h1>Lorem ipsum dolor sit amet.</h1>

            <button
                className="counter-button"
                onClick ={()=>setCount(count+1)}
            >
                Click Me
            </button>

            <Productlist products={products}></Productlist>
        </div>
    )
}

export default App;