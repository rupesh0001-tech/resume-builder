import React from 'react'

const SaveBtn = ({name}) => {
  return (
    <button className="group px-8 py-2.5 bg-indigo-600 rounded-lg text-white cursor-pointer active:scale-95 transition duration-300 hover:bg-indigo-700">
            <p className="relative h-6 overflow-hidden">
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">{name}</span>
                <span className="absolute w-full top-full left-1/2 -translate-x-1/2 block transition-transform duration-300 group-hover:translate-y-[-100%]">{name}</span>
            </p>
        </button>
  )
}

export default SaveBtn