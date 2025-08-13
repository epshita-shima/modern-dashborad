import React from 'react'
import Select from "react-select";
const CategorywiseDetails = () => {

    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" }
    ];


    return (
        <div className="w-full mt-8">
            <Select
                options={options}
                placeholder="Select a flavor"
                styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        width: "100%",
                        backgroundColor: "#20A6E5",       // background color here
                        borderColor: state.isFocused ? "#1A8CD8" : "#20A6E5",  // slightly darker border on focus
                        boxShadow: state.isFocused ? "0 0 0 2px rgba(32, 166, 229, 0.5)" : "none", // subtle focus shadow
                        "&:hover": {
                            borderColor: "#1A8CD8", // hover border color
                        },
                        color: "#fff",            // text color inside control
                    }),
                    placeholder: (base) => ({
                        ...base,
                        color: "rgba(255, 255, 255, 0.7)",  // lighter placeholder text
                    }),
                    singleValue: (base) => ({
                        ...base,
                        color: "#fff",            // selected value color white
                    }),
                    menu: (provided) => ({
                        ...provided,
                        zIndex: 9999,
                        height: "auto",
                    }),
                }}
                theme={(theme) => ({
                    ...theme,
                    colors: {
                        ...theme.colors,
                        primary25: "#1A8CD8",
                        primary: "#20A6E5",
                        neutral0: "#fff",
                        neutral80: "#333",
                    },
                })}
            />

            <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                <div className="flex-1">
                    <div className="grid grid-cols-2 gap-4">
                        {/* Card 1 */}
                        <div className="bg-[#20A6E5]  shadow p-2">
                            <h3 className=" text-white text-[14px] ">Sample Requisition</h3>
                            <p className="text-white text-[14px] ">45</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#20A6E5]  shadow p-2">
                            <h3 className=" text-white text-[14px] ">Pending Requests</h3>
                            <p className=" text-white text-[14px] ">30</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-indigo-400  shadow p-2">
                            <h3 className=" text-white text-[14px]">Samples Sent</h3>
                            <p className="text-[14px] text-white">50</p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-indigo-400 rounded shadow p-2">
                            <h3 className=" text-white text-[14px]">Samples Received</h3>
                            <p className="text-white text-[14px] ">40</p>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-[#A68ADB] rounded shadow p-2">
                            <h3 className=" text-white text-[14px]">Rejected Samples</h3>
                            <p className="text-white text-[14px] ">5</p>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-[#A68ADB] rounded shadow p-2">
                            <h3 className=" text-white text-[14px]">Total Samples</h3>
                            <p className="text-white text-[14px] ">120</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-green-200 p-4 rounded">Div 2</div>
                <div className="flex-1 bg-yellow-200 p-4 rounded">Div 3</div>
                <div className="flex-1 bg-red-200 p-4 rounded">Div 4</div>
            </div>
        </div>

    );
}

export default CategorywiseDetails