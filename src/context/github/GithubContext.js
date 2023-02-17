import { createContext, useState, useReducer, useEffect } from "react";
import githubReducer from "./GithubReducer";
// bellow we create a context
const GithubContext = createContext();




const GITHUB_URL = process.env.REACT_APP_GITHUB_URL



export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: true
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)


    // Get Search results

    const searchUsers = async (text) => {
        setLoading()
        const params = new URLSearchParams({
            q: text
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`)
        const { items } = await response.json();
        
        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
    }


    // Clear users from state
    const clearUsers = () => {
        dispatch({type:'CLEAR_USERS'})
    }


    // set Loading

    const setLoading = () => dispatch({ type: 'SET_LOADING' });

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                loading: state.loading,
                searchUsers,
                clearUsers
            }}
        >
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext