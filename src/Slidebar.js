
import React from "react";
import "./Slidebarcomp.css";
import { Avatar } from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';
import Groups from "./Groups";
function Slidebar() {

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          className="teu"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH8AvgMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAACAwQBAAUGB//EAB8QAAMAAgMBAQEBAAAAAAAAAAABAgMREhNhIVFBMf/EABsBAAIDAQEBAAAAAAAAAAAAAAMEAQIFAAcG/8QAHxEAAwEBAAMAAwEAAAAAAAAAAAECAxEEEhMhMWEU/9oADAMBAAIRAxEAPwDy0g0jEGjZY2ckMlGShk/CjDQbMhqTkGgTG4RsyMUnSGkBpjUSYpQSkJINJAnQzMgcTVIaQSQKrCcFqQuAaQSkXrUngCgKcY1SMmRTTdo4VOIbGJDZkfEIztvKYNsTGFFGPAMiUUQkY/keVQGqFzhQawofKRpl1rTYF0yd4kJvEtltaEU1smLZM0z86CQIR7OzETDljJYlBplGg0MchkiFQyaBUNwPTWhksnmhksDQ7A9MNCk9hyxehuRiNA2anoXsIMQaFJhpilkcGyNgRNDZaEdCrQ+R0E80NmjN1TBUiqWOhkk2OmzL1kDSKUwtiVQSoRqQTRtMTb+h1Qi39C5yWlHwXE4fUaF1J7Rw+bjToBqZmjijQzFBphqhISYKkOZ0PVDJonTDVAKQ/mymaGKiaWMmgFIdgoTN5CVQSoBSDpDlQSoQmEqFbk7hQqGTRMqDmhPSSHJXNDZskmhk2Z+sA3JZNDZojmvRqsztMwNSWKg+XpKrDViVZgXI50Kt/TnQFM6J4ckfNZMeie5PSzSR5ZPZD4jHTpFSAH3ItoozRzoXs03ickBoezo1MNMxSakBo0M6GSHLFoJAKH82OTO2AthAKQ3LD2aqFm7AUgg1V+hzQlMKWK3JDRQqGzRMmMliWkA2iqKGzRLLGSxG8wVIqmtjFRNDGpilZAWhvIx0ByBdFFmV4RZpI8knoZFsnuD1Vs88xZ59QL6y94zOoFVmlnRD1m9Zd0hLCBdjkaEKxs3rLuk5YQTocz24RdZvAt6geoGx7Lcl4/DtFLxgdYKjQjZCdHaHcDuAGkH+qFpBL/Q1ASgXpHfRGShknTA2YFbko9EZKGydMhpCtQCdmoLYJjegLxI/YfIF0C6AdA/iW9RrlsF4ypRsNYd/w+9u+Hm2f4IVhNWHwvWHwJYPBd2NTfCBYQlh1/C9YDeop7BFqef0ndPh6HUY8RAafIPP6vAHiPQeLwW8Rw3n5BC8fgDxlzxgPGDaHs/J/pH1+HdfhW8ZnWDpB15RMsZqxlPWEsYGpLf6SdYw1Gh6g5zoC8yy2bFcTGtDGLpg3kHh9BbAbOuhVUUeQ1CNqgHYNWKq/pX4hlJ9LGMbOMLGvg1LR9BddPLpFrGvwLggzgfC3sDxX4ZxX4Fs7ZZIr7A8V+AuQ9mbJ9SPpwU4BceDzGjuBo34SvGC8ZU5B4EcGZ8kl6/Duvwpc6M0Vchp8gn4eHcfBzF20gbgaz0bFvSF0wroTVHfM0cTLYmqCtiqK/M0sgLYqqDoVZV5jsMCqFVWmFYmivoHXD7eGM2TTQfM0XJ5OmNdGchTsF2coObHOgXQnmZzLqCjY7kdyFcjVRPqUbG8jdiuR3Ij0OVDdmbF8jHRDkJNhtgVWv6LqxV2d6DWbGXYirBqgSfmaGeiRlNsB/Q9bO4EOODceSKaFtFPAFyDpD+XkklSLqSuoF3INofjyCK5FVP0suSe5+gmhuNen//Z"
          alt=""/>
        <Avatar className="sidebar_avatar" />
        <h2> Abhijeet Singh</h2>
        <h4>abhivirdi05@gmail.com</h4>

        <div className="stats_number">
          <div className="stat">
            <p>who viewed you</p>
            <p className="sidebar_statNumber"> 2543 </p>
          </div>

          <div className="stat">
            <p>views on post</p>
            <p className="sidebar_statNumber">2448</p>
          </div>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p> Recent </p>
        <div className="group_content">
        <Groups Icon={GroupsIcon} content="Software Developer"/>
        <Groups Icon={GroupsIcon} content="Artifical Intelligence"/>
        <Groups Icon={GroupsIcon} content="Backened engineers"/>
        <Groups Icon={GroupsIcon} content="Data Analytics"/>
        </div>
      </div>
    </div>
  );
}
export default Slidebar;
