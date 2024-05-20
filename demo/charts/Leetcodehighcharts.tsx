// import React,{ useRef, useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const SemiDoughnutChart = () => {
  // const divRef = useRef(null);
  // const [width, setWidth] = useState(0);
  // const [height, setHeight] = useState(0);

  // useEffect(() => {
  //   if (divRef.current) {
  //     setWidth((divRef.current as HTMLElement).clientWidth);
  //     setHeight((divRef.current as HTMLElement).clientHeight);
  //   }
  // }, []);

  const data = [
    { label: "Easy", solved: 244, total: 794 },
    { label: "Medium", solved: 500, total: 1655 },
    { label: "Hard", solved: 100, total: 702 },
  ];

  const opacityBackgroundColor = [
    "rgba(28, 186, 186, 0.4)",
    "rgba(255, 206, 86, 0.4)",
    "rgba(255, 99, 132, 0.4)",
  ];

  const backgroundColor = [
    "rgb(28, 186, 186)",
    "rgb(255, 206, 86)",
    "rgb(255, 99, 132)",
  ];

  const options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
      spacing: [0, 0, 0, 0],
      width: 198,
      height: 198,
    },
    title: {
      text: "",
    },
    credits: {
      enabled: false, // Hide the credits
    },
    tooltip: {
      enabled: false, // Disable default tooltip
    },
    plotOptions: {
      pie: {
        innerSize: "90%",
        startAngle: -135,
        endAngle: 135,
        borderWidth: 0,
        borderColor: "transparent",
        borderRadius: 10,
        center: ["50%", "50%"],
        dataLabels: {
          enabled: false, // Hide the data labels
        },
        point: {
          events: {
            mouseOver: function () {
              // console.log('Mouse Over');
            },
            mouseOut: function () {
              // console.log('Mouse Out');
            },
          },
        },
        states: {
          hover: {
            enabled: true,
            halo: null,
            brightness: 0,
          },
        },
      },
    },
    series: [
      {
        name: "Solved vs Unsolved",
        data: data.flatMap((item, index) => [
          {
            name: `${item.label} Solved`,
            y: item.solved,
            color: backgroundColor[index],
            borderColor: "transparent",
          },
          {
            name: `${item.label} Unsolved`,
            y: item.total - item.solved,
            color: opacityBackgroundColor[index],
            borderColor: "transparent",
          },
        ]),
        size: "100%",
        innerSize: "90%",
        showInLegend: false,
      },
    ],
  };
  //   const handleLegendHover = (index: number) => {
  //     console.log(`Hovered over ${data[index].label}`);
  //   };

  //   const handleLegendClick = (index: number) => {
  //     console.log(`Clicked on ${data[index].label}`);
  //   };
  //     console.log(width, height);
  //ref={divRef}
  return (
    <>
      <div className="flex w-fit  gap-3 p-4 rounded-lg ">
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "200px",
            height: "100%",
            maxHeight: "200px",
          }}
        >
          <div className="center-items absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Your text here
          </div>
          
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>

        <div className="text-xs flex flex-col gap-3">
          {data.map((item, index) => (
            <div
              className={`w-full flex gap-1 text-center flex-col cursor-pointer border-2 xs:border dark:border-transparent dark:bg-transparentWhite border-transparentWhite px-5 py-1 rounded font-Gist`}
              key={index}
              //   onMouseEnter={() => handleLegendHover(index)}
              //   onMouseLeave={() => console.log("Mouse Leave")}
              //   onClick={() => handleLegendClick(index)}
            >
              <span
                style={{
                  color: backgroundColor[index],
                }}
              >
                {item.label}
              </span>
              <span className=" text-textPrimary no-wrap">
                {item.solved} / {item.total}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SemiDoughnutChart;
