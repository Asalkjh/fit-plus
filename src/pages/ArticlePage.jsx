import { useParams } from "react-router-dom";
import styled from "../component/articlePage.module.css"
import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";
import Footer from "../component/Footer";
import Spinner from "./spinner";

function ArticlePage (){
    const[article,setArtcle]=useState({});
    const params=useParams()
    const[isloging,setIsLoging]=useState(false)
    useEffect(()=>{
        setIsLoging(true)
        axios.get(`http://localhost:8000/articles/${params.id}`).then(result=>{
            setArtcle(result.data)
            setIsLoging(false)

        }).catch(error=>{
            console.log(error)
            setIsLoging(true)
        })

    },[])




    
    

    return(
        <>
        <Navbar/>
        {isloging ? <Spinner/>:(   <div>
        
        <div className={styled.articlePagewrapper}>
            <div className="container">
                <h1>{article.title} </h1>
                <div className={styled.articlePageSec}>
                <span>تاریخ : {article.date}</span> 
                <span> نویسنده :{article.athor} </span>
                <span>مدت زمان خواندن {article.readingTime} دقیقه</span>


                </div>
                
                <div className={styled.articlePageContent}>
                <img src={article.imageUrl} alt="" />
                <p> {article.content} </p>
                </div>
                

                
            </div>


        </div>
        <Footer/>
        </div>)}
      
        </>
    );
}

export default ArticlePage;