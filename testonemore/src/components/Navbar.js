import React, {useEffect,useState} from 'react'
import {Link, useLocation} from "react-router-dom"
import "../styles/Navbar.css"
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ReorderIcon from "@mui/icons-material/Reorder"

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  // info for what location in the site you are in
  const location = useLocation();

  // whenever location changes, navbar sets to false
  //useEffect function detects [location] change.
  useEffect(() => {
    setExpandNavbar(false)
  }, [location])

  return (
    <div className='navbar' id={expandNavbar?"open":"close"}>  
        <div className="toggleButton">
            <button onClick = {() => {
              setExpandNavbar((prev) => !prev)
              }}
            > 
              <ReorderIcon />           
            </button>
        </div>
        <div className="links">
            {/* could use <a> tag */}
            <Link to="/">Home </Link>
            <Link to="/projects">Projects </Link>
            <Link to="/experience">Experience </Link>
        </div>
    </div>
  )
}

export default Navbar