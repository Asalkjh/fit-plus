
import styled from "./textarea.module.css";

function Textarea(props){
    return(
        <div>
            <div className= {styled.textarea}>
                <label >{props.title}</label>
                <textarea name={props.name} onChange={props.handle}></textarea>
            </div>
        </div>
    )
}

export default Textarea;