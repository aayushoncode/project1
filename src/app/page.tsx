/** @format */
"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function page() {
  


  const [open, setOpen] = useState(true);

  return (
    <div className="h-screen   w-full ">
      <div className="h-screen   flex justify-center items-center">
        <h1 className="text-[10vh] font-bold w-[40vw] text-center  ">
          Super fast motion for every team
        </h1>
      </div>
      <div>
        {/* <div
          onMouseLeave={() => setOpen(false)}
          className="customer-page bg-white shadow-2xl h-[95vh] flex items-end rounded-b-3xl absolute transition-all duration-400 w-full ">
          <div className="w-[55%] flex justify-end">
            <div className="card-container  p-5  relative  pb-5 w-120     flex  gap-4 ">
              {navCustomer.map((item, idx) => (
                <div
                  className={`card h-0 flex-col ${
                    colors[idx % colors.length]
                  }  w-0 rounded-xl flex justify-end p-3 gap-1 `}
                  key={idx}>
                  <h1 className="font-bold w-30 text-[15px]">{item.title}</h1>
                  <div className="flex">
                    Learn more{" "}
                    <ArrowRight className="h-4 mt-1.5 font-semibold w-8" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
