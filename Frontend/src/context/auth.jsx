import { createContext, useContext } from "react";
import { useState } from "react";
export const AuthContext = createContext()

export default function AuthGetUser({ children }) {
    const getUser = localStorage.getItem("user")
    const [auth, setAuth] = useState(getUser ? JSON.parse(getUser) : undefined)
    return (
    <AuthContext.Provider value={[auth, setAuth]} >
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)