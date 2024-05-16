import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineChart extends Component {
   constructor(props) {
      super(props);

      this.state = {
         series: [
            {
               name: "Earning",
               type: "column",
               data: [
                  440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160
               ]
            },
            {
               name: "Refunds",
               type: "line",
               data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
            },
            {
               name: " Orders",
               type: "line",
               data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
            }
         ],
         options: {
            chart: {
               toolbar: {
                  show: false,
                  offsetX: 0,
                  offsetY: 0
               },
               height: 350,
               type: "line"
            },
            stroke: {
               width: [0, 4]
            },
            dataLabels: {
               enabled: true,
               enabledOnSeries: [1]
            },

            labels: [
               "01 Jan 2001",
               "02 Jan 2001",
               "03 Jan 2001",
               "04 Jan 2001",
               "05 Jan 2001",
               "06 Jan 2001",
               "07 Jan 2001",
               "08 Jan 2001",
               "09 Jan 2001",
               "10 Jan 2001",
               "11 Jan 2001",
               "12 Jan 2001"
            ],
            xaxis: {
               type: "datetime"
            },
            fill: {
               colors: ["#6EABCE"],
               width: "10px"
            },
            chart: {
               width: "100%"
            }
         }
      };
   }

   render() {
      return (
         <div className="chartLine">
            <div className="row">
               <div className="mixed-chart">
                  <Chart
                     options={this.state.options}
                     series={this.state.series}
                     type="line"
                     height={350}
                  />
               </div>
            </div>
         </div>
      );
   }
}

export default LineChart;
