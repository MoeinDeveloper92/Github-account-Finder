import React from 'react'
import UserResults from '../components/users/UserResults'
// in the Home Page we have got our search module
function Home() {
    return (
        <>
            <h1 className='text-6xl'>
                <UserResults />
            </h1>
        </>

    )
}

export default Home