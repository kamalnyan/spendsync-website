import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { useScrollToTop } from '../../hooks/useScrollToTop'

interface ScrollToTopLinkProps extends LinkProps {
  children: React.ReactNode
}

const ScrollToTopLink: React.FC<ScrollToTopLinkProps> = ({ children, ...props }) => {
  const { scrollToTop } = useScrollToTop()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (props.onClick) {
      props.onClick(e)
    }
    scrollToTop()
  }

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  )
}

export default ScrollToTopLink 