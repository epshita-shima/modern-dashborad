import Link from 'next/link';
import React, { useState } from 'react'
import { FaHome, FaUser, FaCog, FaChevronDown } from "react-icons/fa"

import { FaTachometerAlt, FaBullseye, FaBullhorn, FaBoxes, FaCubes, FaPlus, FaList, FaChartBar, FaExchangeAlt } from "react-icons/fa";

export const menuData = [
    {
        name: "Dashboard",
        path: "/",
        icon: <FaTachometerAlt />,
    },
    {
        name: "Marketing",
        icon: <FaBullseye />,
        children: [
            {
                name: "Target Planning",
                icon: <FaBullseye />,
                children: [
                    { name: "Create Target", path: "/marketing/target/create", icon: <FaPlus /> },
                    { name: "View Targets", path: "/marketing/target/list", icon: <FaList /> },
                    { name: "Reports", path: "/marketing/target/reports", icon: <FaChartBar /> },
                ],
            },
            {
                name: "Campaign Management",
                icon: <FaBullhorn />,
                children: [
                    { name: "Create Campaign", path: "/marketing/campaign/create", icon: <FaPlus /> },
                    { name: "Campaign List", path: "/marketing/campaign/list", icon: <FaList /> },
                    { name: "Analytics", path: "/marketing/campaign/analytics", icon: <FaChartBar /> },
                ],
            },
        ],
    },
    {
        name: "Inventory",
        icon: <FaBoxes />,
        children: [
            {
                name: "Raw Material",
                icon: <FaCubes />,
                children: [
                    { name: "Add Stock", path: "/inventory/raw/add", icon: <FaPlus /> },
                    { name: "Stock List", path: "/inventory/raw/list", icon: <FaList /> },
                    { name: "Stock Transfer", path: "/inventory/raw/transfer", icon: <FaExchangeAlt /> },
                ],
            },
            {
                name: "Finished Goods",
                path: "/inventory/finished/list",
                icon: <FaBoxes />,
            },
        ],
    },
];

// const MenuItem = ({ item, collapsed }) => {
//     const [open, setOpen] = useState(false);

//     return (
//         <div>
//             <div
//                 onClick={() => setOpen(!open)}
//                 className="px-4 py-1 flex items-center gap-1 cursor-pointer hover:bg-[#FEBD02] hover:text-black uppercase text-[14px] transition-colors duration-500"
//             >
//                 <span className="text-[14px] text-blue-400">{item.icon}</span>
//                 <span
//                     className={`ml-2 whitespace-nowrap transition-opacity duration-500 ${collapsed ? "opacity-0 pointer-events-none" : "opacity-100"
//                         }`}
//                 >
//                     {item.path ? (
//                         <Link href={item.path} className="uppercase hover:text-black" > 
//                             {item.name}
//                         </Link>
//                     ) : (
//                         item.name
//                     )}
//                 </span>
//             </div>

//             {item.children && open && !collapsed && (
//                 <div className="ml-4 border-l border-black transition-all duration-500">
//                     {item.children.map((child, index) => (
//                         <MenuItem key={index} item={child} collapsed={collapsed} />
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

const MenuItem = ({ item, collapsed }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => item.children && setOpen(!open)}
        className="px-4 py-2 flex items-center justify-between cursor-pointer hover:bg-[#FEBD02] hover:text-black uppercase text-[14px] transition-colors duration-300"
      >
        {/* Left Section: Icon + Name */}
        <div className="flex items-center gap-3">
          <span className="text-lg">{item.icon}</span>
          <span
            className={`whitespace-nowrap transition-all duration-300 ${
              collapsed
                ? "opacity-0 pointer-events-none translate-x-[-10px]"
                : "opacity-100 translate-x-0"
            }`}
          >
            {item.path ? (
              <Link href={item.path} className="uppercase hover:text-black">
                {item.name}
              </Link>
            ) : (
              item.name
            )}
          </span>
        </div>

        {/* Right Section: Arrow (only if has children) */}
        {!collapsed && item.children && (
          <FaChevronDown
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        )}
      </div>

      {/* Children */}
      {item.children && open && !collapsed && (
        <div className="ml-4 border-l border-black transition-all duration-300">
          {item.children.map((child, index) => (
            <MenuItem key={index} item={child} collapsed={collapsed} />
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <aside
            className={`bg-[#f4f4f4] text-black h-screen overflow-hidden border-r border-gray-300 transition-all duration-500 ${collapsed ? "w-16" : "w-64"
                }`}
            onMouseEnter={() => setCollapsed(false)}
            onMouseLeave={() => setCollapsed(true)}
        >
            {/* Logo / Title */}
            <div
                className={`font-bold text-indigo-800 uppercase border-b border-black transition-all duration-300 p-4 ${collapsed ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
            >
                goRMG ERP
            </div>

            {/* Menu Items */}
            {menuData.map((menu, index) => (
                <MenuItem key={index} item={menu} collapsed={collapsed} />
            ))}
        </aside>
    );
};

export default Sidebar;