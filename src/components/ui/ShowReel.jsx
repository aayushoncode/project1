/** @format */
"use client";
import { useEffect } from "react";

export const ShowReel = () => {
  const cardData = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const doc = document.documentElement;

      const maxScroll = doc.scrollHeight - window.innerHeight;

      const progress = scrollTop / maxScroll;

      console.log(progress.toFixed(2));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-black w-full">
        <div className="h-110 flex gap-3 flex-wrap justify-center items-center  bg-red-500 w-210">
          <div className="card-container justify-center items-center  flex  flex-wrap w-100 gap-3 h-70 bg-blue-500">
            {cardData.map((item, idx) => (
              <div key={idx} className="h-30  w-30 bg-yellow-500">
                {item.id}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
