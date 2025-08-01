import { Facebook, Github } from "lucide-react"
import { Link } from "react-router-dom"

export const Footer = ({ newUser } : { newUser: boolean }) => {
    return (
        <div className="flex flex-col justify-center w-[20rem]">
            <span className="text-gray-400 text-center">or continue with</span>
            <div className="mt-4 flex justify-center space-x-3 w-full">
                <a href="#" className="py-2 px-4 flex items-center space-x-1 rounded-full bg-gray-200">
                    <Facebook className="stroke-none fill-blue-500" />
                    <span className="text-sm text-gray-600 font-medium">Facebook</span>
                </a>
                <a href="#" className="py-2 px-4 flex items-center space-x-1 rounded-full bg-gray-200">
                    <Github className="stroke-none fill-blue-950" />
                    <span className="text-sm text-gray-600 font-medium">Github</span>
                </a>
            </div>
            {newUser ? (
                <span className="mt-4 text-center font-medium text-gray-600">Already have an account? <Link to="/login" className="font-bold">Login</Link></span>
            ): (
                <span className="mt-4 text-center font-medium text-gray-600">Not a member? <Link to="/register" className="font-bold">Register</Link></span>
            )}
        </div>
    )
}