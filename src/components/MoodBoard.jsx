export const MoodBoardItem = ({color, image,description})=>{
  return (
    <div className="mood-board-item" 
    style={{backgroundColor:color}}
    >

    <img 
    className="mood-board-image"
    src={image} 
    />

    <h3 className="mood-board-text"> {description}</h3>
    </div>
  );
};

export function MoodBoard (){
  return (
    <div className="mood-board">
    <h1 className="mood-board-heading">Destination Mood Board</h1>


    <MoodBoardItem 

    color=""
    image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
    description="Warm-temperature and sunny morning"
    />
    
    <MoodBoardItem 
    color="Yellow"
    image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
    description="Breezy Afternoon with cloudy sky."
    />

    <MoodBoardItem 
    color="Orange"
    image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
    description="Winter is comming"
    />
    </div>
  );
}