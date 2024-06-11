import { useParams } from "react-router-dom"
function User() {
    const {userid} = useParams()
  return (
    <div className="text-center text-2xl bg-gray-600 text-white p-4">
      User : {userid}
    </div>
  )
}

export default User
