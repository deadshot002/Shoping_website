import React from 'react'
// import {Data} from './Data.js'
const card1 = {
  name: "The Catalyzer",
  price: 16.01
};
const card2 = {
  name: "Shooting Stars",
  price: 21.15
};
const card3 = {
  name: "Neptune",
  price: 12.03
};
const card4 = {
  name: "The 400 Blows",
  price: 18.40
};
const card5 = {
  name: "The Catalyzer 2",
  price: 16.01
};
const card6 = {
  name: "Shooting Stars 2",
  price: 21.15
};
const card7 = {
  name: "Neptune 2",
  price: 12.03
};
const card8 = {
  name: "The 400 Blows 2",
  price: 18.40
};

const data=[
  {
    name: "The Catalyzer",
    price: 16.01
  },
  {
    name: "Shooting Stars",
    price: 21.15
  },
]
export default function Shope1(props) {
  return (
    <div style={props.Visible}>
      <section className="text-gray-600 body-font" style={props.mode}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a onClick={props.Show} name={card1} data-user='2' className="cursor-pointer block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="title-font text-lg font-medium">{data.name}</h2>
                <p className="mt-1">${card1.price}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
