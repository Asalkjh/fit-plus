import { useRef, useState } from "react";
import Input from "../component/Input";
import Textarea from "../component/textarea.jsx";
import axios from "axios";
import Navbar from "../component/Navbar.jsx";
import styled from "../component/createArticle.module.css";



function CreateArticle (){
const [inputs,setInputs]=useState({
    title:"",
    date:"",
    athor:"",
    readingTime:"",
    imageUel:"",
    contect:""
})


const handleChangeInput =(e)=>{
    setInputs((prevState) => ({ 
        ...prevState ,
    [e.target.name]:e.target.value
    
        
        

}))


}

const handleChangeContect =(e)=>{
    setInputs((prevState) => ({ 
        ...prevState ,
    contect :e.target.value

    }))

}

const handlePostArticle =()=>{
    axios.post("http://localhost:8000/articles",{
            id:"9",
            imageUrl:inputs.imageUrl ,
            title:inputs.title ,
            readingTime:inputs.readingTime ,
            date: inputs.date,
            athor:inputs.athor,
            content:inputs.contect
})
secces()
}

 const massageSec=useRef(null)

const secces =()=>{
    massageSec.current.style.right = "650px"

    setTimeout(()=>{
        massageSec.current.style.right = "-1500px"


    },2000)


    

}



    return(
        <div>
            <Navbar/>
            <div className={styled.createArticle}>
            <div className="container">
            <Input name={"title"}  handle={handleChangeInput}  title={"عنوان"} />
            <Input name={"date"}   handle={handleChangeInput}   title={"تاریخ"} />
            <Input name={"athor"}   handle={handleChangeInput}  title={"نویسنده"} />
             <Input name={"readingTime"}   handle={handleChangeInput}  title={"زمان خواندن"} />
             <Input name={"imageUrl"}  handle={handleChangeInput}  title={"ادرس عکس"} />
             <Textarea name={"contect"}  handle={handleChangeContect} title={"متن"}    />
             <button onClick={handlePostArticle}  >ساخت مقاله</button>
             

             <div className={styled.secces} ref={massageSec}>
                <p>ساخت مقاله با موفقیت انجام شد</p>
             </div>
             




            </div>

            </div>
        </div>







    );
}

export default CreateArticle;