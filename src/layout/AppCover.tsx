import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { EchoLogo } from "../components/EchoLogo"

export const AppCover = () => {
    return (
        
            <div className="flex flex-col items-center justify-center w-full h-screen bg-white/90">
                <motion.div
                initial={{y: -20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                >
                    <EchoLogo />
                    <div className="mt-4">
                        <Link to={'/login'} className="font-sans font-medium text-yellow-400">Observe the beautiful Echos from your natural environment.</Link>
                    </div>
                </motion.div>
            </div>
    )
}