import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import "../styles/Footer.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Link, useLocation} from "react-router-dom"

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
          {/* html uses href. jsx is to=. */}
            <Link to="https://www.google.com">
              <InstagramIcon />
            </Link>
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
            <LinkedInIcon />
        </div>
        <p>&copy; 2024 dzheng992.com</p>
    </div>
  )
}

export default Footer