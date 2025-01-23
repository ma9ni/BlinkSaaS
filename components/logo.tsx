"use client"

export function Logo() {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      <path
        d="M35 20C35 20 65 20 65 35C65 50 35 45 35 60C35 75 65 75 65 75"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        className="text-primary"
      />
      <path
        d="M50 15C50 15 75 40 75 50C75 60 50 85 50 85"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        className="text-primary"
        opacity="0.8"
      />
    </svg>
  )
}