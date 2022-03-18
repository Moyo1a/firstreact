import { render } from '@testing-library/react'
import React from 'react'


// function Greet (){
//     return
//     <h1>Hello Maykay</h1>
// }
const Greet = props => { 
    return(
        <div>
         {props.name} {props.heroName}
        {/* {props.children} */}
        </div>
    )
}
 
export default Greet;