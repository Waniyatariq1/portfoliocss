import Image from "next/image";
import "../style/hero.css";
function Hero(){
    return(
        <div className="header-container">
            <div className="header-boxes-con">
                {/* left */}
                  <div>
                  <Image
                   src= '/banner.jpeg'
                  width={200}
                  height={200}
                  className="header-image"

                   alt="profile"/>
                  </div>
                {/* right */}
                 <div className="hero-right-div">
                    <h1 className="title-hero">I am Saima Riaz
                        Front-end Developer </h1>
                        <p className="des-hero">
Hi Iam SAima Riaz a passionate and detail-oriented front-end developer with a strong focus on crafting exceptional user experiences. With 1 year of experience in the industry I have honed my skills in designing and developing responsive scalable and maintainable web applications.

*My Expertise:*
- Proficient in HTML5 CSS3 JavaScript and front-end frameworks like React Angular and Vue.js
- Experienced in responsive web design mobile-first development and cross-browser compatibility
- Skilled in UI/UX design principles wireframing and prototyping
- Familiarity with state management libraries like Redux and MobX
- Experience with modern front-end build tools like Webpack Rollup and Gulp
- Strong understanding of web performance optimization techniques and accessibility guidelines

*My Passion:*
I am passionate about staying up-to-date with the latest front-end trends best practices and technologies. I believe in writing clean modular and well-documented code thats easy to maintain and scale. I am excited about the opportunity to collaborate with like-minded individuals and contribute to innovative projects that make a positive impact.
</p>
                         <button className="hero-btn">HIRE ME</button>
                 </div>
            </div>
        </div>
    )}
export default Hero