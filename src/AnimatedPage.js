import React from 'react'
import { motion } from "framer-motion"

const animations = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 100, y: 0 },
    exit: { opacity: 0, y: -100 }
}

function AnimatedPage({ children }) {
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.1 }}
        >{children}</motion.div>
    )
}

export default AnimatedPage