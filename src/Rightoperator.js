import React from "react";
import './Rightheader.css'; 
import { Avatar } from "@mui/material";
function Rightoperator({avatar,Icon,title}){
    return(
        <>
        <div className="right_opt">
        {Icon && <Icon className="right_icon"/>}
        {avatar && <Avatar className='avatar_right' src={avatar}/>}
        <h3 className="right_title">{title}</h3>
        </div>
        </>
    );

}
export default Rightoperator;