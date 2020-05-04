import React from 'react'
import Casee from './Casee'
import Dummy from './Dummy'
export default function Cases({cases}) {
    const tot = cases.length;
    
    return (
        
        <div>
        <h1>COVID 19</h1>
        <h2> Cases for total of {tot} Countries</h2>
        {
            cases.map(
                (dummy,i) => <Dummy key ={i}  dummy={dummy}/>
            )
        }
        </div>
       
    )
}
