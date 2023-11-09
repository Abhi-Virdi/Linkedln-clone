import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import './App.css'; 
import './Rightheader.css'; 
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Rightoperator from "./Rightoperator";
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header(){
    return(
        <div className="mainheader">

        <div className="left_header">
            <div className="icon_header">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2RYeN56EvozwyyxYGDw4dTu-pbUZyNxnF93zSLUcOlQ&s" alt=""></img></div>

            <div className="search_header">
             <SearchIcon/>
             <input type="text"></input>
            </div>

        </div>

        <div className="right_header">
            <Rightoperator Icon={HomeIcon} title="Home"/>
            <Rightoperator Icon={PeopleAltIcon} title="My network"/>
            <Rightoperator Icon={WorkIcon} title="Jobs"/>
            <Rightoperator Icon={TextsmsIcon} title="Messaging"/>
            <Rightoperator Icon={NotificationsIcon} title="Notifications"/>
            <Rightoperator avatar="https://yt3.ggpht.com/yti/AOXPAcXdkq0hKFoxUoxJMAXaHURv3BYmKsEXw6qOmJCi=s88-c-k-c0x00ffffff-no-rj-mo" title='me'/>


        </div>



        </div>
    )
}
export default Header;