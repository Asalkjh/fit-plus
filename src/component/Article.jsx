
import styled from "./article.module.css"

function Article (props){
    
    
    return(
        // <div className={styled.articles}>
            <div className={styled.articleWrapper}>
                <img src={props.article.imageUrl} alt="" />
                <h3>{props.article.title}</h3>
                <p>مدت زمان خواندن {props.article.readingTime} دقیقه </p>
                
                
            </div>
             

        // </div>
        

        
    )
}

export default Article;