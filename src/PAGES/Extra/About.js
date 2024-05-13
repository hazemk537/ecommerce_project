import React from "react";
import "./Aboutus.css";
import Navbar from '../../COMPONENTS/Navbar/Navbar'

import Mohamed_Zaki from "../../ASSETS/Images/Mohamed_Zaki.jpg";
import HazemElshahawy from "../../ASSETS/Images/Mohamed_Zaki.jpg";
import GithubIcon from "../../ASSETS/Images/github .svg";

function About() {
    const handleGithubClick = (githubUrl) => {
        window.open(githubUrl, "_blank"); 
    };

    return (
        <div>
            <div><Navbar reloadnavbar={false}/></div>
        <div className="team" id="team">
            <h2 className="main-title">Team Members</h2>
            <div className="container">
                
                {/* Member 1 */}
                <div className="box">
                    <div className="data">
                        {/* <img src={Mohamed_Zaki} alt=""/> */}
                    <img  alt=""/>

                    </div>
                    <div className="info">
                        
                        <h3>Mohamed Zaki</h3>
                        
                        <p>Front-End</p>
                        <div className="social">
                            {/* Use the SVG icon instead of <i> tag */}
                            <a href="https://github.com/mohamedz133" 
                            target="_blank" onClick={() => handleGithubClick("https://github.com/mohamedz133")}>
                                <img  className="github" src={GithubIcon} alt="GitHub Icon" />
                            </a>
                        </div>
                    </div>
                    
                </div>
                
                {/* Member 2 */}
                <div className="box">
                    <div className="data">
                        <img  alt=""/>
                        
                    </div>
                    <div className="info">
                        <h3>Hazem Elshahawy</h3>
                        <p>Front-End</p>
                        <div className="social">
                            {/* Use the SVG icon instead of <i> tag */}
                            <a href="https://github.com/hazemk537?tab=repositories" 
                            target="_blank" onClick={() => handleGithubClick("https://github.com/hazemk537?tab=repositories")}>
                                <img  className="github" src={GithubIcon} alt="GitHub Icon" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Member 3 */}
                <div className="box">
                    <div className="data">
                        <img  alt=""/>
                        
                    </div>
                    <div className="info">
                        <h3>Mahmoud Elsharkawy</h3>
                        <p>Front-End</p>
                        <div className="social">
                            {/* Use the SVG icon instead of <i> tag */}
                            <a href="" 
                            target="_blank" onClick={() => handleGithubClick("")}>
                                <img  className="github" src={GithubIcon} alt="GitHub Icon" />
                            </a>
                        </div>
                    </div>
                </div>


                {/* Member 4 */}
                <div className="box">
                    <div className="data">
                        <img  alt=""/>
                        
                    </div>
                    <div className="info">
                        <h3>Ahmed Elshafey</h3>
                        <p>Back-End</p>
                        <div className="social">
                            {/* Use the SVG icon instead of <i> tag */}
                            <a href="" 
                            target="_blank" onClick={() => handleGithubClick("")}>
                                <img  className="github" src={GithubIcon} alt="GitHub Icon" />
                            </a>
                        </div>
                    </div>
                </div>




                {/* Member 5 */}
                <div className="box">
                    <div className="data">
                        <img   alt=""/>
                        
                    </div>
                    <div className="info">
                        <h3>Youssef Shoaib</h3>
                        <p>Back-End</p>
                        <div className="social">
                            {/* Use the SVG icon instead of <i> tag */}
                            <a href="" 
                            target="_blank" onClick={() => handleGithubClick("")}>
                                <img  className="github" src={GithubIcon} alt="GitHub Icon" />
                            </a>
                        </div>
                    </div>
                </div>



                {/* Member 6 */}
                <div className="box">
                    <div className="data">
                        <img  alt=""/>
                        
                    </div>
                    <div className="info">
                        <h3>Ahmed Ashraf</h3>
                        <p>Back-End</p>
                        <div className="social">
                            {/* Use the SVG icon instead of <i> tag */}
                            <a href="https://github.com/ahmed1selem" 
                            target="_blank" onClick={() => handleGithubClick("https://github.com/ahmed1selem")}>
                                <img  className="github" src={GithubIcon} alt="GitHub Icon" />
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    );
}

export default About;
