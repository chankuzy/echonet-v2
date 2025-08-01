import { motion } from "framer-motion"

export const Goals = () => {
    return (
        <motion.div
        initial={{y: 20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        >
            <div className="mt-10 mx-auto">
                <h2 className="font-bold text-2xl text-white/80">Hello from the Goals Page.</h2>
            </div>
        </motion.div>
    )
}