import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@mui/icons-material/School"
import WorkIcon from "@mui/icons-material/Work"
import "../styles/Experience.css"

function Experience() {
  return (
    <div className="experience"> 
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2333-2322"
          iconStyle={{background: "#3e497a", color:"#fff"}}
          icon={<SchoolIcon />}>
            <h3 className="vertical-timeline-element-title">My Random High School, Location</h3>
            <p>High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2333-2322"
          iconStyle={{background: "#3e497a", color:"#fff"}}
          icon={<SchoolIcon />}>
            <h3 className="vertical-timeline-element-title">My Random High School, Location</h3>
            <p>High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2333-2322"
          iconStyle={{background: "#fcba03", color:"#fff"}}
          icon={<WorkIcon />}>
            <h3 className="vertical-timeline-element-title">Work Random High School, Location</h3>
            <p>High School Diploma</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience