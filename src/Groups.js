import React from "react";
import "./Slidebarcomp.css";

function Groups({Icon,content}){
    return(
    <div className="sidebar_updates">
    {Icon && <Icon className='groupicon'/>}
    <h3 className="content"> {content}</h3>
    </div>
  )
};
export default Groups;