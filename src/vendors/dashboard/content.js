import React from "react";
import './content.css'

import { data1, data2, data3, data4 } from "./graphdata";
import { Area } from "@ant-design/plots";



const DashContent =()=>{

     const config={
      data:data1,
      xField: 'date',
      yField: 'students',
      isStack:false,
      seriesField:'state',
      style: {
        fill: 'linear-gradient(-90deg, white 0%, darkgreen 100%)',
      },
      yAxis: {
        grid: {
          line: {
            style: {
              stroke: "#e9ecef",
            },
          },
        },
      },
      smooth:true
     }
        const config2={
          data:data2,
          appendPadding: [1, 0, 0, 0],
    padding: 0,
    syncViewPadding: true,
    autoFit: true,
    tooltip: false,
    animation: false,
    xField: "date",
    yField: "students",
    xAxis: false,
    yAxis: {
      tickCount: 12,
      label: {
        style: {
          fill: "transparent",
        },
      },
      grid: {
        line: {
          style: {
            stroke: "transparent",
          },
        },
      },
    },
    smooth: true,
    areaStyle: () => {
      return {
        fill: `l(270) 0:rgb(255, 242, 232) 0.2:rgb(255, 242, 232) 1:rgb(250, 84, 28)`,
      };
    },
    line: {
      color: 'rgb(250, 84, 28)',
    },
        }

const config3={
   data:data3,
          appendPadding: [1, 0, 0, 0],
    padding: 0,
    syncViewPadding: true,
    autoFit: true,
    tooltip: false,
    animation: false,
    xField: "date",
    yField: "students",
    xAxis: false,
    yAxis: {
      tickCount: 12,
      label: {
        style: {
          fill: "transparent",
        },
      },
      grid: {
        line: {
          style: {
            stroke: "transparent",
          },
        },
      },
    },
    smooth: true,
    areaStyle: () => {
      return {
        fill: `l(270) 0:rgb(255, 242, 232) 0.2:rgb(246, 255, 237) 1:rgb(82, 196, 26)`,
      };
    },
    line: {
      color: 'rgb(82, 196, 26)',
    },
}

const config4={
  data:data4,
   appendPadding: [1, 0, 0, 0],
    padding: 0,
    syncViewPadding: true,
    autoFit: true,
    tooltip: false,
    animation: false,
    xField: "date",
    yField: "students",
    xAxis: false,
    yAxis: {
      tickCount: 12,
      label: {
        style: {
          fill: "transparent",
        },
      },
      grid: {
        line: {
          style: {
            stroke: "transparent",
          },
        },
      },
    },
    smooth: true,
    areaStyle: () => {
      return {
        fill: `l(270) 0:rgb(255, 242, 232) 0.2:rgb(230, 244, 255) 1:#1677ff`,
      };
    },
    line: {
      color: '#1677ff',
    },
}




    return(
        <>
         
        <div className="homesection">
          <div>
          <div className="row">
            <div className="col-md-4" style={{padding:20}}>
<div className="d-mainbx">
<div style={{display:'flex',gap:20,alignItems:'center'}}>
    <div className="d-icon-blu">
<i class="bi bi-bank"></i>
</div>
<h6 className="d-bx-h6">Total Amount</h6>
</div>
<div className="d-mainbx-num">
<i class="bi bi-currency-rupee" style={{color:'grey'}}></i>
<h6 className="d-dx-lph6">60000</h6>

</div>
<span className="spredshadow" style={{    boxShadow: '-18px 20px 50px 6px #006aff'}}></span>
<Area {...config4} className="d-bar-graph-eff" style={{padding:20,width:150,height:100}}/>
</div>

          </div>
          <div className="col-md-4" style={{padding:20}}>
<div className="d-mainbx">
<div style={{display:'flex',gap:20,alignItems:'center'}}>
    <div className="d-icon-blu" style={{background:'rgb(246, 255, 237)'}}>
    <i class="bi bi-buildings" style={{color:'rgb(82, 196, 26)'}}></i>
</div>
<h6 className="d-bx-h6">Academy</h6>
</div>
<div className="d-mainbx-num">
<i class="bi bi-123" style={{color:'grey'}}></i>
<h6 className="d-dx-lph6">3000</h6>

</div>
<span className="spredshadow"  style={{    boxShadow: '-18px 20px 50px 6px green'}}></span>
<Area {...config3} className="d-bar-graph-eff" style={{padding:20,width:150,height:100}}/>
</div>
            </div>
            
            <div className="col-md-4" style={{padding:20}}>
<div className="d-mainbx">
<div style={{display:'flex',gap:20,alignItems:'center'}}>
    <div className="d-icon-blu" style={{background:'rgb(255, 242, 232)'}}>
    <i class="bi bi-bookmark-x" style={{color:'rgb(250, 84, 28)'}}></i>
</div>
<h6 className="d-bx-h6">Services</h6>
</div>
<div className="d-mainbx-num">
<i class="bi bi-activity" style={{color:'grey'}}></i>
<h6 className="d-dx-lph6">1000</h6>

</div>
<span className="spredshadow" style={{    boxShadow: '-18px 20px 50px 6px red'}}></span>
<Area {...config2} className="d-bar-graph-eff" style={{padding:20,width:150,height:100}}/>
</div>

            </div>

          </div>

          <div style={{paddingBottom:100}}>
            <div className="d-card-f">
              <div className="card-header d-cardH">
              <i class="bi bi-tags"></i>
              <h6 style={{margin:0}}>Registers</h6>
              </div>
              <Area {...config} className="area-graph" style={{padding:20,}}/>
              </div>
          </div>
          </div>
        </div>
     
        </>
    )
}
export default DashContent