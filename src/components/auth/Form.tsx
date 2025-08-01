import { Eye, EyeClosed, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { createUser, loginUser } from "../../queries";
import { useFormStatus } from "react-dom";
import { useNavigate } from "react-router-dom";

export const Form = ({ newUser } : { newUser: boolean }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmpassword, setShowConfirmpassword] = useState<boolean>(false);
    const navigate = useNavigate();
    return (
        <form 
        action={ async (formData: FormData) => {
            if (newUser) {
                const response = await createUser(formData)
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
            } else {
                const response = await loginUser(formData)
                localStorage.setItem('token', response.token);
                localStorage.setItem('user', JSON.stringify(response.user));
                navigate('/');
            }
        }} 
            className="mt-8 flex flex-col gap-4 max-w-xs" >
            <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="font-sm text-gray-600">Email or Phone</label>
                <input 
                type="text" 
                id="email" 
                name="email"
                className="p-2 rounded-lg bg-gray-100 focus:ring-2 ring-gray-400 outline-none transition duration-300" 
                placeholder="Email or phone" 
                required 
                />
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="password" className="font-sm text-gray-600">Password</label>
                <div className="relative w-full">
                    <input 
                    type={ showPassword ? "text" : "password"} 
                    id="password" 
                    name="password"
                    className="p-2 rounded-lg bg-gray-100 focus:ring-2 ring-gray-400 outline-none w-full transition duration-300" 
                    placeholder="Enter your password" 
                    required 
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeClosed className="absolute right-3 top-3 h-5 w-5 text-gray-400" /> : <Eye className="absolute right-3 top-3 h-5 w-5 text-gray-400" />}
                    </button>
                </div>
            </div>
            {newUser && (
                <div className="flex flex-col space-y-2">
                    <label htmlFor="password_confirmation" className="font-sm text-gray-600">Confirm</label>
                    <div className="relative w-full">
                        <input 
                        type={ showConfirmpassword ? "text" : "password"} 
                        id="password_confirmation" 
                        name="password_confirmation"
                        className="p-2 rounded-lg bg-gray-100 focus:ring-2 ring-gray-400 outline-none w-full transition duration-300" 
                        placeholder="Confirm password" 
                        required 
                        />
                        <button type="button" onClick={() => setShowConfirmpassword(!showConfirmpassword)}>
                            {showConfirmpassword ? <EyeClosed className="absolute right-3 top-3 h-5 w-5 text-gray-400" /> : <Eye className="absolute right-3 top-3 h-5 w-5 text-gray-400" />}
                        </button>
                    </div>
                </div>
            )}
            <SubmitButton newUser={newUser} />
        </form>
    )
}

const SubmitButton = ({ newUser }: { newUser: boolean }) => {
    const status = useFormStatus();
    return (
        <>
            {newUser ? (
                <button type="submit" className="mt-4 w-full p-2 rounded-full text-white/90 bg-black/90 hover:bg-black/80 transition duration-300 disabled:opacity-50" disabled={status.pending} >{status.pending ? <LoaderCircle className="animate-spin flex place-self-center" /> : 'Create Account'}</button>
            ) : (
                <button type="submit" className="mt-4 w-full p-2 rounded-full text-white/90 bg-black/90 hover:bg-black/80 transition duration-300 disabled:opacity-50" disabled={status.pending} >{status.pending ? <LoaderCircle className="animate-spin flex place-self-center" /> : 'Login'}</button>
            )}
        </>
    )
}