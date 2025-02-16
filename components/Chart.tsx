"use client";

import React, { useRef } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Title,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Select } from "antd";

// Register required Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Title,
  Legend
);

const ChartComponent: React.FC = () => {
  const chartRef = useRef(null);

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "salles",
        backgroundColor: "transparent",
        borderColor: "#365CF5",
        data: [80, 120, 110, 100, 130, 150, 115, 145, 140, 130, 160, 210],
        pointBackgroundColor: "transparent",
        pointHoverBackgroundColor: "#365CF5",
        pointBorderColor: "transparent",
        pointHoverBorderColor: "#365CF5",
        pointHoverBorderWidth: 3,
        pointBorderWidth: 5,
        pointRadius: 5,
        pointHoverRadius: 8,
        fill: false,
        tension: 0.4,
      },
      {
        label: "users",
        backgroundColor: "transparent",
        borderColor: "#f2994a",
        data: [180, 110, 140, 135, 100, 90, 145, 115, 100, 110, 115, 150],
        pointBackgroundColor: "transparent",
        pointHoverBackgroundColor: "#f2994a",
        pointBorderColor: "transparent",
        pointHoverBorderColor: "#f2994a",
        pointHoverBorderWidth: 3,
        pointBorderWidth: 5,
        pointRadius: 5,
        pointHoverRadius: 8,
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        intersect: false,
        backgroundColor: "#fbfbfb",
        titleColor: "#8F92A1",
        bodyColor: "#272727",
        titleFont: {
          size: 16,
          family: "Plus Jakarta Sans",
          weight: 400,
        },
        bodyFont: {
          family: "Plus Jakarta Sans",
          size: 16,
        },
        multiKeyBackground: "transparent",
        displayColors: false,
        padding: {
          x: 30,
          y: 15,
        },
        borderColor: "rgba(143, 146, 161, .1)",
        borderWidth: 1,
        enabled: true,
      },
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    layout: {
      padding: {
        top: 0,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false,
        },
        ticks: {
          padding: 35,
        },
        max: 350,
        min: 50,
      },
      x: {
        grid: {
          drawBorder: false,
          color: "rgba(143, 146, 161, .1)",
          drawTicks: false,
        },
        ticks: {
          padding: 20,
        },
      },
    },
  };

  return (
    <div className="p-6 px-10 w-[99%] mx-auto">
      <div className="bg-white h-[650px] py-20 rounded-md">
        <div className="mx-20 flex justify-between">
          <ul className="flex flex-wrap items-center mb-8">
            <li className="flex items-center mb-4 mr-6">
              <span className="block w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
              <div>
                <p className="text-sm text-green-500">
                  <span className="text-gray-800 font-medium">نمودار فروش</span>
                  <i className="ml-1 lni lni-arrow-up"></i>
                </p>
              </div>
            </li>

            <li className="flex items-center mb-4 mr-6">
              <span className="block w-4 h-4 bg-orange-500 rounded-full mr-2"></span>
              <div>
                <p className="text-sm text-red-500">
                  <span className="text-gray-800 font-medium">
                    نمودار کاربران
                  </span>
                  <i className="ml-1 lni lni-arrow-down"></i>
                </p>
              </div>
            </li>
          </ul>

          <Select
            defaultValue="امروز"
            style={{ width: 120 }}
            options={[
              { value: "Today", label: "امروز" },
              { value: "Last Month", label: "ماه گذشته" },
              { value: "Last Year", label: "سال گذشته" },
            ]}
          />
        </div>
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartComponent;
