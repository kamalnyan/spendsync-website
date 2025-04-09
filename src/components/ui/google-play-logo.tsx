import React from "react"

interface GooglePlayLogoProps {
  className?: string
}

export const GooglePlayLogo: React.FC<GooglePlayLogoProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M3.609 1.814L13.792 12 3.61 22.186c-.37-.372-.585-.89-.585-1.435V3.25c0-.545.214-1.063.584-1.436zM14.713 12.922l-2.289 2.29L5.865 8.654l2.289-2.29zM17.001 10.622l-2.29 2.29-2.289-2.29 2.29-2.289zM5.865 15.346l6.56-6.56 2.289 2.29-6.56 6.559z" />
    </svg>
  )
}

export default GooglePlayLogo 