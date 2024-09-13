import { createContext } from "react";
import { useReducer } from "react";
import githubReducer from "./GIthubReducer";

const GithubContext = createContext()

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
  
    const initialState = {
        users: [],
        loading: false,
        repos:[]
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)

    // const searchUsers = async (text) => {
    //     setLoading()
    //     const params = new URLSearchParams({
    //         q: text
    //     })
    //     const response = await fetch(`${GITHUB_URL}/search/users?${params}`,{
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     })

    //     const {items} = await response.json()
    //     dispatch({
    //         type: 'GET_USERS', 
    //         payload: items,
    //     })
    // }
  
    // const clearUsers =() => dispatch({type: 'CLEAR_USERS'})
    const setLoading = () => dispatch({type: 'SET_LOADING'})
    return <GithubContext.Provider value={{
        ...state,
        // users: state.users,
        // loading: state.loading,
        // user: state.user,
        // repos: state.repos,
        dispatch,
        // searchUsers,
        // clearUsers,
        // getUser,
        // getUserRepos,

    }}>
        {children}
    </GithubContext.Provider>
  
}
export default GithubContext