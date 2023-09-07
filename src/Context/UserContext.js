
import {createContext} from 'react'

const UserContext = createContext({
    loggedInUser : 'Default User'
})


export const cart = createContext({
    user : 1
})

export default UserContext;