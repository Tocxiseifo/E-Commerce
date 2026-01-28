//===============Router=================
import { Link } from "react-router-dom";

export default function ErrorPage() {
    return(
        <>
            <div className="flex flex-row">
                <h1>404</h1>
                <h1>Something went wrong</h1>
                <Link to="/">Go back to Home</Link> 
            </div>
        </>
    )
}