import React from 'react'
import { Link } from 'react-router-dom'

function UserItem({ user }) {
    return (
        <div className='card shadow-md compact side bg-base-100'>
            <div className="flex-row items-center space-x-4 card-body">
                <div>
                    <div className='avatar rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                        <div className="rounded-full shadow w-14 h-14">
                            <img src={user.avatar_url} alt="Profile" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title">
                        <Link className='text-base-content text-opacity-40' to={`/users/${user.login}`}>
                            Visit profile
                        </Link>
                    </h2>
                    {user.login}
                </div>
            </div>
        </div>
    )
}


export default UserItem