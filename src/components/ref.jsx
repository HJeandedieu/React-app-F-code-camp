import {useRef} from "react"

const Focus = () => {
    const inputRef = useRef(null);
    
    const handleFocus = ()=>{
        if(inputRef.current) {
            inputRef.current.focus();
        }
    };
    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Enter text" />
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    )
}

export default Focus;