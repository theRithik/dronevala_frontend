import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './calender.css'
import { useQuery } from "@tanstack/react-query";
import { VGetData } from "../../config/vendor/Apiconfig";
import endpoints from "../../config/config";


const localizer = dayjsLocalizer(dayjs)
const VenderCalender =()=>{
  const[eventList,setEventList]=useState('')
const dt ={
  endpoint:endpoints.vcalender,
}
  const {data}=useQuery({
    queryKey:['vcalender'],
    queryFn:()=>VGetData(dt)
  })
  useEffect(()=>{
if(data){
 let dp=[]
    if(data.data.length>0){
     for(let i=0;i<data.data.length;i++){
         let obj={}
         if(data.data[i].bookedDates.length>10){
             var st = data.data[i].bookedDates.split('~')[0].trim().split('/').reverse().join('-')
             var st2 = data.data[i].bookedDates.split('~')[1].trim().split('/').reverse().join('-')
             obj['title']=data.data[i].subCategory +', Client Name: '+data.data[i].userName +', service Person: ' + data.data[i].servicePerson
            obj['allDay']=true
             obj['start'] = new Date(st)
             obj['end']= new Date(st2)        
             dp.push(obj)
         }
         else{
             var st3 = data.data[i].bookedDates.trim().split('/').reverse().join('-')
             obj['title']=data.data[i].subCategory +', Client Name: '+data.data[i].userName +', service Person: ' + data.data[i].servicePerson
             obj['allDay']=true
             obj['start'] = new Date(st3)
             obj['end']= new Date(st3)   
             dp.push(obj)
         }
     }
    }
    if(data.result.length>0){
     for(let i=0;i<data.result.length;i++){
         let obj={}
         if(data.result[i].bookingDates.length>10){
             var st5 = data.result[i].bookingDates.split('~')[0].trim().split('/').reverse().join('-')
             var st6 = data.result[i].bookingDates.split('~')[1].trim().split('/').reverse().join('-')
             obj['title']=data.result[i].productName +', Client Name: '+data.result[i].userName +', order Type: ' + data.result[i].orderType
            obj['allDay']=true
             obj['start'] = new Date(st5)
             obj['end']= new Date(st6)        
             dp.push(obj)
         }
         else{
             var st7 = data.result[i].bookingDates.trim().split('/').reverse().join('-')
             obj['title']=data.result[i].productName +', Client Name: '+data.result[i].userName +', order Type: ' + data.result[i].orderType
             obj['allDay']=true
             obj['start'] = new Date(st7)
             obj['end']= new Date(st7)   
             dp.push(obj)
         }
         setEventList(dp)
     }
    }
}
  },[data])
    
    return(
        <>
      
        <div className="homesection">
          <div className="cal-cn">
<Calendar
 localizer={localizer}
 events={eventList}
 startAccessor="start"
 endAccessor="end"
style={{width:'100%',height:500}}
/>
          </div>
          </div>
          

        </>
    )

}
export default VenderCalender