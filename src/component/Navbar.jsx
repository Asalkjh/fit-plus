
import styled from "./navbar.module.css";
import { Link } from "react-router-dom";


function Navbar (){
    return(
<div className={styled.header} >
    
    <ul>
        <li><h3>فیت پلاس</h3></li>
        <Link   to="/"  >
        <li>لیست مقالات</li>
        </Link>
        
        <Link  to="/about"  >
         <li>درباره ما</li>
         </Link>
         
         <Link to="/createArticle" >
         <li>ساخت مقاله</li>
         </Link>
        
    </ul>

</div>

    );
}

export default Navbar;