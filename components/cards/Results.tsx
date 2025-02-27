import React from 'react'


const Results = () => {
  return (
    <div className=" flex flex-col justify-center  py-5 mb-10">
      <div className=" grid md:grid-cols-4 gap-6 px-1   ">
        {[
          { count: "9", label: "10-A+" },
          { count: "10", label: "LSS" },
          { count: "10", label: "USS" },
          { count: "14", label: "9-A+" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-4 px-3 text-center border-t-4 border-blue-500 hover:scale-105 transform transition-all duration-500"
          >
            <h2 className="text-6xl font-bold text-gray-800">{item.count}</h2>
            <h1 className="text-4xl font-semibold text-gray-600 mt-1">
              {item.label}
            </h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Results
