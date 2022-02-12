import { useEffect, useState } from "react"
import CardDisplay from "../layout/CardDisplay"
import Spinner from "../layout/Spinner"

function UserResults() {
    const [user, setUser] = useState()
    const [userFullName, setUserFullName] = useState()
    const [userAvatar, setUserAvatar] = useState()
    const [userEmail, setUserEmail] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[loading])


    const fetchUsers = async () => {
        const response = await fetch(`https://randomuser.me/api/`)
        const data = await response.json()
        setUser(data)
        setLoading(false)
        setUserFullName(`${user.results[0].name.first} ${user.results[0].name.last}`);
        setUserAvatar(user.results[0].picture.large);
        setUserEmail(user.results[0].email)
    }            
      
    if(loading) {
        return (
            <CardDisplay userAvatar={userAvatar} userFullName={userFullName} userEmail={userEmail} />  
          )
    } else {
        return <Spinner />
    }
    
}

export default UserResults