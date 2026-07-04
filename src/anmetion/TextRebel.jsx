import React from 'react'
import { motion } from "motion/react";
function TextRebel({ text }) {
    return (
        <span className="text-5xl font-bold overflow-hidden">
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: index * 0.05,
                        duration: 0.4,
                    }}
                    style={{ display: "inline-block" }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    )
}

export default TextRebel
