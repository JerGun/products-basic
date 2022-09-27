import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCartShopping,
  faComment,
  faStar,
} from "@fortawesome/free-solid-svg-icons"
import React, { useEffect, useState } from "react"
import Footer from "./Footer"

const filter = [
  {
    id: 1,
    name: "men's clothing",
  },
  {
    id: 2,
    name: "women's clothing",
  },
  {
    id: 3,
    name: "jewelery",
  },
  {
    id: 4,
    name: "electronics",
  },
]

export default function Hero({ data }) {
  const [tempItems, setTempItems] = useState([])
  const [items, setItems] = useState([])
  const [filterSelected, setFilterSelected] = useState([])

  useEffect(() => {
    setTempItems(data)
    setItems(data)
  }, [])

  useEffect(() => {
    const filterSelectedMap = filterSelected.map((id) => {
      if (filter.find((e) => e.id == id))
        return filter.find((e) => e.id == id).name
    })
    const filterList =
      filterSelectedMap.length < 1
        ? data
        : tempItems.filter((e) => {
            return filterSelectedMap.find((name) => e.category == name)
          })
    setItems(filterList)
  }, [filterSelected])

  const handlerFilter = (id) => {
    if (filterSelected.find((e) => e == id)) {
      setFilterSelected(filterSelected.filter((e) => e != id))
    } else {
      setFilterSelected([...filterSelected, id])
    }
  }

  return (
    <div className="h-full w-full space-y-5 text-black bg-white">
      <div className="flex items-center space-x-10 px-10 pt-10">
        <p className="capitalize font-bold">filter by</p>
        <div className="flex space-x-3">
          {filter.map((item, i) => (
            <button
              onClick={() => {
                handlerFilter(item.id)
              }}
              className={`${
                filterSelected.find((e) => e == item.id) &&
                "text-white bg-secondary"
              } h-10 px-5 rounded-md transition ease-in-out duration-500 hover:bg-secondary hover:text-white`}
              key={i}
            >
              <p className="capitalize" key={i}>
                {item.name}
              </p>
            </button>
          ))}
        </div>
        {/* <p className="capitalize font-bold">sorted by</p> */}
      </div>
      <div className="h-full w-full grid grid-cols-5 gap-10 px-10">
        {items.map((item, i) => (
          <div
            className="h-96 w-full flex flex-col justify-center items-center p-5 space-y-3 rounded-xl bg-white border border-text shadow-md transition ease-in-out duration-500 hover:shadow-xl"
            key={i}
          >
            <img
              src={item.image}
              alt={item.image}
              className="h-1/2 object-contain"
            />
            <div className="w-full space-y-3">
              <p className=" truncate capitalize text-secondary">{item.title}</p>
              <p className="capitalize">{item.category}</p>
              <div className="flex justify-between">
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faStar} className="h-4 text-primary" />
                  <p className="capitalize font-bold">{item.rating.rate}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon
                    icon={faComment}
                    className="h-4 text-black"
                  />
                  <p className="capitalize text-xs">
                    {item.rating.count} reviews
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="capitalize text-xl font-bold">${item.price}</p>
                <button
                  onClick={() => {}}
                  className="h-10 w-10 flex items-center justify-center rounded-xl transition ease-in-out duration-500 hover:scale-110 bg-secondary"
                >
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="h-4 text-white"
                  />
                </button>
              </div>
            </div>
            {/* <p>{item.}</p> */}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
