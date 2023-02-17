import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'

function UserResults() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchUsers()
    }, [])



    const fetchUsers = async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })
        const data = await response.json();
        setUsers(data)
        setLoading(false)
    }


    

    if (!loading) {
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user) => (
                    <motion.h3 key={user.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, animationDelay: .5, type: 'spring' }}
                    >
                        <UserItem key={user.id} user={user} />
                    </motion.h3>
                ))}
            </div>
        )
    } else {
        return <Spinner />
    }


}

export default UserResults