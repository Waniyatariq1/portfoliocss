import "../style/services.css";
import { GiSoundOn } from "react-icons/gi";
import { IoMicOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { TbLibraryPhoto } from "react-icons/tb";
import { RiCodeBoxLine } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
function Services(){
    return(
        <main className="main">
            <div className="ser-container">
                {/* top div */}
                <div className="top-div-ser">
                    <h2 className="title-ser">My Services</h2>
                    <p className="des-ser">I provide these services</p>
                </div>
                {/* bottom div */}
                <div className="boxes-con">
                    <div className="box">
                        <FaLaptopCode className="ser-icon"/>
                        <h3>Web Development</h3>
                        <span>Blogsquo; E-Commerce</span>
                    </div>
                    <div className="box">
                        <GiSoundOn className="ser-icon"/>
                        <h3>UI/UX Design</h3>
                        <span>Mobile Appsquo; Website Design</span>
                    </div>
                    <div className="box">
                        <IoMicOutline className="ser-icon"/>
                        <h3>Sound Design</h3>
                        <span>Voice Oversquo;Beat Making</span>
                    </div>
                    <div className="box">
                        <IoGameControllerOutline className="ser-icon"/>
                        <h3>Game Design</h3>
                        <span>Character Designsquo; Objects</span>
                    </div>
                    <div className="box">
                        <TbLibraryPhoto className="ser-icon"/>
                        <h3>Photography</h3>
                        <span>protaitsquo; Product Photography</span>
                    </div>
                    <div className="box">
                        <RiCodeBoxLine className="ser-icon"/>
                        <h3>Advertising</h3>
                        <span>BroadCastsquo; Digital Advertising</span>
                        <button className="ser-btn">Order Now</button>
                    </div>
                    
                </div>

            </div>
        </main>
    )
}
export default Services