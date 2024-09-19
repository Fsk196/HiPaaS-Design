import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";

const SecondContainer = () => {
  const [surveyChart, setSurveyChart] = useState({
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      stackType: "100%",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["Category 1", "Category 2", "Category 3"],
    },
    yaxis: {
      title: {
        text: "Percentage",
      },
      max: 100,
    },
    series: [
      {
        name: "Series 1",
        data: [60, 75, 80],
        color: "#1F316F",
      },
      {
        name: "Series 2",
        data: [40, 25, 20],
        color: "#5BBCFF",
      },
    ],
  });

  useEffect(() => {
    const newChart = new ApexCharts(
      document.getElementById("survey-chart"),
      surveyChart
    );
    newChart.render();

    return () => {
      newChart.destroy();
    };
  }, [surveyChart]);

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
        "210",
        "220",
        "230",
        "240",
        "250",
        "260",
        "270",
        "280",
        "290",
        "300",
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
          90, 105, 120, 130, 140, 125, 118, 112, 130, 142, 158, 155, 150,
        ],
        color: "#1F316F",
        strokeWidth: 3,
      },
      {
        name: "Series 2",
        data: [
          11, 32, 45, 32, 34, 52, 41, 34, 86, 97, 76, 60, 44, 58, 72, 84, 93,
          110, 95, 115, 121, 130, 117, 123, 115, 125, 138, 148, 152, 135,
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
        show: false, // Removed extra comments for cleanliness
      },
    },
    plotOptions: {
      bar: {
        horizontal: true, // Horizontal bar chart
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
          fontSize: "14px", // Unified font size for labels
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "14px", // Same font size for y-axis labels
        },
      },
    },
    fill: {
      opacity: 1, // Full opacity for the bars
    },
    legend: {
      position: "top", // Legend placed on top
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => parseFloat(val.toFixed(2)), // Round to 2 decimal places
      style: {
        colors: ["#fff"],
      },
    },
    tooltip: {
      y: {
        formatter: (val) => parseFloat(val.toFixed(2)), // Round in tooltips too
      },
    },
    colors: ["#1F316F", "#03AED2"], // Customized bar colors
  };

  const barChartSeries = [
    {
      name: "Excellent",
      data: [30, 32, 31, 29, 35, 36, 30, 31, 34, 33, 30], // Cleaned up data to match category length
    },
    {
      name: "Good",
      data: [30, 28, 29, 31, 30, 29, 32, 31, 30, 29, 32], // Matching data with categories
    },
  ];

  return (
    <div className="container">
      <div className="container-leftside">
        <div className="container-topleft">
          {/* <TopLeft title="No. Patients" value="85" /> */}
          <div className="topleft">
            <h2 className="topleft-heading">No. Patients</h2>
            <p className="topleft-value">131</p>
          </div>
          {/* <TopLeft title="Instrumental Activities of Daily Living" /> */}
          <div className="topleft">
            <h2 className="topleft-heading">Geriatric Depression Scale</h2>
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
          <h2 className="right-top-heading">Average progress by Age</h2>
          <div className="chart" id="chart"></div>
        </div>
        {/* <BottomRight /> */}
        <div className="right-bottom-container">
          <h2 className="right-bottom-container-heading">
            Survey progress Progress by Age
          </h2>
          <div className="right-bottom">
            <div id="survey-chart"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondContainer;
