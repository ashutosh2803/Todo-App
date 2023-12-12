import React from 'react'
import data from "../data/users.json";

export const AuthContextProvider = React.createContext();

const AuthProvider = ({ children }) => {
    const [users, setUsers] = React.useState(data.data);
    const [logged, setLogged] = React.useState(false);

    const changeUsers = (payload) => {
        setUsers([...users, payload]);
    }
    const changeLogged = (res) => {
        setLogged(res);
    }
    const value = {
        users,
        changeUsers,
        logged,
        changeLogged
    }
    return (
        <AuthContextProvider.Provider value={value}>{children}</AuthContextProvider.Provider>
    )
}

export { AuthProvider };