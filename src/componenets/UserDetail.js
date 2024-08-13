import { useParams } from "react-router-dom"
export const UserDetail = () => {
    const params = useParams()
    const userId = params.userId
    return (
        <div>
            Details About User {userId}
        </div>
    )
}