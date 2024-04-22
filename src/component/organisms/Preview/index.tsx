'use client';

import React from "react";

const Preview = ({ data, setData }: { data: string[] ,setData: React.Dispatch<React.SetStateAction<string[]>> }) => {
  // const handleDragStart = (e) => {
  //   e.preventDefault()

  // }

  return (
    <section style={{ width: "calc(100vw - 200px)", height: "calc(100vh - 80px)" }} className=" absolute left-0 bottom-0 p-10">
      <div
        //  onDragStart={(e) => {
        //   handleDragStart(e)
        // }}
        className="rounded-md bg-gray-lighter h-full w-full">

      </div>
    </section>
  )
}

export default Preview