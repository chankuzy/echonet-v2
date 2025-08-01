import { Bell, EyeOff, User } from "lucide-react"
import { Link } from "react-router-dom"

export const AuthText = ({ newUser } : { newUser: boolean }) => {
    const newUserText = "Create your account in minutes to connect, share moments and enjoy a genuine, personalized social experience with real people. And also dive into a potion where you can dance like no one is watching you. Whisper!";
    const memberText = "Login to your account and continue to explore and discover more with Echonet";
    return (
        <div className="hidden md:flex sm:flex flex-col">
            <div className="mt-32 flex-col space-y-5">
                <h2 className="font-semibold text-3xl text-black/70">{newUser ? 'Create Your Account' : 'Login'}</h2>
                <p className="text-lg text-black/40 font-medium">{newUser ? newUserText : memberText}</p>
                <div className="flex gap-4">
                    <span className="p-4 rounded-full bg-gray-100"><Bell className="text-gray-600"/></span>
                    <span className="p-4 rounded-full bg-gray-100"><EyeOff className="text-gray-600"/></span>
                    <span className="p-4 rounded-full bg-gray-100"><User className="text-gray-600"/></span>
                    <span className="p-4 rounded-full bg-gradient-to-b from-[#ddfd18] to-[#dbfd40] shadow-md text-black/70 font-medium">Start New App</span>
                </div>
            </div>
            {!newUser && (
                <div className="mt-8">
                    <Link to="/forgotten-password" className="text-blue-400 font-medium hover:underline">Forgot you password?</Link>
                </div>
            )}
            {newUser && (
                <div className="mt-14 flex justify-center w-[20rem] text-gray-600">
                    <p className="text-center">
                    By continuing you agree to Echonet's 
                    <Link to="/terms" className="font-bold"> Terms of service </Link>
                    and
                    <Link to="/privacy-policy" className="font-bold"> Privacy Policy </Link>
                    </p>
                </div>
            )}
        </div>
    )
}