//=====================Router Hook=====================
import { useNavigate } from "react-router-dom";

//=====================Hooks====================
import {  useState } from "react";
import useShop from "../../hooks/useShop";


//=====================Material UI=====================
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


export default function LogIn() {
    //=====================Router Hooks =====================
    const navigate = useNavigate(); // Hook to navigate programmatically
    
    //=====================States====================
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const {setIsLoggedIn} = useShop()

    //=====================Handlers==================
    function handleLoginSubmit(e: React.FormEvent<HTMLFormElement> ) { // Form submit handler
        e.preventDefault();
        // After successful login, navigate to the home page
        if (email  == '' && password == '' ) {
            alert('Please enter both email and password.');
            
        }
        if (!email.includes('@') || !email.includes('.')) {
            alert('Please enter a valid email address.');
            return;
        }
        if (password.length <= 5) {
            alert('Password must be at least 6 characters long.');
            return;
        }
        else{
            navigate('/'); // Redirect to home page after login
            setIsLoggedIn(true);
            return;
        }
    }    
    return(
        <>
            <div className="flex justify-center items-center w-full h-screen">
                <form className="flex flex-col gap-6 bg-white p-15 rounded-lg shadow-lg w-96" onSubmit={handleLoginSubmit}>
                    <h2 className="text-2xl font-bold text-text-color mb-4 text-center">Log In to Your Account</h2>
                    <input value={email} onChange={e => setEmail(e.target.value)}  type="email" placeholder="XXXXXXXXX@gmail.com" className={email !== `${email}@gmail.com` ? "border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-main" : "border border-red-600 p-2 bg-red-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"} />
                    <label className="relative flex items-center justify-between w-70">
                        {
                            showPassword === false  ? (
                               <>
                                    <input value={password} onChange={e => setPassword(e.target.value)}  type="password" placeholder="Password" className="border border-gray-300 p-2 rounded-md w-67 focus:outline-none focus:ring-2 focus:ring-main" />
                                    <VisibilityOffIcon className="absolute left-59 bottom-2.5 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
                               </> 
                            ) : (
                                <>
                                    <input value={password} onChange={e => setPassword(e.target.value)}  type="text" placeholder="Password" className="border border-gray-300 p-2 rounded-md w-67 focus:outline-none focus:ring-2 focus:ring-main" />
                                    <VisibilityIcon  className="absolute left-59 bottom-2.5 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
                                </>
                            )
                        }                
                    </label>
                        <button type="submit" className="bg-main text-white py-2 rounded-md hover:bg-main-color transition duration-300 cursor-pointer hover:duration-300 hover:bg-yellow-600" onClick={() => handleLoginSubmit}>Log In</button>
                </form>
            </div>
        </>
    )
}