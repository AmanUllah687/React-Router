import { Navigate, useLocation} from "react-router-dom"
import { useAuth } from "./auth"

export const ReqiuredAuth = ({children}) => {
     const auth = useAuth()
     const location = useLocation()
     if(!auth.usert) {
        return <Navigate to='/login' state={{ path: location.pathname}} />

     }
    return children
}