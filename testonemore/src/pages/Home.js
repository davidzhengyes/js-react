import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram"
import GithubIcon from "@mui/icons-material/GitHub"
import EmailIcon from "@mui/icons-material/Email"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import "../styles/Home.css"

function Home() {
  return (
    <div className="home"> 
      <div className="about">
        <h2> Hi my name is *Rawrs* </h2>
        <div className="prompt"> 
          <p>I am a furry</p> 
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>A,B,C,D,eez,nuts</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>what ees backend ?</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>portugal, mexico, small</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home