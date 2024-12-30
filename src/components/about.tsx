import Image from "next/image";
import "../style/hero.css";
import "../style/about.css";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
function About(){
    return(
        <div className="header-container">
            <div className="header-boxes-con">
                {/* left */}
                  <div>
                  <Image
                  src='/banner.jpeg'
                  alt='profile'
                  width={200}
                  height={200}
                  className="header-image"/>
                   <div className="social-icons">
                   <Link href={""}> <FaYoutube className="s-icon-1"/></Link>
                   <Link href={""}> <FaFacebook className="s-icon-2"/></Link>
                   <Link href={""}> <FaInstagram className="s-icon-3"/></Link>
                   </div>
                  </div>
                {/* right */}
                 <div className="hero-right-div">
                    <h1 className="title-hero">About Us</h1>
                        <p className="des-hero">Hi I am SAima Riaz a passionate and detail-oriented front-end developer with a strong focus on crafting exceptional user experiences. With 1 year of experience in the industry I have honed my skills in designing and developing responsive scalable and maintainable web applications.
                         </p>
                         
                 </div>
            </div>
        </div>
    )
}
export default About