import React, { Component } from "react";
import Chart from "react-apexcharts";
import Visitstyle from "./Visitstyle";

class LineChart extends Component {
   constructor(props) {
      super(props);

      this.state = {
         series: [44, 55, 41, 17, 15],
         options: {
            chart: {
               type: "donut"
            },
            fill: {
               colors: ["#5EA3CB", "#6ADA7D", "#F7B84B", "#FA896B", "#58CAEA"]
            },
            stroke: {
               width: 0
            },
            tooltip: {
               enabled: true,
               background: "#f3f3f3",
               color: "orange"
            },
            legend: {
               position: "bottom",
               markers: {
                  fillColors: [
                     "#5EA3CB",
                     "#6ADA7D",
                     "#F7B84B",
                     "#FA896B",
                     "#58CAEA"
                  ]
               }
            },
            labels: ["Direct", "Social", "Email", "Other", "Referrals"],
            responsive: [
               {
                  breakpoint: 480,
                  options: {
                     legend: {
                        position: "bottom"
                     }
                  }
               }
            ]
         }
      };
   }

   render() {
      return (
         <Visitstyle>
            <div className="chartLine">
               <div className="row">
                  <div className="mixed-chart">
                     <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="donut"
                     />
                  </div>
               </div>
            </div>
         </Visitstyle>
      );
   }
}

export default LineChart;
