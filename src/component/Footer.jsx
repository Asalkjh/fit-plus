import { Link } from "react-router-dom";
import styled from "./footer.module.css";
import photo from "../images/-2147483648_-210369.jpg";




function Footer (){
    return(
        
        <div className={styled.footer}>
            <div className={styled.footerRight}>
                <p>در فیت پلاس، باور داریم که سلامت جسمی و ذهنی، حق همه ماست. ما اینجا هستیم تا با محتوای علمی، کاربردی و الهام‌بخش، شما را در مسیر تناسب اندام، تغذیه سالم و سبک زندگی بهتر همراهی کنیم
                </p>
                <p>اولین نفری باشید که از جدیدترین مقالات، برنامه‌های تمرینی و نکات تغذیه‌ای مطلع می‌شوید!
                </p>
                <p>  ما را در صفحات اجتماعی دنبال کنید</p>
                <div className={styled.spanLink}><span>@fitplus :اینستاگرام</span><span>@fitplus :تلگرام</span></div>
 
            </div>
            <div className={styled.footerLeft}>
                <img src={photo} alt="" />
                


            </div>






         </div>
    )
}

export default Footer;