import { Link } from "react-router-dom"

const ErrorPage = () => { 
    return(
        <p>we do not know how you got here but please go back <Link to = "/">Home</Link></p>
    )
}
export default ErrorPage