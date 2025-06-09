import { createContext, ReactNode, useContext, useState } from "react";

type AuthContextType = {
    isAuth: boolean,
    login: () => void,
    logout: () => void,
    token: string,
    setToken: () => void,
    UserDetails: undefined,
    setUserDetails: () => void,
}

// Obj Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider Context
const AuthProvider = ({children}: {children: ReactNode}) => {

    const [isAuth, setIsAuth] = useState<boolean>(false);

    const login = () => setIsAuth(true);

    const logout = () => setIsAuth(false);

    const [token, setToken] = useState<string>("")

    const [UserDetails, setUserDetails] = useState<undefined>(undefined);

    return(
        <AuthContext.Provider value={{ isAuth, login, logout, token, setToken(){}, UserDetails, setUserDetails(){}}}>
            {children}
        </AuthContext.Provider>
    )

}

// Extração Context
const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error("useAuth deve ser usado dentro de um provider.")
    }
    return context;
}

export { AuthProvider, useAuth}