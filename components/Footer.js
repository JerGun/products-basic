import { faCopyright } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export default function Footer() {
  return (
    <div className="h-10 w-full flex justify-center space-x-1 bg-secondary opacity-90">
      <div className="flex items-center space-x-1 text-sm text-black">
        <div className="h-4 w-4">
          <FontAwesomeIcon icon={faCopyright} />
        </div>
        <p>All rights are reserved 2022. Powered by </p>
        <a
          href="https://facebook.com/GongPawaret/"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:underline"
        >
          Pawaret Muengkaew
        </a>
        .<p>View source code on</p>
        <a
          href="https://github.com/JerGun/"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:underline"
        >
          GitHub
        </a>
        .
      </div>
    </div>
  )
}
