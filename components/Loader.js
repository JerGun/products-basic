import React from "react"

export default function Loader() {
  return (
    <div className="h-full w-full grid grid-cols-5 gap-10 p-10 animate-pulse">
      {[...Array(10)].map((item, i) => (
        <div className="h-96 w-full rounded-xl bg-text" key={i}></div>
      ))}
    </div>
  )
}
