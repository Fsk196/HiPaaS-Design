import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";

const Container = () => {
  const tableData = [
    {
      id: 1,
      description: "Analytically oriented, and general office work score",
      noPatients: 72,
      percentage: "82.24%",
    },
    {
      id: 2,
      description: "Bathes self",
      noPatients: 69,
      percentage: "80.81%",
    },
    {
      id: 3,
      description: "Independent with mobility",
      noPatients: 75,
      percentage: "85.33%",
    },
    {
      id: 4,
      description: "Assists with daily routines",
      noPatients: 68,
      percentage: "79.10%",
    },
    {
      id: 5,
      description: "Engages in social interaction",
      noPatients: 73,
      percentage: "81.65%",
    },
    {
      id: 6,
      description: "Prepares meals independently",
      noPatients: 65,
      percentage: "78.00%",
    },
    {
      id: 7,
      description: "Able to follow instructions",
      noPatients: 80,
      percentage: "88.50%",
    },
    {
      id: 8,
      description: "Capable of managing finances",
      noPatients: 67,
      percentage: "76.12%",
    },
    {
      id: 9,
      description: "Communicates effectively",
      noPatients: 74,
      percentage: "84.32%",
    },
    {
      id: 10,
      description: "Participates in group activities",
      noPatients: 70,
      percentage: "82.15%",
    },
    {
      id: 11,
      description: "Manages personal hygiene",
      noPatients: 66,
      percentage: "78.56%",
    },
    {
      id: 12,
      description: "Displays problem-solving skills",
      noPatients: 78,
      percentage: "86.79%",
    },
    {
      id: 13,
      description: "Demonstrates critical thinking",
      noPatients: 71,
      percentage: "80.45%",
    },
    {
      id: 14,
      description: "Follows health and safety protocols",
      noPatients: 60,
      percentage: "72.50%",
    },
    {
      id: 15,
      description: "Shows emotional stability",
      noPatients: 77,
      percentage: "83.20%",
    },
    {
      id: 16,
      description: "Maintains personal boundaries",
      noPatients: 63,
      percentage: "76.40%",
    },
    {
      id: 17,
      description: "Performs well under supervision",
      noPatients: 80,
      percentage: "90.12%",
    },
    {
      id: 18,
      description: "Exhibits teamwork",
      noPatients: 69,
      percentage: "82.60%",
    },
    {
      id: 19,
      description: "Demonstrates initiative",
      noPatients: 68,
      percentage: "81.00%",
    },
    {
      id: 20,
      description: "Shows attention to detail",
      noPatients: 64,
      percentage: "77.89%",
    },
  ];
  const [options, setOptions] = useState({
    chart: {
      type: "line",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        "10",
        "20",
        "30",
        "40",
        "50",
        "60",
        "70",
        "80",
        "90",
        "100",
        "110",
        "120",
        "130",
        "140",
        "150",
        "160",
        "170",
        "180",
        "190",
        "200",
      ],
    },
    yaxis: {},
    legend: {
      position: "bottom",
    },
    series: [
      {
        name: "Series 1",
        data: [
          31, 40, 28, 51, 42, 109, 100, 36, 75, 45, 99, 34, 50, 65, 80, 95, 110,
          90, 105, 120,
        ],
        color: "#1F316F",
        strokeWidth: 3,
      },
      {
        name: "Series 2",
        data: [
          11, 32, 45, 32, 34, 52, 41, 34, 86, 97, 76, 60, 44, 58, 72, 84, 93,
          110, 95, 115,
        ],
        color: "#5BBCFF",
        strokeWidth: 3,
      },
    ],
  });

  useEffect(() => {
    const chart = new ApexCharts(document.getElementById("chart"), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [options]);

  const barChart = {
    chart: {
      type: "bar",
      stacked: true,
      stackType: "100%",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: [
        "Ability to handle pressure",
        "Ability to adapt",
        "Strategic thinking",
        "Decision making",
        "Team leadership",
        "Problem solving",
        "Project management",
        "Communication skills",
        "Customer focus",
        "Creativity",
        "Innovation",
      ],
      labels: {
        style: {
          fontSize: "14px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "14px",
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val}%`,
      style: {
        colors: ["#fff"],
      },
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}%`,
      },
    },
    colors: ["#A0DEFF", "#5BBCFF", "#03AED2", "#1F316F"],
  };

  const barChartSeries = [
    {
      name: "Excellent",
      data: [
        30, 32, 31, 29, 35, 36, 30, 31, 34, 33, 30, 32, 31, 33, 34, 35, 30, 31,
        32, 33,
      ],
    },
    {
      name: "Good",
      data: [
        30, 28, 29, 31, 30, 29, 32, 31, 30, 29, 32, 31, 29, 28, 27, 26, 30, 29,
        28, 27,
      ],
    },
    {
      name: "Fair",
      data: [
        20, 20, 21, 20, 19, 20, 21, 21, 20, 21, 22, 21, 22, 21, 22, 21, 20, 21,
        22, 21,
      ],
    },
    {
      name: "Poor",
      data: [
        20, 20, 19, 20, 16, 15, 17, 17, 16, 17, 16, 16, 18, 18, 18, 18, 20, 19,
        18, 19,
      ],
    },
  ];
  return (
    <div className="container">
      {/* <Leftside /> */}
      <div className="container-leftside">
        <div className="container-topleft">
          {/* <TopLeft title="No. Patients" value="85" /> */}
          <div className="topleft">
            <h2 className="topleft-heading">No. Patients</h2>
            <p className="topleft-value">85</p>
          </div>
          {/* <TopLeft title="Instrumental Activities of Daily Living" /> */}
          <div className="topleft">
            <h2 className="topleft-heading">
              Instrumental Activities of Daily Living
            </h2>
          </div>
          {/* <TopLeft title="Survey records" value="98" /> */}
          <div className="topleft">
            <h2 className="topleft-heading">Survey records</h2>
            <p className="topleft-value">98</p>
          </div>
        </div>
        {/* <BottomLeft /> */}
        <div className="container-bottomleft">
          <div className="containerbottom">
            <h2 className="cont-bottom-heading">Survey results</h2>

            <div className="cont-bottom-graph">
              <div className="cont-bottom-chart">
                <Chart
                  className="chart"
                  options={barChart}
                  series={barChartSeries}
                  type="bar"
                  height={700}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <RightSide /> */}
      <div className="container-topright">
        {/* <TopRight /> */}
        <div className="right-top">
          <h2 className="right-top-heading">Survey value by Age</h2>
          <div className="chart" id="chart"></div>
        </div>
        {/* <BottomRight /> */}
        <div className="right-bottom-container">
          <div className="right-bottom">
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Value</th>
                    <th>Survey Response Description</th>
                    <th>No. of Patients</th>
                    <th>%</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.id}</td>
                      <td>{data.description}</td>
                      <td>{data.noPatients}</td>
                      <td>{data.percentage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
