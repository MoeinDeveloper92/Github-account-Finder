import React from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'
// in the Home Page we have got our search module
function Home() {
    return (
        <>
            <UserSearch />
            <UserResults />
        </>

    )
}

export default Home