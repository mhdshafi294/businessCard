import React from "react"

export default function Info(){
    return(
        <div className="info">
            <img src = "./../images/photo_2023-02-24_23-01-59.jpg" />
            <h2>Shafik AlNahhas</h2>
            <h6>Frontend Developer</h6>
            <p>shafikalnahhas.website</p>
            <div className="buttons">
                <a href="https://www.linkedin.com/in/mhd-shafik-alnahhas-563397a2/">
                    <button className="mail"><img src = "./../images/Mail.png" /> <div>Mail</div></button>
                </a>
                <a href="https://www.instagram.com/shafik.nh/">
                    <button className="linked"> <img src = "./../images/linkedin.png" /> LinkedIn</button>
                </a>
            </div>
            
        </div>
    )
}