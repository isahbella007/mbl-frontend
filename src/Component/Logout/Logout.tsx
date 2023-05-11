import { useNavigate } from "react-router-dom";
import "./Logout.css"
const Logout = () => { 
    const navigate = useNavigate(); 
    const handleLogout = () => { 
        localStorage.removeItem('auth-token')
        localStorage.removeItem('name')
        navigate("/")
    }
    return (
        <button className="button-logout" onClick={handleLogout}>Logout</button>
    )
}
export default Logout