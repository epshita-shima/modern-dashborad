import React from 'react'
import { FaClipboardList, FaShoppingCart, FaTruck, FaDollarSign, FaUser, FaCartArrowDown, FaBook } from "react-icons/fa";

const statsData = [
  {
    title: "Total Buyers",
    count: 120,
    icon: <FaUser className="text-white text-xl" />,
    color: "bg-[#20A6E5]",
  },
  {
    title: "Orders",
    count: 0,
    icon: <FaCartArrowDown className="text-white text-xl" />,
    color: "bg-[#FEBF00]",
  },
  {
    title: "Total PO",
    count: 230,
    icon: <FaBook className="text-white text-xl" />,
    color: "bg-[#A68ADB]",
  },
  {
    title: "Total Order Qty",
    count: 98,
    icon: <FaCartArrowDown className="text-white text-xl" />,
    color: "bg-[#89DDF8]",
  },
  {
    title: "Total Order Value",
    count: "0",
    icon: <FaDollarSign className="text-white text-xl" />,
    color: "bg-indigo-400",
  },
];

const StatCard = ({ title, count, icon, color }) => {
  return (
    <div className={`flex items-center py-1 pl-3  shadow-md ${color} w-full`}>
      <div className="mr-4 text-[8px]">{icon}</div>
      <div>
        <p className="text-[14px]  text-white">{title}</p>
        <p className="text-[14px]  text-white">{count}</p>
      </div>
    </div>
  );
};

const TopCard = () => {
  return (
       <div className="grid grid-cols-5 gap-4">
      {statsData.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          count={stat.count}
          icon={stat.icon}
          color={stat.color}
        />
      ))}
    </div>
  )
}

export default TopCard