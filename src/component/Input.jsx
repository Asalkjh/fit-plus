
import styled from "./input.module.css";


function Input (props){
    
    return(
        <div>
            <div className={styled.input}>
                <label >{props.title} </label>
                <input name={props.name}  onChange={props.handle}  type="text" />
            </div>



        </div>




    )
}

export default Input;