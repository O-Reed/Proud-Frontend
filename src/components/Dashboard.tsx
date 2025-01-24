import axios from 'axios';
import { useEffect, useState } from 'react'

interface User {
    name: string;
    email: string;
}

const Dashboard = () => {

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        axios.get('http://localhost:8080/user-info', {withCredentials: true})
        .then(response => {
            setUser(response.data);
        })
        .catch(error => {
            console.error('Error occured: ', error)
        })
    })

  return (
    <div>
        <h2>Dashboard</h2>
        {user ? (
            <div>
                <p><strong>Name: </strong>{user.name}</p>
                <p><strong>Email: </strong>{user.email}</p>
            </div>
            ) : (<p>Loading user data...</p>)}
    </div>
  )
}

export default Dashboard