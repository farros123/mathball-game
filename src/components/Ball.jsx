import React from "react"

export default function Ball({ value, onClick, className = "" }) {
  return (
    <div
      className={`ball ${className} flex items-center justify-center text-lg`}
      onClick={() => onClick(value)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(value) }}
    >
      {value}
    </div>
  )
}
