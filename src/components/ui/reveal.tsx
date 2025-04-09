import React, { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface RevealProps {
  children: React.ReactNode
  width?: "full" | "auto"
  delay?: number
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "full", 
  delay = 0 
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <div ref={ref} className={`${width === "full" ? "w-full" : "w-auto"} relative overflow-hidden`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Reveal 