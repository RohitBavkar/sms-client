"use client";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    data1: 4000,
    data2: 2400,
  },
  {
    name: "Feb",
    data1: 3000,
    data2: 1398,
  },
  {
    name: "Mar",
    data1: 2000,
    data2: 9800,
  },
  {
    name: "Apr",
    data1: 2780,
    data2: 3908,
  },
  {
    name: "May",
    data1: 1890,
    data2: 4800,
  },
  {
    name: "Jun",
    data1: 2390,
    data2: 3800,
  },
  {
    name: "Jul",
    data1: 3490,
    data2: 4300,
  },
  {
    name: "Aug",
    data1: 3490,
    data2: 4300,
  },
  {
    name: "Sep",
    data1: 3490,
    data2: 4300,
  },
  {
    name: "Oct",
    data1: 3490,
    data2: 4300,
  },
  {
    name: "Nov",
    data1: 3490,
    data2: 4300,
  },
  {
    name: "Dec",
    data1: 3490,
    data2: 4300,
  },
];

const TempChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Temp</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="data1"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="data2"
            stroke="#CFCEFF"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TempChart;
