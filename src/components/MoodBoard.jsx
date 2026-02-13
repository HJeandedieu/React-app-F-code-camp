// export const MoodBoardItem = ({color, image,description})=>{
//   return (
//     <div className="mood-board-item" 
//     style={{backgroundColor:color}}
//     >

//     <img 
//     className="mood-board-image"
//     src={image} 
//     />

//     <h3 className="mood-board-text"> {description}</h3>
//     </div>
//   );
// };

// export function MoodBoard (){
//   return (
//     <div className="mood-board">
//     <h1 className="mood-board-heading">Destination Mood Board</h1>


//     <MoodBoardItem 

//     color=""
//     image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
//     description="Warm-temperature and sunny morning"
//     />
    
//     <MoodBoardItem 
//     color="Yellow"
//     image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
//     description="Breezy Afternoon with cloudy sky."
//     />

//     <MoodBoardItem 
//     color="Orange"
//     image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
//     description="Winter is comming"
//     />
//     </div>
//   );
// }

//Import the useState hook

import {useState} from "react";

function Counter(){
  const initialValue = 0;
  
  //The state variable and setter function
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      {/* Display current state value */}
      <h2>{count}</h2>

      <button onClick = {() => setCount(count - 1)}>Decrement</button>
      <button onClick = {() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Counter;