import React from "react"

interface AppleLogoProps {
  className?: string
}

export const AppleLogo: React.FC<AppleLogoProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.05 20.28c-.98 1.09-2.01 1.18-3.01.54-1.03-.65-1.97-.61-3.01 0-1.23.74-2.04.57-3.01-.54-3.2-3.53-3.56-10.13 1.32-10.13 1.24 0 2.05.54 2.74.54.66 0 1.65-.54 3.01-.54 3.19 0 4.32 4.8 2.96 10.13zM14.89 6.91c-2.49 0-4.49-2.04-4.49-4.53 0-.34.04-.67.08-.98 1.92-.04 4.05 1.39 4.41 4.53 0 .33-.04.65-.07.98z" />
    </svg>
  )
}

export default AppleLogo 