import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Popover, Transition } from "@headlessui/react"
import { Fragment } from "react"

export default function Navbar({ cartItems }) {
  return (
    <div className="sticky top-0 h-16 w-full px-12 flex items-center justify-end bg-secondary">
      <div className="h-full">
        <Popover className="relative h-full">
          {({ open }) => (
            <>
              <Popover.Button
                className={`h-full w-full flex items-center space-x-5 text-white `}
              >
                <div className="h-10 w-full px-3 rounded-lg flex items-center text-black bg-white">
                  <p>{cartItems.length}</p>
                </div>
                <FontAwesomeIcon icon={faCartShopping} className="h-6 w-6 transition ease-in-out duration-500 hover:scale-125" />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-10 mt-3 w-48 max-w-sm -translate-x-1/2 transform px-4">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2"></div>
                    <div className="bg-gray-50 p-4"></div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}
