import React from "react";

function Welcome(props){
    // Child component :resuable UI
    return (
        // props is a type to send the function to parent to child
        <p>Hello, {props.name}</p>
    );
} 

export function FunctionalComponentsBasic(){
    return (
        <div>
            <h2>Functional Components Basics</h2>
            {/* We are passing 'vishnu' as prop to welcom function recives is as{name:"vishnu"} */}
            <Welcome name= "Vishnu"/>
            {/* We are passing 'Developer' as prop to welcom function recives is as{name:"Developer"} */}
            <Welcome name= "Developer"/>

        </div>
    );
}