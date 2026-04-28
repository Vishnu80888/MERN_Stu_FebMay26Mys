 import {React} from "react";
//  props basics
function WelcomeCard(props){
    return(
        <div className="card">
            <h2>Hello,{Props.name}</h2>
            <p>Role: {props.role}</p>
        </div>
    )
}
//Parent component
export function PropBasics() {
    return(
        <>
        <WelcomeCard name= "vishnu" role="react-developer"/>
        <WelcomeCard name= "Developer" role="UI/UX developer"/>
        </>
    )

}