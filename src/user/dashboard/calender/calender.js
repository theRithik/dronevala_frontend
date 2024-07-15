import dayjs from "dayjs";
import React from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './calender.css'


const localizer = dayjsLocalizer(dayjs)
const UserCalender =()=>{
    
    return(
        <>
      
        <div className="homesection">
          <div className="cal-cn">
<Calendar
 localizer={localizer}
style={{width:'100%',height:500}}
/>
          </div>
          </div>
          

        </>
    )

}
export default UserCalender