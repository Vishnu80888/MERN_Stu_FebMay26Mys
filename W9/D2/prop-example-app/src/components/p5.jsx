import React,{ useState} from "react";
//State Lifting : moving shared state up to the closest common parent
//We use this :
//Multiple child components need to share the same data
//Props drilling becomes too complex
//child components need to update the same data

// first child component
function NmaeInput1({value,onChange}){
    return(
        <div>
            <label>Input 1:</label>
            <input value={"value"}/>
            onChange = {(e) => onChange(e.target.value)}
            placeholder="Type a name"
        </div>
    );
}

//second child component
function NmaeInput2({value,onChange}){
    return(
        <div>
            <label>Input 2:</label>
            <input value={"value"}/>
            onChange = {(e) => onChange(e.target.value)}
            placeholder="This gets updated"
        </div>
    );
}

//parent components 
function SharedStateParent(){
    const [name,steName] = useState('vishnu');
    return(
        <div>
            <h3>Shared state demo</h3>
            <NmaeInput1 value={name} onChange={steName}/>
            <NmaeInput2 value={name} onChange={steName}/>

            <div>
                <strong>Current Name:</strong>{name || 'Nothing typed yet'}
            </div>
        </div>
    );
}
