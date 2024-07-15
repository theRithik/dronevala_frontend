import dayjs from "dayjs";
import React from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './Acalender.css'


const localizer = dayjsLocalizer(dayjs)
const AdminCalender =()=>{
    
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
export default AdminCalender