/** @format */

"use client";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Navbar2() {
  const navproduct = [
    {
      title: "Import from Figma",
    },
    {
      title: "Unlock collaboration",
    },
    {
      title: "A brand-new way to design and animate",
    },
    {
      title: "Export to 4k, Gif, Lottie",
    },
  ];

  const colors = [
    "bg-blue-500",
    "bg-[#f1f0f2]",
    "bg-purple-500",
    "bg-[#f1f0f2]",
  ];

  const [open, setOpen] = useState(true);

  return (
    <>
      <nav  className=" h-18 w-[60vw] z-10 shadow-2xl bg-white px-7 items-center rounded-3xl flex justify-between gap-9 top-7 left-50 fixed font-semibold">
        <h1 className="text-3xl ">Jitter</h1>

        <ul className="flex mr-18 gap-5">
          <li onMouseEnter={() => setOpen(true)} className="cursor-pointer  py-4 ">
            Product
          </li>
          <li className="py-4">Customers</li>
          <li className="py-4">Templates</li>
          <li className="py-4">Pricing</li>
        </ul>
        <div className="flex gap-2">
          <p className="mt-2 ">Log in</p>
          <p className="bg-black text-white px-5 font-bold py-2 rounded-3xl">
            Try for free
          </p>
        </div>
      </nav>
      {open ? (
        <div
          onMouseLeave={() => setOpen(false)}
          className="product-page bg-white shadow-2xl h-[95vh] flex items-end rounded-b-3xl absolute transition-all duration-400 w-full ">
          <div className="w-[55%] flex justify-end">
            <div className="card-container justify-end pb-5 pl-10  w-140  flex flex-wrap  gap-4 ">
              {navproduct.map((item, idx) => (
                <div
                  className={`card h-40  flex-col ${
                    colors[idx % colors.length]
                  }  w-60 rounded-xl flex justify-end p-3 gap-1 `}
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

          <div className="w-[45%] h-[69%] pl-17 flex flex-col gap-5 ">
            <h1 className="text-xl font-semibold"> What's new</h1>
            <div className="flex gap-2 flex-col">
              <p>Pen tool and morph template</p>
              <p>Faster export</p>
              <p>Text gradients</p>
            </div>
            <button className="bg-[#f1f0f2] font-semibold hover:bg-[#e3e1e7] h-10 w-50 rounded-3xl">
              see whats new{" "}
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
