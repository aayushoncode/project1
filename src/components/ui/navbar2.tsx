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

    const navCustomer = [
      {
        title: "Import from Figma",
      },
      {
        title: "Unlock collaboration",
      },
      {
        title: "A brand-new way to design and animate",
      },
    ];

    const color = [
      "bg-blue-500 h-80 w-55 object-cover bg-[url(https://miro.medium.com/v2/resize:fit:1100/format:webp/1*YvmHc7GdCyVVLabAVH9d6w.png)]",
      "bg-[#f1f0f2] absolute h-39 w-50 top-15 left-65 ",
      "bg-purple-500 absolute h-39 w-50 bottom-5 left-65 ",
    ];

    const [product, setProduct] = useState(false);
    const [customer, setCustomer] = useState(false);

    return (
      <>
        <nav
          className={`fixed  rounded-3xl duration-400  bg-white    z-50 w-[99vw]  flex flex-col items-center   ${
            product ? "h-[500px]" : "h-auto"
          } `}>
          <div className=" my-5 p-2 w-[60vw]  group  z-50   px-7 items-center  flex  justify-between gap-9 top-7 left-50  font-semibold">
            <h1 className="text-3xl ">Jitter</h1>

            <ul className="flex mr-18 gap-5">
              <li
                onMouseEnter={() => setProduct(true)}
                onMouseLeave={() => setProduct(false)}
                className=" cursor-pointer  py-4 ">
                Product
              </li>
              <li
                onMouseEnter={() => setCustomer(true)}
                onMouseLeave={() => setCustomer(false)}
                className="py-4">
                Customers
              </li>
              <li className="py-4">Templates</li>
              <li className="py-4">Pricing</li>
            </ul>
            <div className="flex gap-2">
              <p className="mt-2 ">Log in</p>
              <p className="bg-black text-white px-5 font-bold py-2 rounded-3xl">
                Try for free
              </p>
            </div>
          </div>

          {/* dropdown product */}
          <div
            onMouseLeave={() => setProduct(false)}
            onMouseEnter={() => setProduct(true)}
           
            style={{
              transform: `${
                product ? "translateY(90px)" : "translateY(-700px)"
              } `,
            }}
            className={` ${
              product ? "opacity-100" : "opacity-0"
            }  product-page  absolute h-[400px] justify-center flex items-end rounded-b-3xl  transition-all duration-400 -top-6  `}>
            <div className="card-container  justify-end pb-5 pl-10  w-140  flex flex-wrap  gap-4 ">
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

            <div className="w-[560px] h-80 pl-17 flex flex-col gap-5 ">
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
          {/* dropdown customer */}

          <div
            onMouseLeave={() => setCustomer(false)}
            onMouseEnter={() => setCustomer(true)}
            style={{
              transform: `${
                customer ? "translateY(100px)" : "translateY(-500px)"
              } `,
            }}
            className={` ${
              customer ? "opacity-100" : "opacity-0"
            }  customer-page  absolute  pt-4 h-[400px] -top-5 bg-white  flex items-end rounded-b-3xl  duration-400 w-[70vw]  `}>
            <div className="card-container   pl-8   pb-5   w-160  flex flex-wrap  gap-4 ">
              {navCustomer.map((item, idx) => (
                <div
                  className={`card h-0 flex-col ${
                    color[idx % color.length]
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

            <div className="w-[560px] h-80 pl-17 flex flex-col gap-5">
              <h1 className="text-xl font-semibold"> All customers</h1>
              <div className="flex gap-2 flex-col">
                <p>Creative teams</p>
                <p>Agencies</p>
                <p>Studios</p>
              </div>
              <button className="bg-[#f1f0f2] font-bold hover:bg-[#e3e1e7] h-10 w-50 rounded-3xl">
                See all customers{" "}
              </button>
            </div>
          </div>
        </nav>
      </>
    );
  }
