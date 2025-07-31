
import Navbar from "../component/Navbar";
import Article from "../component/Article";
import styled from "../component/article.module.css";
import { useState,useEffect } from "react";
import axios from "axios";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import Spinner from "./spinner";


function Home(){

    const [article,setArticle]=useState([]);
    const [isLogin,setIsLogin]=useState(false);

    useEffect(()=>{
        setIsLogin(true)
        axios.get("http://localhost:8000/articles").then((result)=>{
            
            setArticle(result.data)
            setIsLogin(false)
        })
        .catch((error)=>{
            console.log(error);
            setIsLogin(true)
        });
    

    },[])

  

    return(
        <div  className="mainHome">
            <Navbar/>
            <div className="container">
            <h3>مقالات جدید</h3>
            </div>
          {isLogin ? (<Spinner/>):(  <div className="container">
            <div className={styled.articles}>
                {article.map((article)=>{
                   return (<Link to= {`/article/${article.id}`}> <Article key ={article.id}    article ={article} />
                   </Link>
                   )
                   
                })}
                
            </div>
            </div>)}
            <Footer/>
            
            
            


        </div>


    );
}

export default Home;