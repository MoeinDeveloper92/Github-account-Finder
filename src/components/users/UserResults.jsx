import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'


function UserResults() {
    const { users, loading } = useContext(GithubContext)




    if (!loading) {
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user) => (
                    <motion.h3 key={user.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
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